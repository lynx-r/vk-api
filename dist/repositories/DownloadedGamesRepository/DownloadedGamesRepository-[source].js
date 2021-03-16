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
exports.DownloadedGamesRepository = void 0;
var Repository_1 = require("../Repository");
var DownloadedGamesRepository = /** @class */ (function (_super) {
    __extends(DownloadedGamesRepository, _super);
    function DownloadedGamesRepository(sendRequest) {
        var _this = _super.call(this, 'downloadedGames', sendRequest) || this;
        /**
         * @see https://vk.com/dev/downloadedGames.getPaidStatus
         * @type {(params: (IGetPaidStatusParams & IRequestOptionalParams)) => Promise<IGetPaidStatusResult>}
         */
        _this.getPaidStatus = _this.r('getPaidStatus');
        return _this;
    }
    return DownloadedGamesRepository;
}(Repository_1.Repository));
exports.DownloadedGamesRepository = DownloadedGamesRepository;
