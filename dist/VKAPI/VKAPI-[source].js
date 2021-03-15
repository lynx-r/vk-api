var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import 'cross-fetch/polyfill';
import { Core } from '../Core';
import { Queue } from '../Queue';
import { recursiveToCamelCase, recursiveToSnakeCase } from '../utils';
import { VKError } from '../VKError';
/**
 * Class to perform requests to VK API.
 */
export class VKAPI extends Core {
    constructor(props = {}) {
        super();
        /**
         * Access token to perform requests. Used in all requests until overridden.
         * @type {string | null}
         */
        this.accessToken = null;
        this.sendRequest = (config) => __awaiter(this, void 0, void 0, function* () {
            const { method, params } = config;
            // Mix data with defaults. Format body to snake case.
            const formattedData = recursiveToSnakeCase(Object.assign({ v: this.v, accessToken: this.accessToken, lang: this.lang }, params));
            // Create urlencoded form.
            const form = Object
                .entries(formattedData)
                .filter(([, value]) => value !== undefined)
                .map(([key, value]) => {
                const formattedValue = typeof value === 'object'
                    ? JSON.stringify(value)
                    : String(value);
                return encodeURIComponent(key) + '=' +
                    encodeURIComponent(formattedValue);
            })
                .join('&');
            const url = `${this.baseUrl}/${method}`;
            // In case, we are in browser, it is required to use JSONP.
            if (this.isBrowser) {
                return new Promise((res, rej) => {
                    const cbName = `__vkapicallback` + Math.random().toString().slice(2);
                    // Create script tag and assign source.
                    const script = document.createElement('script');
                    script.src = `${url}?${form}&callback=${cbName}`;
                    // Define JSONP callback.
                    window[cbName] = (data) => {
                        // Remove script tag from DOM.
                        document.head.removeChild(script);
                        if (data === null || data === void 0 ? void 0 : data.response) {
                            return res(recursiveToCamelCase(data.response));
                        }
                        rej(new VKError({
                            errorInfo: recursiveToCamelCase((data === null || data === void 0 ? void 0 : data.error) || {}),
                            config,
                        }));
                    };
                    // Append script to DOM.
                    document.head.appendChild(script);
                });
            }
            // Otherwise, send usual HTTP request.
            const response = yield fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                },
                body: form,
            });
            const json = yield response.json();
            // In case, we received response, convert it to camel case.
            if ('response' in json) {
                return recursiveToCamelCase(json.response);
            }
            // Otherwise, throw an error.
            throw new VKError({
                errorInfo: recursiveToCamelCase((json === null || json === void 0 ? void 0 : json.error) || {}),
                config,
            });
        });
        this.addRequestToQueue = (config) => __awaiter(this, void 0, void 0, function* () {
            // Wait until request can be performed.
            yield this.queue.await();
            // When awaiting is done, perform a request.
            return this.sendRequest(config);
        });
        this.addRepository = (name, Repo) => {
            return super.addRepository(name, Repo, this.addRequestToQueue);
        };
        const { rps = 3, accessToken, v = '5.110', lang = 'ru', isBrowser = false, baseUrl = 'https://api.vk.com/method', } = props;
        this.accessToken = accessToken || null;
        this.v = v;
        this.lang = lang;
        this.isBrowser = isBrowser;
        this.queue = new Queue({ timeout: Math.ceil(1000 / rps) });
        this.baseUrl = baseUrl.endsWith('/')
            ? baseUrl.slice(0, baseUrl.length - 1)
            : baseUrl;
        // Initialize repositories with specified addRequestToQueue method.
        this.init(this.addRequestToQueue);
    }
}
