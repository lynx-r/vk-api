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
exports.StatsRepository = void 0;
var Repository_1 = require("../Repository");
var utils_1 = require("../../utils");
var StatsRepository = /** @class */ (function (_super) {
    __extends(StatsRepository, _super);
    function StatsRepository(sendRequest) {
        var _this = _super.call(this, 'stats', sendRequest) || this;
        /**
         * @see https://vk.com/dev/stats.get
         * @type {TRepositoryMethod<TGetParams, TGetResult>}
         */
        _this.get = _this.r('get', function (_a) {
            var extended = _a.extended, filters = _a.filters, rest = __rest(_a, ["extended", "filters"]);
            return (__assign(__assign({}, rest), { extended: utils_1.formatOptionalBoolean(extended), filters: utils_1.formatOptionalArray(filters) }));
        });
        /**
         * @see https://vk.com/dev/stats.getPostReach
         * @type {TRepositoryMethod<IGetPostReachParams, IGetPostReachResult>}
         */
        _this.getPostReach = _this.r('getPostReach', function (_a) {
            var postIds = _a.postIds, rest = __rest(_a, ["postIds"]);
            return (__assign(__assign({}, rest), { postIds: utils_1.formatOptionalArray(postIds) }));
        });
        /**
         * @see https://vk.com/dev/stats.trackVisitor
         * @type {TRepositoryMethod<ITrackVisitorParams, TTrackVisitorResult>}
         */
        _this.trackVisitor = _this.r('trackVisitor');
        return _this;
    }
    return StatsRepository;
}(Repository_1.Repository));
exports.StatsRepository = StatsRepository;
