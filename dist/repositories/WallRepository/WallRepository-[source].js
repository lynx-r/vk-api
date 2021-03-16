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
exports.WallRepository = void 0;
var Repository_1 = require("../Repository");
var WallRepository = /** @class */ (function (_super) {
    __extends(WallRepository, _super);
    function WallRepository(sendRequest) {
        var _this = _super.call(this, 'wall', sendRequest) || this;
        /**
         * @see https://vk.com/dev/wall.post
         */
        _this.post = _this.r('post');
        return _this;
    }
    return WallRepository;
}(Repository_1.Repository));
exports.WallRepository = WallRepository;
