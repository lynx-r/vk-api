import { IVKAPIMessage, IVKAPIPerformRequestMessage } from '../types';
/**
 * States if message is VKAPIProcessRequestMessage
 * @param message
 * @returns {message is VKAPIProcessRequestMessage}
 */
export declare function isVKAPIProcessRequestMessage(message: IVKAPIMessage): message is IVKAPIPerformRequestMessage;
