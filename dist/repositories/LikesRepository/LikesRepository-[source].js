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
exports.LikesRepository = void 0;
var Repository_1 = require("../Repository");
var utils_1 = require("../../utils");
var LikesRepository = /** @class */ (function (_super) {
    __extends(LikesRepository, _super);
    function LikesRepository(sendRequest) {
        var _this = _super.call(this, 'likes', sendRequest) || this;
        /**
         * https://vk.com/dev/likes.add
         * @type {(params: (IAddParams & IRequestOptionalParams)) => Promise<IAddResult>}
         */
        _this.add = _this.r('add');
        /**
         * @see https://vk.com/dev/likes.delete
         * @type {(params: (IDeleteParams & IRequestOptionalParams)) => Promise<IDeleteResult>}
         */
        _this.delete = _this.r('delete');
        /**
         * @see https://vk.com/dev/likes.getList
         * @type {(params: (IGetListParams & IRequestOptionalParams)) => Promise<IGetListResult>}
         */
        _this.getList = _this.r('getList', function (_a) {
            var friendsOnly = _a.friendsOnly, extended = _a.extended, skipOwn = _a.skipOwn, rest = __rest(_a, ["friendsOnly", "extended", "skipOwn"]);
            return (__assign({ friendsOnly: utils_1.formatOptionalBoolean(friendsOnly), extended: utils_1.formatOptionalBoolean(extended), skipOwn: utils_1.formatOptionalBoolean(skipOwn) }, rest));
        });
        /**
         * @see https://vk.com/dev/likes.isLiked
         * @type {(params: (IIsLikedParams & IRequestOptionalParams)) => Promise<IIsLikedResult>}
         */
        _this.isLiked = _this.r('isLiked');
        return _this;
    }
    return LikesRepository;
}(Repository_1.Repository));
exports.LikesRepository = LikesRepository;
