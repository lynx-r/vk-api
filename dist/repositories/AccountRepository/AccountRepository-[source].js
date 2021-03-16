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
exports.AccountRepository = void 0;
var Repository_1 = require("../Repository");
var utils_1 = require("../../utils");
var AccountRepository = /** @class */ (function (_super) {
    __extends(AccountRepository, _super);
    function AccountRepository(sendRequest) {
        var _this = _super.call(this, 'account', sendRequest) || this;
        /**
         * @see https://vk.com/dev/account.ban
         * @type {(params: (IBanParams & IRequestOptionalParams)) => Promise<1>}
         */
        _this.ban = _this.r('ban');
        /**
         * @see https://vk.com/dev/account.changePassword
         * @type {(params: (IChangePasswordParams & IRequestOptionalParams)) => Promise<IChangePasswordResult>}
         */
        _this.changePassword = _this.r('changePassword');
        /**
         * @see https://vk.com/dev/account.getActiveOffers
         * @type {(params: (IGetActiveOffersParams & IRequestOptionalParams)) => Promise<IGetActiveOffersResult>}
         */
        _this.getActiveOffers = _this.r('getActiveOffers');
        /**
         * @see https://vk.com/dev/account.getAppPermissions
         * @type {(params: (IGetAppPermissionsParams & IRequestOptionalParams)) => Promise<number>}
         */
        _this.getAppPermissions = _this
            .r('getAppPermissions');
        /**
         * @see https://vk.com/dev/account.getBanned
         * @type {(params: (IGetBannedParams & IRequestOptionalParams)) => Promise<IGetBannedResult>}
         */
        _this.getBanned = _this.r('getBanned');
        /**
         * @see https://vk.com/dev/account.getCounters
         * @type {(params: (IGetCountersParams & IRequestOptionalParams)) => Promise<[] | Partial<Record<"friends" | "friends_suggestions" | "friends_recommendations" | "messages" | "menu_discover_badge" | "menu_clips_badge" | "menu_superapp_friends_badge" | "photos" | "videos" | "gifts" | "events" | "groups" | "notifications" | "sdk" | "app_requests", number>>>}
         */
        _this.getCounters = _this.r('getCounters', function (_a) {
            var filter = _a.filter, rest = __rest(_a, ["filter"]);
            return (__assign(__assign({}, rest), { filter: utils_1.formatOptionalArray(filter) }));
        });
        /**
         * @see https://vk.com/dev/account.getInfo
         * @type {(params: (IGetInfoParams & IRequestOptionalParams)) => Promise<IGetInfoResult>}
         */
        _this.getInfo = _this.r('getInfo', function (_a) {
            var fields = _a.fields, rest = __rest(_a, ["fields"]);
            return (__assign(__assign({}, rest), { fields: utils_1.formatOptionalArray(fields) }));
        });
        /**
         * @see https://vk.com/dev/account.getProfileInfo
         * @type {(params: (IGetProfileInfoParams & IRequestOptionalParams)) => Promise<IGetProfileInfoResult>}
         */
        _this.getProfileInfo = _this.r('getProfileInfo');
        /**
         * @see https://vk.com/dev/account.getPushSettings
         * @type {(params: (({token: string} & IRequestOptionalParams) | ({deviceId: number} & IRequestOptionalParams))) => Promise<IGetPushSettingsResult>}
         */
        _this.getPushSettings = _this.r('getPushSettings');
        /**
         * @see https://vk.com/dev/account.registerDevice
         * @type {(params: (IRegisterDeviceParams & IRequestOptionalParams)) => Promise<1>}
         */
        _this.registerDevice = _this.r('registerDevice', function (_a) {
            var sandbox = _a.sandbox, rest = __rest(_a, ["sandbox"]);
            return (__assign(__assign({}, rest), { sandbox: utils_1.formatOptionalBoolean(sandbox) }));
        });
        /**
         * @see https://vk.com/dev/account.saveProfileInfo
         * @type {(params: (ISaveProfileInfoParams & IRequestOptionalParams)) => Promise<ISaveProfileInfoResult>}
         */
        _this.saveProfileInfo = _this.r('saveProfileInfo');
        /**
         * @see https://vk.com/dev/account.setInfo
         * @type {(params: ((TSetInfoParam<"intro", number> & IRequestOptionalParams) | (TSetInfoParam<"own_posts_default", 0 | 1> & IRequestOptionalParams) | (TSetInfoParam<"no_wall_replies", 0 | 1> & IRequestOptionalParams))) => Promise<1>}
         */
        _this.setInfo = _this.r('setInfo');
        /**
         * @see https://vk.com/dev/account.setNameInMenu
         * @type {(params: (ISetNameInMenuParams & IRequestOptionalParams)) => Promise<1>}
         */
        _this.setNameInMenu = _this.r('setNameInMenu');
        /**
         * @see https://vk.com/dev/account.setOffline
         * @type {(params: (ISetOfflineParams & IRequestOptionalParams)) => Promise<1>}
         */
        _this.setOffline = _this.r('setOffline');
        /**
         * @see https://vk.com/dev/account.setOnline
         * @type {(params: (ISetOnlineParams & IRequestOptionalParams)) => Promise<1>}
         */
        _this.setOnline = _this.r('setOnline', function (_a) {
            var voip = _a.voip, rest = __rest(_a, ["voip"]);
            return (__assign(__assign({}, rest), { voip: utils_1.formatOptionalBoolean(voip) }));
        });
        /**
         * @see https://vk.com/dev/account.setPushSettings
         * @type {(params: (({token: string} & {settings: IPushSettings, key: string, value: TPushSetting[]} & IRequestOptionalParams) | ({deviceId: number} & {settings: IPushSettings, key: string, value: TPushSetting[]} & IRequestOptionalParams))) => Promise<1>}
         */
        _this.setPushSettings = _this.r('setPushSettings');
        /**
         * @see https://vk.com/dev/account.setSilenceMode
         * @type {(params: (TSetSilenceModeParams & IRequestOptionalParams)) => Promise<1>}
         */
        _this.setSilenceMode = _this.r('setSilenceMode', function (_a) {
            var sound = _a.sound, rest = __rest(_a, ["sound"]);
            return (__assign(__assign({}, rest), { sound: utils_1.formatOptionalBoolean(sound) }));
        });
        /**
         * @see https://vk.com/dev/account.unban
         * @type {(params: (IUnbanParams & IRequestOptionalParams)) => Promise<1>}
         */
        _this.unban = _this.r('unban');
        /**
         * @see https://vk.com/dev/account.unregisterDevice
         * @type {(params: (({token: string} & {sandbox?: boolean} & IRequestOptionalParams) | ({deviceId: number} & {sandbox?: boolean} & IRequestOptionalParams))) => Promise<1>}
         */
        _this.unregisterDevice = _this.r('unregisterDevice', function (_a) {
            var sandbox = _a.sandbox, rest = __rest(_a, ["sandbox"]);
            return (__assign(__assign({}, rest), { sandbox: utils_1.formatOptionalBoolean(sandbox) }));
        });
        return _this;
    }
    return AccountRepository;
}(Repository_1.Repository));
exports.AccountRepository = AccountRepository;
