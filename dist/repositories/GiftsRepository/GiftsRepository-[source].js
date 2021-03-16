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
exports.GiftsRepository = void 0;
var Repository_1 = require("../Repository");
var GiftsRepository = /** @class */ (function (_super) {
    __extends(GiftsRepository, _super);
    function GiftsRepository(sendRequest) {
        var _this = _super.call(this, 'gifts', sendRequest) || this;
        /**
         * @see https://vk.com/dev/gifts.get
         * @type {(params: (IGetParams & IRequestOptionalParams)) => Promise<IPager<{id: number, fromId: number, message: string, date: number, gift: {id: number, thumb256: string, thumb96: string, thumb48: string}, privacy: EGiftPrivacy, giftHash: string}>>}
         */
        _this.get = _this.r('get');
        return _this;
    }
    return GiftsRepository;
}(Repository_1.Repository));
exports.GiftsRepository = GiftsRepository;
