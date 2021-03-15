import { isVKAPIMessage } from '../utils';
import { REQUEST_PERFORM_ALLOWED_EVENT } from '../constants';
/**
 * States if message is IVKAPIRequestPerformAllowedMessage.
 * @param message
 * @returns {message is IVKAPIRequestPerformAllowedMessage}
 */
export function isVKAPIRequestPerformAllowedMessage(message) {
    return isVKAPIMessage(message) &&
        message.type === REQUEST_PERFORM_ALLOWED_EVENT;
}
