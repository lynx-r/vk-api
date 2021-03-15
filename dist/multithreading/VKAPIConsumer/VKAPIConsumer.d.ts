import { IVKAPI } from '../../VKAPI';
import { TSendRequest } from '../../types';
import { IVKAPIConsumerConstructorProps } from './types';
import { Core } from '../../Core';
import { Repository } from '../../repositories';
/**
 * Stub class which wants to get data from API VKontakte and has to
 * communicate with master.
 */
export declare class VKAPIConsumer extends Core implements IVKAPI {
    /**
     * Tunnel name.
     */
    private readonly tunnelName;
    /**
     * Internal request counter. Required to send and get answers from master.
     * @type {string}
     */
    private requestId;
    /**
     * Instance of VKAPI which performs requests.
     * @type {IVKAPI}
     * @private
     */
    private readonly instance;
    constructor(props: IVKAPIConsumerConstructorProps);
    sendRequest: TSendRequest;
    addRequestToQueue: TSendRequest;
    addRepository<N extends string, R extends Repository>(name: N extends keyof this ? never : N, Repo: {
        new (sendRequest: TSendRequest): R;
        prototype: R;
    }): this & Record<N, R>;
}
