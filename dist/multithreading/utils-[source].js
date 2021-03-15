import { isNonNullObject } from '../utils';
/**
 * States is value extends VKAPIMessage.
 * @param value
 * @returns {value is VKAPIMessage & Record<string, unknown>}
 */
export function isVKAPIMessage(value) {
    return isNonNullObject(value) &&
        typeof value.tunnelName === 'string' &&
        typeof value.requestId === 'string' &&
        value.isVKAPIMessage === true;
}
