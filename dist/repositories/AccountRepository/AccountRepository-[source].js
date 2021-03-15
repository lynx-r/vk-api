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
import { Repository } from '../Repository';
import { formatOptionalArray, formatOptionalBoolean } from '../../utils';
export class AccountRepository extends Repository {
    constructor(sendRequest) {
        super('account', sendRequest);
        /**
         * @see https://vk.com/dev/account.ban
         * @type {(params: (IBanParams & IRequestOptionalParams)) => Promise<1>}
         */
        this.ban = this.r('ban');
        /**
         * @see https://vk.com/dev/account.changePassword
         * @type {(params: (IChangePasswordParams & IRequestOptionalParams)) => Promise<IChangePasswordResult>}
         */
        this.changePassword = this.r('changePassword');
        /**
         * @see https://vk.com/dev/account.getActiveOffers
         * @type {(params: (IGetActiveOffersParams & IRequestOptionalParams)) => Promise<IGetActiveOffersResult>}
         */
        this.getActiveOffers = this.r('getActiveOffers');
        /**
         * @see https://vk.com/dev/account.getAppPermissions
         * @type {(params: (IGetAppPermissionsParams & IRequestOptionalParams)) => Promise<number>}
         */
        this.getAppPermissions = this
            .r('getAppPermissions');
        /**
         * @see https://vk.com/dev/account.getBanned
         * @type {(params: (IGetBannedParams & IRequestOptionalParams)) => Promise<IGetBannedResult>}
         */
        this.getBanned = this.r('getBanned');
        /**
         * @see https://vk.com/dev/account.getCounters
         * @type {(params: (IGetCountersParams & IRequestOptionalParams)) => Promise<[] | Partial<Record<"friends" | "friends_suggestions" | "friends_recommendations" | "messages" | "menu_discover_badge" | "menu_clips_badge" | "menu_superapp_friends_badge" | "photos" | "videos" | "gifts" | "events" | "groups" | "notifications" | "sdk" | "app_requests", number>>>}
         */
        this.getCounters = this.r('getCounters', (_a) => {
            var { filter } = _a, rest = __rest(_a, ["filter"]);
            return (Object.assign(Object.assign({}, rest), { filter: formatOptionalArray(filter) }));
        });
        /**
         * @see https://vk.com/dev/account.getInfo
         * @type {(params: (IGetInfoParams & IRequestOptionalParams)) => Promise<IGetInfoResult>}
         */
        this.getInfo = this.r('getInfo', (_a) => {
            var { fields } = _a, rest = __rest(_a, ["fields"]);
            return (Object.assign(Object.assign({}, rest), { fields: formatOptionalArray(fields) }));
        });
        /**
         * @see https://vk.com/dev/account.getProfileInfo
         * @type {(params: (IGetProfileInfoParams & IRequestOptionalParams)) => Promise<IGetProfileInfoResult>}
         */
        this.getProfileInfo = this.r('getProfileInfo');
        /**
         * @see https://vk.com/dev/account.getPushSettings
         * @type {(params: (({token: string} & IRequestOptionalParams) | ({deviceId: number} & IRequestOptionalParams))) => Promise<IGetPushSettingsResult>}
         */
        this.getPushSettings = this.r('getPushSettings');
        /**
         * @see https://vk.com/dev/account.registerDevice
         * @type {(params: (IRegisterDeviceParams & IRequestOptionalParams)) => Promise<1>}
         */
        this.registerDevice = this.r('registerDevice', (_a) => {
            var { sandbox } = _a, rest = __rest(_a, ["sandbox"]);
            return (Object.assign(Object.assign({}, rest), { sandbox: formatOptionalBoolean(sandbox) }));
        });
        /**
         * @see https://vk.com/dev/account.saveProfileInfo
         * @type {(params: (ISaveProfileInfoParams & IRequestOptionalParams)) => Promise<ISaveProfileInfoResult>}
         */
        this.saveProfileInfo = this.r('saveProfileInfo');
        /**
         * @see https://vk.com/dev/account.setInfo
         * @type {(params: ((TSetInfoParam<"intro", number> & IRequestOptionalParams) | (TSetInfoParam<"own_posts_default", 0 | 1> & IRequestOptionalParams) | (TSetInfoParam<"no_wall_replies", 0 | 1> & IRequestOptionalParams))) => Promise<1>}
         */
        this.setInfo = this.r('setInfo');
        /**
         * @see https://vk.com/dev/account.setNameInMenu
         * @type {(params: (ISetNameInMenuParams & IRequestOptionalParams)) => Promise<1>}
         */
        this.setNameInMenu = this.r('setNameInMenu');
        /**
         * @see https://vk.com/dev/account.setOffline
         * @type {(params: (ISetOfflineParams & IRequestOptionalParams)) => Promise<1>}
         */
        this.setOffline = this.r('setOffline');
        /**
         * @see https://vk.com/dev/account.setOnline
         * @type {(params: (ISetOnlineParams & IRequestOptionalParams)) => Promise<1>}
         */
        this.setOnline = this.r('setOnline', (_a) => {
            var { voip } = _a, rest = __rest(_a, ["voip"]);
            return (Object.assign(Object.assign({}, rest), { voip: formatOptionalBoolean(voip) }));
        });
        /**
         * @see https://vk.com/dev/account.setPushSettings
         * @type {(params: (({token: string} & {settings: IPushSettings, key: string, value: TPushSetting[]} & IRequestOptionalParams) | ({deviceId: number} & {settings: IPushSettings, key: string, value: TPushSetting[]} & IRequestOptionalParams))) => Promise<1>}
         */
        this.setPushSettings = this.r('setPushSettings');
        /**
         * @see https://vk.com/dev/account.setSilenceMode
         * @type {(params: (TSetSilenceModeParams & IRequestOptionalParams)) => Promise<1>}
         */
        this.setSilenceMode = this.r('setSilenceMode', (_a) => {
            var { sound } = _a, rest = __rest(_a, ["sound"]);
            return (Object.assign(Object.assign({}, rest), { sound: formatOptionalBoolean(sound) }));
        });
        /**
         * @see https://vk.com/dev/account.unban
         * @type {(params: (IUnbanParams & IRequestOptionalParams)) => Promise<1>}
         */
        this.unban = this.r('unban');
        /**
         * @see https://vk.com/dev/account.unregisterDevice
         * @type {(params: (({token: string} & {sandbox?: boolean} & IRequestOptionalParams) | ({deviceId: number} & {sandbox?: boolean} & IRequestOptionalParams))) => Promise<1>}
         */
        this.unregisterDevice = this.r('unregisterDevice', (_a) => {
            var { sandbox } = _a, rest = __rest(_a, ["sandbox"]);
            return (Object.assign(Object.assign({}, rest), { sandbox: formatOptionalBoolean(sandbox) }));
        });
    }
}
