import { Repository } from '../Repository';
import { TSendRequest } from '../../types';
import { IBanParams, IChangePasswordParams, IChangePasswordResult, IGetActiveOffersParams, IGetActiveOffersResult, IGetAppPermissionsParams, IGetBannedParams, IGetBannedResult, IGetCountersParams, TGetCountersResult, IGetInfoParams, IGetInfoResult, IGetProfileInfoParams, IGetProfileInfoResult, IGetPushSettingsResult, IRegisterDeviceParams, ISetOfflineParams, ISetOnlineParams, IUnbanParams, TUnregisterDeviceParams, TSetSilenceModeParams, TSetInfoParams, ISetNameInMenuParams, TSetPushSettingsParams, ISaveProfileInfoParams, ISaveProfileInfoResult } from './types';
export declare class AccountRepository extends Repository {
    constructor(sendRequest: TSendRequest);
    /**
     * @see https://vk.com/dev/account.ban
     * @type {(params: (IBanParams & IRequestOptionalParams)) => Promise<1>}
     */
    ban: import("../../types").TRepositoryMethod<IBanParams, 1>;
    /**
     * @see https://vk.com/dev/account.changePassword
     * @type {(params: (IChangePasswordParams & IRequestOptionalParams)) => Promise<IChangePasswordResult>}
     */
    changePassword: import("../../types").TRepositoryMethod<IChangePasswordParams, IChangePasswordResult>;
    /**
     * @see https://vk.com/dev/account.getActiveOffers
     * @type {(params: (IGetActiveOffersParams & IRequestOptionalParams)) => Promise<IGetActiveOffersResult>}
     */
    getActiveOffers: import("../../types").TRepositoryMethod<IGetActiveOffersParams, IGetActiveOffersResult>;
    /**
     * @see https://vk.com/dev/account.getAppPermissions
     * @type {(params: (IGetAppPermissionsParams & IRequestOptionalParams)) => Promise<number>}
     */
    getAppPermissions: import("../../types").TRepositoryMethod<IGetAppPermissionsParams, number>;
    /**
     * @see https://vk.com/dev/account.getBanned
     * @type {(params: (IGetBannedParams & IRequestOptionalParams)) => Promise<IGetBannedResult>}
     */
    getBanned: import("../../types").TRepositoryMethod<IGetBannedParams, IGetBannedResult>;
    /**
     * @see https://vk.com/dev/account.getCounters
     * @type {(params: (IGetCountersParams & IRequestOptionalParams)) => Promise<[] | Partial<Record<"friends" | "friends_suggestions" | "friends_recommendations" | "messages" | "menu_discover_badge" | "menu_clips_badge" | "menu_superapp_friends_badge" | "photos" | "videos" | "gifts" | "events" | "groups" | "notifications" | "sdk" | "app_requests", number>>>}
     */
    getCounters: import("../../types").TRepositoryMethod<IGetCountersParams, TGetCountersResult>;
    /**
     * @see https://vk.com/dev/account.getInfo
     * @type {(params: (IGetInfoParams & IRequestOptionalParams)) => Promise<IGetInfoResult>}
     */
    getInfo: import("../../types").TRepositoryMethod<IGetInfoParams, IGetInfoResult>;
    /**
     * @see https://vk.com/dev/account.getProfileInfo
     * @type {(params: (IGetProfileInfoParams & IRequestOptionalParams)) => Promise<IGetProfileInfoResult>}
     */
    getProfileInfo: import("../../types").TRepositoryMethod<IGetProfileInfoParams, IGetProfileInfoResult>;
    /**
     * @see https://vk.com/dev/account.getPushSettings
     * @type {(params: (({token: string} & IRequestOptionalParams) | ({deviceId: number} & IRequestOptionalParams))) => Promise<IGetPushSettingsResult>}
     */
    getPushSettings: import("../../types").TRepositoryMethod<{
        token: string;
    } | {
        deviceId: number;
    }, IGetPushSettingsResult>;
    /**
     * @see https://vk.com/dev/account.registerDevice
     * @type {(params: (IRegisterDeviceParams & IRequestOptionalParams)) => Promise<1>}
     */
    registerDevice: import("../../types").TRepositoryMethod<IRegisterDeviceParams, 1>;
    /**
     * @see https://vk.com/dev/account.saveProfileInfo
     * @type {(params: (ISaveProfileInfoParams & IRequestOptionalParams)) => Promise<ISaveProfileInfoResult>}
     */
    saveProfileInfo: import("../../types").TRepositoryMethod<ISaveProfileInfoParams, ISaveProfileInfoResult>;
    /**
     * @see https://vk.com/dev/account.setInfo
     * @type {(params: ((TSetInfoParam<"intro", number> & IRequestOptionalParams) | (TSetInfoParam<"own_posts_default", 0 | 1> & IRequestOptionalParams) | (TSetInfoParam<"no_wall_replies", 0 | 1> & IRequestOptionalParams))) => Promise<1>}
     */
    setInfo: import("../../types").TRepositoryMethod<TSetInfoParams, 1>;
    /**
     * @see https://vk.com/dev/account.setNameInMenu
     * @type {(params: (ISetNameInMenuParams & IRequestOptionalParams)) => Promise<1>}
     */
    setNameInMenu: import("../../types").TRepositoryMethod<ISetNameInMenuParams, 1>;
    /**
     * @see https://vk.com/dev/account.setOffline
     * @type {(params: (ISetOfflineParams & IRequestOptionalParams)) => Promise<1>}
     */
    setOffline: import("../../types").TRepositoryMethod<ISetOfflineParams, 1>;
    /**
     * @see https://vk.com/dev/account.setOnline
     * @type {(params: (ISetOnlineParams & IRequestOptionalParams)) => Promise<1>}
     */
    setOnline: import("../../types").TRepositoryMethod<ISetOnlineParams, 1>;
    /**
     * @see https://vk.com/dev/account.setPushSettings
     * @type {(params: (({token: string} & {settings: IPushSettings, key: string, value: TPushSetting[]} & IRequestOptionalParams) | ({deviceId: number} & {settings: IPushSettings, key: string, value: TPushSetting[]} & IRequestOptionalParams))) => Promise<1>}
     */
    setPushSettings: import("../../types").TRepositoryMethod<TSetPushSettingsParams, 1>;
    /**
     * @see https://vk.com/dev/account.setSilenceMode
     * @type {(params: (TSetSilenceModeParams & IRequestOptionalParams)) => Promise<1>}
     */
    setSilenceMode: import("../../types").TRepositoryMethod<TSetSilenceModeParams, 1>;
    /**
     * @see https://vk.com/dev/account.unban
     * @type {(params: (IUnbanParams & IRequestOptionalParams)) => Promise<1>}
     */
    unban: import("../../types").TRepositoryMethod<IUnbanParams, 1>;
    /**
     * @see https://vk.com/dev/account.unregisterDevice
     * @type {(params: (({token: string} & {sandbox?: boolean} & IRequestOptionalParams) | ({deviceId: number} & {sandbox?: boolean} & IRequestOptionalParams))) => Promise<1>}
     */
    unregisterDevice: import("../../types").TRepositoryMethod<TUnregisterDeviceParams, 1>;
}
