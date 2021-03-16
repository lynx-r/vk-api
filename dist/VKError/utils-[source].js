"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isVKError = void 0;
var VKError_1 = require("./VKError");
/**
 * States if value is VKError.
 * @param value
 * @returns {value is VKError}
 */
function isVKError(value) {
    return value instanceof VKError_1.VKError;
}
exports.isVKError = isVKError;
