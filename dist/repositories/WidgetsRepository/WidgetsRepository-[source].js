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
exports.WidgetsRepository = void 0;
var Repository_1 = require("../Repository");
var utils_1 = require("../../utils");
var WidgetsRepository = /** @class */ (function (_super) {
    __extends(WidgetsRepository, _super);
    function WidgetsRepository(sendRequest) {
        var _this = _super.call(this, 'widget', sendRequest) || this;
        /**
         * @see https://vk.com/dev/widgets.getComments
         * @type {TRepositoryMethod<IGetCommentsParams, IGetCommentsResult>}
         */
        _this.getComments = _this.r('getComments', function (_a) {
            var fields = _a.fields, rest = __rest(_a, ["fields"]);
            return (__assign(__assign({}, rest), { fields: utils_1.formatOptionalArray(fields) }));
        });
        /**
         * @see https://vk.com/dev/widgets.getPages
         * @type {TRepositoryMethod<IGetPagesParams, IGetPagesResult>}
         */
        _this.getPages = _this.r('getPages');
        return _this;
    }
    return WidgetsRepository;
}(Repository_1.Repository));
exports.WidgetsRepository = WidgetsRepository;
