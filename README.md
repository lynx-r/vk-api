[npm-badge]: https://img.shields.io/npm/v/vkontakte-api.svg
[npm-link]: https://npmjs.com/package/vkontakte-api

[<img src="https://i.imgur.com/uOIQBBR.png">](https://vk.com/dev)
# vkontakte-api [![NPM][npm-badge]][npm-link]

TypeScript library to make requests performing to VK API simple

## Installation
```bash
yarn add vkontakte-api
```
or
```bash
npm i vkontakte-api
```

## Description

`vkontakte-api` follows repositories based concept where each repository is a 
class and represents some namespace in API. The main purpose of repository
is to format request config for VKAPI instance, so it could perform request
and return data.

Each request is added to queue and executed only after timeout calculated
according to `rps` property. So, there is no case when you were 
banned due to sending too many requests per second.

There is a multi-thread (multi-workers) support for those projects which are
launched in this mode.  

## Usage

### Creating instance

Firstly, it is required to create `VKAPI` instance:
```typescript
import {VKAPI} from 'vkontakte-api';

const api = new VKAPI;
``` 

It is allowed to pass `rps` (which is `3` by default) property which means 
`requests per second`. VK API has its restriction, so make sure you have 
passed correct value. 

Additionally, you can pass properties `accessToken` and `lang` which will be 
used as default parameters for each request. So, you have no need to pass them
each time until overriding is needed:

```typescript
const api = new VKAPI({
  rps: 20,
  accessToken: 'my default token',
  lang: 'uk',
});
```

### Browser mode

If you are using `VKAPI` on browser side, you could use property `isBrowser`
which is `false` by default. In case, this value is `true`, api instance
performs requests in JSONP callback mode. It does not make any influence on
external code flow. If this value is not passed, requests will be executed
in usual mode and on the browser side they will fail due to VK's CORS.

```typescript
const api = new VKAPI({isBrowser: true});
```

### Performing requests

VKAPI instance contains a list of repositories which generate request parameters
to send to API. Each repository is named according to its name in 
[API](https://vk.com/dev/methods).

Simple example of sending request and logging data:
```typescript
import {VKAPI} from 'vkontakte-api';

const api = new VKAPI();

api.users.get({userIds: ['vladkibenko']}).then(console.log);
```

Sending some notification:
```typescript
api.notifications.sendMessage({
  userIds: ['vladkibenko'],
  message: 'Hello Vlad!',
});
```

Overriding default `lang` and `accessToken`:
```typescript
import {LangEnum, VKAPI} from 'vkontakte-api';

const api = new VKAPI({accessToken: 'my personal user token'});

// Here we will get english-localized data from some application's face
api.users.get({
  userIds: ['vladkibenko'],
  accessToken: 'some application token',
  // Or you could just use 'uk' or 1
  lang: LangEnum.UK,
}).then(console.log);
```

Some of methods are not currently typed or realised. So, you are free to perform
custom requests. **Make sure, all of `Params` and `Response` fields are camel 
cased, because internally, `vkontakte-api` moves them from snake to camel 
case for easier usage**:

```typescript
import {VKAPI} from 'vkontakte-api';

const api = new VKAPI({accessToken: 'my token'});

// Description of parameters
interface Params {
  cityIds: string;
}

// Description of response
type Response = Array<{
  id: number;
  title: string;
}>;

// @see https://vk.com/dev/database.getCitiesById
api.addRequestToQueue<Params, Response>({
  method: 'database.getCitiesById',
  params: {
    cityIds: [1].join(','),
  },
}).then(console.log);
```

### Errors

Sometimes, API throws errors. To detect if error was thrown by VK, you could
use function `isVKError`. It contains such properties as `errorInfo` which 
contains all error data from VK and `config` which was used to perform request.

Moreover, lib contains enum `EErrors` which is a set of all known errors.

### Multi-threading support

In case your project is ran in multi cluster mode, you could use `VKAPIProvider`
and `VKAPIConsumer`.

`VKAPIProvider` should be used in a main thread and `VKAPIConsumer`s in slave
threads. 

Here is simple example:
```typescript
import {fork, isMaster, Worker} from 'cluster';
import os from 'os';
import {VKAPI, IVKAPI} from 'vkontakte-api';
import {VKAPIProvider, VKAPIConsumer} from 'vkontakte-api/dist/multithreading';

// Runs http server. Accepts an object which looks like VKAPI instance. So,
// he does not know what api exactly is. It could be real VKAPI instance or
// VKAPIConsumer.
function http(api: IVKAPI) {
  // Here we can use all of the VKAPI methods
  api.users.get({userIds: ['vladkibenko']}).then(console.log);
}

// Just a stub. You can use the logic you need
const isDev = process.env.NODE_ENV === 'development';

// In development mode, let us run single thread. So, no VKAPIProvider and
// VKAPIConsumer are needed.
if (isDev) {
  const api = new VKAPI();
  
  // Run http server
  return http(api);
}

// In production mode, we do create as many forks as processor support.
if (isMaster) {
  const cpuCount = os.cpus().length;
  const workers: Worker[] = [];

  for (let i = 0; i < cpuCount; i++) {
    workers.push(fork());
  }

  // In master we create VKAPIProvider with specified rps property 
  // (VKAPIConsumer api instance rps will be ignored). If not passed, rps will 
  // be 3, so make sure you have passed that property.
  const provider = new VKAPIProvider({workers});
  provider.init();
} 
// In slaves, we just create http server with VKAPIConsumer.
else {
  // Create VKAPI instance consumer instance.
  http(new VKAPIConsumer({
    instance: new VKAPI({accessToken: '...', v: '5.103'}),
  }));
}
```

#### Defining connection between the provider and consumer

There is a rare case, when your project contains 2 providers with for 
different `VKAPI` instances. For example, you could create separate api 
instances for group and application which use different access tokens.

So then, it is allowed to pass same property `tunnelName` for both provider and 
consumer. Here is how it works:

```typescript
import {isMaster} from 'cluster'; 
import {VKAPI} from 'vkontakte-api';
import {VKAPIProvider, VKAPIConsumer} from 'vkontakte-api/dist/multithreading';

if (isMaster) {
  const cpuCount = os.cpus().length;
  const workers: Worker[] = [];

  for (let i = 0; i < cpuCount; i++) {
    workers.push(fork());
  }

  // API provider for group API instance
  const groupApiProvider = new VKAPIProvider({tunnelName: 'group', workers});
  groupApiProvider.init();

  // API provider for VK Mini Apps application API instance
  const appApiProvider = new VKAPIProvider({tunnelName: 'app', workers});
  appApiProvider.init(); 
} else {
  // Create API instance consumers
  const groupApi = new VKAPIConsumer({
    tunnelName: 'group',
    instance: new VKAPI({accessToken: 'group access token'}),
  });
  const appApi = new VKAPIConsumer({
    tunnelName: 'app',
    instance: new VKAPI({accessToken: 'application access token'})
  });
}
``` 
