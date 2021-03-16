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
exports.StreamingRepository = void 0;
var Repository_1 = require("../Repository");
var StreamingRepository = /** @class */ (function (_super) {
    __extends(StreamingRepository, _super);
    function StreamingRepository(sendRequest) {
        var _this = _super.call(this, 'streaming', sendRequest) || this;
        /**
         * @see https://vk.com/dev/streaming.getServerUrl
         * @type {TRepositoryMethod<IGetServerUrlParams, IGetServerUrlResult>}
         */
        _this.getServerUrl = _this.r('getServerUrl');
        /**
         * @see https://vk.com/dev/streaming.getSettings
         * @type {TRepositoryMethod<IGetSettingsParams, IGetSettingsResult>}
         */
        _this.getSettings = _this.r('getSettings');
        /**
         * @see https://vk.com/dev/streaming.getStats
         * @type {TRepositoryMethod<IGetStatsParams, IGetStatsResult>}
         */
        _this.getStats = _this.r('getStats');
        /**
         * @see https://vk.com/dev/streaming.getStem
         * @type {TRepositoryMethod<IGetStemParams, IGetStemResult>}
         */
        _this.getStem = _this.r('getStem');
        /**
         * @see https://vk.com/dev/streaming.setSettings
         * @type {TRepositoryMethod<ISetSettingsParams, TSetSettingsResult>}
         */
        _this.setSettings = _this.r('setSettings');
        return _this;
    }
    return StreamingRepository;
}(Repository_1.Repository));
exports.StreamingRepository = StreamingRepository;
