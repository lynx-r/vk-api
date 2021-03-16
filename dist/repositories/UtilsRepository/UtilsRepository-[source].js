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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilsRepository = void 0;
var Repository_1 = require("../Repository");
var utils_1 = require("../../utils");
var UtilsRepository = /** @class */ (function (_super) {
    __extends(UtilsRepository, _super);
    function UtilsRepository(sendRequest) {
        var _this = _super.call(this, 'utils', sendRequest) || this;
        /**
         * @see https://vk.com/dev/utils.checkLink
         * @type {TRepositoryMethod<ICheckLinkParams, ICheckLinkResult>}
         */
        _this.checkLink = _this.r('checkLink');
        /**
         * @see https://vk.com/dev/utils.deleteFromLastShortened
         * @type {TRepositoryMethod<IDeleteFromLastShortenedParams, TDeleteFromLastShortenedResult>}
         */
        _this.deleteFromLastShortened = _this.r('deleteFromLastShortened');
        /**
         * @see https://vk.com/dev/utils.getLastShortenedLinks
         * @type {TRepositoryMethod<IGetLastShortenedLinksParams, TGetLastShortenedLinksResult>}
         */
        _this.getLastShortenedLinks = _this.r('getLastShortenedLinks');
        /**
         * @see https://vk.com/dev/utils.getLinkStats
         * @type {TRepositoryMethod<IGetLinkStatsParams, TGetLastShortenedLinksResult>}
         */
        _this.getLinkStats = _this.r('getLinkStats', function (_a) {
            var extended = _a.extended, rest = __rest(_a, ["extended"]);
            return (__assign(__assign({}, rest), { extended: utils_1.formatOptionalBoolean(extended) }));
        });
        /**
         * @see https://vk.com/dev/utils.getServerTime
         * @type {TRepositoryMethod<IGetServerTimeParams, TGetServerTimeResult>}
         */
        _this.getServerTime = _this.r('getServerTime');
        /**
         * @see https://vk.com/dev/utils.getShortLink
         * @type {TRepositoryMethod<IGetShortLinkParams, IGetShortLinkResult>}
         */
        _this.getShortLink = _this.r('getShortLink', function (_a) {
            var isPrivate = _a.private, rest = __rest(_a, ["private"]);
            return (__assign(__assign({}, rest), { private: utils_1.formatOptionalBoolean(isPrivate) }));
        });
        /**
         * @see https://vk.com/dev/utils.resolveScreenName
         * @type {TRepositoryMethod<IResolveScreenNameParams, TResolveScreenNameResult>}
         */
        _this.resolveScreenName = _this.r('resolveScreenName');
        return _this;
    }
    return UtilsRepository;
}(Repository_1.Repository));
exports.UtilsRepository = UtilsRepository;
