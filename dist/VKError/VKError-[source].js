"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.VKError = void 0;
var utils_1 = require("../utils");
var ERROR_NAME = 'VKError';
/**
 * Represents an error sent from VKontakte.
 */
var VKError = /** @class */ (function (_super) {
    __extends(VKError, _super);
    function VKError(props) {
        var _this = _super.call(this, JSON.stringify(props.errorInfo)) || this;
        var errorInfo = props.errorInfo, config = props.config;
        _this.errorInfo = errorInfo;
        _this.config = config;
        _this.name = ERROR_NAME;
        if (Error.captureStackTrace) {
            Error.captureStackTrace(_this, VKError);
        }
        return _this;
    }
    return VKError;
}(Error));
exports.VKError = VKError;
/**
 * Define instanceof check.
 */
Object.defineProperty(VKError, Symbol.hasInstance, {
    value: function (obj) { return utils_1.isNonNullObject(obj) &&
        obj.name === ERROR_NAME &&
        utils_1.isNonNullObject(obj.data); },
});
