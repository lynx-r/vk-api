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
exports.UsersRepository = void 0;
var Repository_1 = require("../Repository");
var utils_1 = require("../../utils");
var UsersRepository = /** @class */ (function (_super) {
    __extends(UsersRepository, _super);
    function UsersRepository(sendRequest) {
        var _this = _super.call(this, 'users', sendRequest) || this;
        /**
         * @see https://vk.com/dev/users.get
         */
        _this.get = _this.r('get', function (_a) {
            var userIds = _a.userIds, fields = _a.fields, rest = __rest(_a, ["userIds", "fields"]);
            return (__assign(__assign({}, rest), { userIds: utils_1.formatOptionalArray(userIds), fields: utils_1.formatOptionalArray(fields) }));
        });
        /**
         * @see https://vk.com/dev/users.getFollowers
         */
        _this.getFollowers = _this.r('getFollowers', function (_a) {
            var fields = _a.fields, rest = __rest(_a, ["fields"]);
            return (__assign(__assign({}, rest), { fields: utils_1.formatOptionalArray(fields) }));
        });
        /**
         * @see https://vk.com/dev/users.getSubscriptions
         */
        _this.getSubscriptions = _this.r('getSubscriptions', function (_a) {
            var fields = _a.fields, extended = _a.extended, rest = __rest(_a, ["fields", "extended"]);
            return (__assign(__assign({}, rest), { extended: utils_1.formatOptionalBoolean(extended), fields: utils_1.formatOptionalArray(fields) }));
        });
        /**
         * @see https://vk.com/dev/users.report
         */
        _this.report = _this.r('getSubscriptions');
        _this.search = _this.r('search', function (_a) {
            var sort = _a.sort, online = _a.online, hasPhoto = _a.hasPhoto, rest = __rest(_a, ["sort", "online", "hasPhoto"]);
            return (__assign({ sort: typeof sort === 'undefined'
                    ? undefined
                    : (typeof sort === 'number'
                        ? sort
                        : utils_1.toPseudoBoolean(sort === 'popularity')), online: utils_1.formatOptionalBoolean(online), hasPhoto: utils_1.formatOptionalBoolean(hasPhoto) }, rest));
        });
        return _this;
    }
    return UsersRepository;
}(Repository_1.Repository));
exports.UsersRepository = UsersRepository;
