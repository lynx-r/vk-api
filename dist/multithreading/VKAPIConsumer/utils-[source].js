"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isVKAPIRequestPerformAllowedMessage = void 0;
var utils_1 = require("../utils");
var constants_1 = require("../constants");
/**
 * States if message is IVKAPIRequestPerformAllowedMessage.
 * @param message
 * @returns {message is IVKAPIRequestPerformAllowedMessage}
 */
function isVKAPIRequestPerformAllowedMessage(message) {
    return utils_1.isVKAPIMessage(message) &&
        message.type === constants_1.REQUEST_PERFORM_ALLOWED_EVENT;
}
exports.isVKAPIRequestPerformAllowedMessage = isVKAPIRequestPerformAllowedMessage;
