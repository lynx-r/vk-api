import { IQueueConstructorProps } from './types';
/**
 * Class which represents calls queue. It is important to understand that
 * this class purpose is not to perform http requests or something like
 * that. The main its purpose is to send signals when something can be called
 * according to passed timeout.
 */
export declare class Queue {
    /**
     * States when queue is free.
     * @type {number | null}
     */
    freeAt: number | null;
    /**
     * Timeout between queue calls.
     * @type {number}
     * @private
     */
    private readonly timeout;
    constructor(props: IQueueConstructorProps);
    await(): Promise<void>;
}
