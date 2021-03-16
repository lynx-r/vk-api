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
exports.StatEventsRepository = void 0;
var Repository_1 = require("../Repository");
var StatEventsRepository = /** @class */ (function (_super) {
    __extends(StatEventsRepository, _super);
    function StatEventsRepository(sendRequest) {
        var _this = _super.call(this, 'statEvents', sendRequest) || this;
        /**
         * @see https://vk.com/dev/statEvents.addMiniAppsCustom
         * @type {TRepositoryMethod<TAddMiniAppsCustomParams, TAddMiniAppsCustomResult>}
         */
        _this.addMiniAppsCustom = _this.r('addMiniAppsCustom', function (params) {
            var events = params.events, rest = __rest(params, ["events"]);
            var formattedEvents = events.map(function (e) {
                var json = e.json, timestamp = e.timestamp, rest = __rest(e, ["json", "timestamp"]);
                return __assign(__assign({}, rest), { json: typeof json === 'object' ? JSON.stringify(json) : undefined, timestamp: typeof timestamp === 'number'
                        ? timestamp
                        : (typeof timestamp === 'undefined'
                            ? undefined
                            : timestamp.getTime()) });
            });
            return __assign(__assign({}, rest), { events: formattedEvents });
        });
        /**
         * @see https://vk.com/dev/statEvents.addMiniApps
         * @type {TRepositoryMethod<IAddMiniAppsParams, TAddMiniAppsCustomResult>}
         */
        _this.addMiniApps = _this.r('addMiniApps');
        return _this;
    }
    return StatEventsRepository;
}(Repository_1.Repository));
exports.StatEventsRepository = StatEventsRepository;
