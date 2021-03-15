import 'cross-fetch/polyfill';
import { Core } from '../Core';
import { TAddRepository, TSendRequest } from '../types';
import { IVKAPI, IVKAPIConstructorProps } from './types';
/**
 * Class to perform requests to VK API.
 */
export declare class VKAPI extends Core implements IVKAPI {
    /**
     * Queue of requests.
     * @type {Queue}
     * @private
     */
    private readonly queue;
    /**
     * Access token to perform requests. Used in all requests until overridden.
     * @type {string | null}
     */
    private readonly accessToken;
    /**
     * API version.
     * @default '5.110'
     */
    private readonly v;
    /**
     * States if current environment is browser. Should be true if you
     * are using API instance on browser side to avoid problems with CORS.
     * @default false
     */
    private readonly isBrowser;
    /**
     * Initially selected language. Is used in all the requests until overridden.
     * @default 'ru'
     */
    private readonly lang;
    readonly baseUrl: string;
    constructor(props?: IVKAPIConstructorProps);
    sendRequest: TSendRequest;
    addRequestToQueue: TSendRequest;
    addRepository: TAddRepository<this>;
}
