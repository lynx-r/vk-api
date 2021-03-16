"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isVKAPIProcessRequestMessage = void 0;
var utils_1 = require("../utils");
var constants_1 = require("../constants");
/**
 * States if message is VKAPIProcessRequestMessage
 * @param message
 * @returns {message is VKAPIProcessRequestMessage}
 */
function isVKAPIProcessRequestMessage(message) {
    return utils_1.isVKAPIMessage(message) && message.type === constants_1.PERFORM_REQUEST_EVENT;
}
exports.isVKAPIProcessRequestMessage = isVKAPIProcessRequestMessage;
