import { IVKAPIMessage } from './types';
/**
 * States is value extends VKAPIMessage.
 * @param value
 * @returns {value is VKAPIMessage & Record<string, unknown>}
 */
export declare function isVKAPIMessage(value: any): value is IVKAPIMessage & Record<string, unknown>;
