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
exports.AuthRepository = void 0;
var Repository_1 = require("../Repository");
var AuthRepository = /** @class */ (function (_super) {
    __extends(AuthRepository, _super);
    function AuthRepository(sendRequest) {
        var _this = _super.call(this, 'auth', sendRequest) || this;
        /**
         * @see https://vk.com/dev/auth.restore
         * @type {(params: (IRestoreParams & IRequestOptionalParams)) => Promise<IRestoreResult>}
         */
        _this.restore = _this.r('restore');
        return _this;
    }
    return AuthRepository;
}(Repository_1.Repository));
exports.AuthRepository = AuthRepository;
