"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isVKAPIMessage = void 0;
var utils_1 = require("../utils");
/**
 * States is value extends VKAPIMessage.
 * @param value
 * @returns {value is VKAPIMessage & Record<string, unknown>}
 */
function isVKAPIMessage(value) {
    return utils_1.isNonNullObject(value) &&
        typeof value.tunnelName === 'string' &&
        typeof value.requestId === 'string' &&
        value.isVKAPIMessage === true;
}
exports.isVKAPIMessage = isVKAPIMessage;
