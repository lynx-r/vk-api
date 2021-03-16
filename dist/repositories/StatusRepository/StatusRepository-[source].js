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
exports.StatusRepository = void 0;
var Repository_1 = require("../Repository");
var StatusRepository = /** @class */ (function (_super) {
    __extends(StatusRepository, _super);
    function StatusRepository(sendRequest) {
        var _this = _super.call(this, 'status', sendRequest) || this;
        /**
         * @see https://vk.com/dev/status.get
         * @type {(params: (({userId: number} & IRequestOptionalParams) | ({groupId: number} & IRequestOptionalParams))) => Promise<IGetResult>}
         */
        _this.get = _this.r('get');
        /**
         * @see https://vk.com/dev/status.set
         * @type {(params: (ISetParams & IRequestOptionalParams)) => Promise<1>}
         */
        _this.set = _this.r('set');
        return _this;
    }
    return StatusRepository;
}(Repository_1.Repository));
exports.StatusRepository = StatusRepository;
