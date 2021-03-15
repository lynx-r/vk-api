import { ERelationsStatus, ESex, IIdTitlePair, IPager, IPushSettings, TPseudoBoolean, TPushSetting, TUser } from '../../types';
declare type TCounter = 'friends' | 'friends_suggestions' | 'friends_recommendations' | 'messages' | 'menu_discover_badge' | 'menu_clips_badge' | 'menu_superapp_friends_badge' | 'photos' | 'videos' | 'gifts' | 'events' | 'groups' | 'notifications' | 'sdk' | 'app_requests';
declare type TGetInfoField = 'country' | 'https_required' | 'own_posts_default' | 'no_wall_replies' | 'intro' | 'lang';
declare type TDeviceIdOrToken = {
    token: string;
} | {
    deviceId: number;
};
export declare enum EAccountBirthDateVisibility {
    NotShown = 0,
    Shown = 1,
    ShowDayAndMonth = 2
}
declare type TNameRequest = {
    id: number;
    firstName: string;
    lastName: string;
} & ({
    status: 'processing' | 'declined' | 'response';
} | {
    status: 'response_with_link';
    link: string;
} | {
    status: 'was_accepted' | 'was_declined';
    repeatDate: string;
});
/**
 * @see https://vk.com/dev/account.ban
 */
export interface IBanParams {
    ownerId: number;
}
export declare type TBanResult = 1;
/**
 * @see https://vk.com/dev/account.changePassword
 */
export interface IChangePasswordParams {
    restoreSid?: string;
    changePasswordHash?: string;
    oldPassword?: string;
    newPassword: string;
}
export interface IChangePasswordResult {
    token: string;
}
/**
 * @see https://vk.com/dev/account.getActiveOffers
 */
export interface IGetActiveOffersParams {
    offset?: number;
    count?: number;
}
export interface IGetActiveOffersResult extends IPager<Record<string, unknown>> {
}
/**
 * @see https://vk.com/dev/account.getAppPermissions
 */
export interface IGetAppPermissionsParams {
    userId: number;
}
export declare type TGetAppPermissionsResult = number;
/**
 * @see https://vk.com/dev/account.getBanned
 */
export interface IGetBannedParams {
    offset?: number;
    count?: number;
}
export interface IGetBannedResult extends IPager<number> {
    profiles: {
        id: number;
        firstName: string;
        lastName: string;
        deactivated: 'banned';
    }[];
}
/**
 * @see https://vk.com/dev/account.getCounters
 */
export interface IGetCountersParams {
    filter?: TCounter[];
}
export declare type TGetCountersResult = [] | Partial<Record<TCounter, number>>;
/**
 * @see https://vk.com/dev/account.getInfo
 */
export interface IGetInfoParams {
    fields?: TGetInfoField[];
}
export interface IGetInfoResult {
    '2faRequired'?: TPseudoBoolean;
    country?: string;
    communityComments?: boolean;
    httpsRequired?: TPseudoBoolean;
    intro?: TPseudoBoolean;
    linkRedirects?: Record<string, string>;
    lang?: number;
    noWallReplies?: TPseudoBoolean;
    ownPostsDefault?: TPseudoBoolean;
    settings?: {
        available: boolean;
        forced: boolean;
        name: string;
        value: string;
    }[];
    subscriptionCountry: string;
}
/**
 * @see https://vk.com/dev/account.getProfileInfo
 */
export interface IGetProfileInfoParams {
}
export interface IGetProfileInfoResult {
    firstName: string;
    id: number;
    lastName: string;
    maidenName?: string;
    nameRequest?: TNameRequest;
    screenName?: string;
    sex: ESex;
    homeTown: string;
    status: string;
    bdate: string;
    bdateVisibility: EAccountBirthDateVisibility;
    city?: IIdTitlePair;
    country?: IIdTitlePair;
    phone: string;
    relation: ERelationsStatus;
    relationPartner?: TUser;
    relationPending?: TPseudoBoolean;
    relationRequests?: TUser[];
}
/**
 * @see https://vk.com/dev/account.getPushSettings
 */
export declare type TGetPushSettingsParams = TDeviceIdOrToken;
export interface IGetPushSettingsResult {
    disabled: TPseudoBoolean;
    disabledUntil?: number;
    settings?: IPushSettings;
    conversations: IPager<{
        disabledUntil: number;
        peerId: number;
        sound: TPseudoBoolean;
        disabledMentions: TPseudoBoolean;
        disabledMassMentions: TPseudoBoolean;
    }>;
}
/**
 * @see https://vk.com/dev/account.registerDevice
 */
export interface IRegisterDeviceParams {
    token: string;
    deviceModel?: string;
    deviceYear?: number;
    deviceId: number;
    systemVersion?: string;
    settings?: IPushSettings;
    sandbox?: boolean;
}
export declare type TRegisterDeviceResult = 1;
/**
 * @see https://vk.com/dev/account.saveProfileInfo
 */
export interface ISaveProfileInfoParams {
    firstName?: string;
    lastName?: string;
    maidenName?: string;
    screenName?: string;
    cancelRequestId?: number;
    sex?: Exclude<ESex, ESex.Unknown>;
    relation?: ERelationsStatus;
    relationPartnerId?: number;
    bdate?: string;
    bdateVisibility?: EAccountBirthDateVisibility;
    homeTown?: string;
    countryId?: number;
    cityId?: number;
    status?: string;
}
export interface ISaveProfileInfoResult {
    changed: TPseudoBoolean;
    nameRequest?: TNameRequest;
}
/**
 * @see https://vk.com/dev/account.setInfo
 */
declare type TSetInfoParam<K, V> = {
    name: K;
    value: V;
};
export declare type TSetInfoParams = TSetInfoParam<'intro', number> | TSetInfoParam<'own_posts_default', TPseudoBoolean> | TSetInfoParam<'no_wall_replies', TPseudoBoolean>;
export declare type TSetInfoResult = 1;
/**
 * @see https://vk.com/dev/account.setNameInMenu
 */
export interface ISetNameInMenuParams {
    userId: number;
    name: string;
}
export declare type TSetNameInMenuResult = 1;
/**
 * @see https://vk.com/dev/account.setOffline
 */
export interface ISetOfflineParams {
}
export declare type TSetOfflineResult = 1;
/**
 * @see https://vk.com/dev/account.setOnline
 */
export interface ISetOnlineParams {
    voip?: boolean;
}
export declare type TSetOnlineResult = 1;
/**
 * @see https://vk.com/dev/account.setPushSettings
 */
export declare type TSetPushSettingsParams = TDeviceIdOrToken & {
    settings: IPushSettings;
    key: string;
    value: TPushSetting[];
};
export declare type TSetPushSettingsResult = 1;
/**
 * @see https://vk.com/dev/account.setSilenceMode
 */
export declare type TSetSilenceModeParams = TDeviceIdOrToken & {
    time: number;
    chatId?: number;
    userId?: number;
    peerId?: number;
    sound: TPseudoBoolean;
};
export declare type TSetSilenceModeResult = 1;
/**
 * @see https://vk.com/dev/account.unban
 */
export interface IUnbanParams {
    ownerId: number;
}
export declare type TUnbanResult = 1;
/**
 * @see https://vk.com/dev/account.unregisterDevice
 */
export declare type TUnregisterDeviceParams = TDeviceIdOrToken & {
    sandbox?: boolean;
};
export declare type TUnregisterDeviceResult = 1;
export {};
