import { IVKAPIProviderConstructorProps } from './types';
/**
 * Master class which receives orders to perform requests to VKAPI.
 */
export declare class VKAPIProvider {
    /**
     * Slave threads.
     */
    private readonly workers;
    /**
     * Tunnel name.
     */
    private readonly tunnelName;
    /**
     * Queue of requests.
     * @type {Queue}
     * @private
     */
    private readonly queue;
    constructor(props: IVKAPIProviderConstructorProps);
    /**
     * Initializes threads listening.
     */
    init(): void;
}
