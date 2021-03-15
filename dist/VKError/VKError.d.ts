import { IErrorInfo, IVKErrorConstructorProps } from './types';
import { IRequestConfig } from '../types';
/**
 * Represents an error sent from VKontakte.
 */
export declare class VKError extends Error {
    /**
     * Error sent from VKontakte.
     * @type {IErrorInfo}
     */
    errorInfo: IErrorInfo;
    /**
     * Config with which request was performed.
     * @type {IRequestConfig}
     */
    config: IRequestConfig;
    constructor(props: IVKErrorConstructorProps);
}
