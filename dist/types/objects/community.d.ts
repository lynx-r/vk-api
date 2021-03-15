import { IIdTitlePair, TPseudoBoolean } from '../shared';
import { ICropPhoto } from '../misc';
export declare enum ECommunityPrivacy {
    Open = 0,
    Closed = 1,
    Private = 2
}
export declare enum ECommunityAdminLevel {
    Moderator = 1,
    Editor = 2,
    Admin = 3
}
export declare enum ECommunityAgeLimits {
    None = 1,
    Plus16 = 2,
    Plus18 = 3
}
export declare enum ECommunitySection {
    None = 0,
    Photos = 1,
    Discussions = 2,
    Audios = 3,
    Videos = 4,
    Goods = 5
}
export declare enum ECommunityMemberStatus {
    NotMember = 0,
    IsMember = 1,
    NotSureWillVisit = 2,
    DeclinedInvite = 3,
    RequestSent = 4,
    Invited = 5
}
export declare enum ECommunityWallPrivacy {
    Disabled = 0,
    Open = 1,
    Restricted = 2,
    Closed = 3
}
/**
 * @see https://vk.com/dev/objects/group
 */
export interface ICommunity {
    id: number;
    name: string;
    screenName: string;
    isClosed: ECommunityPrivacy;
    deactivated?: 'deleted' | 'banned';
    isAdmin?: TPseudoBoolean;
    adminLevel?: ECommunityAdminLevel;
    isMember?: TPseudoBoolean;
    isAdvertiser?: TPseudoBoolean;
    invitedBy?: number;
    type: 'group' | 'page' | 'event';
    photo50: string;
    photo100: string;
    photo200: string;
    activity?: string;
    addresses?: {
        isEnabled: boolean;
        mainAddressId: number;
    };
    ageLimits?: ECommunityAgeLimits;
    banInfo?: {
        endDate: number;
        comment: string;
    };
    canCreateTopic?: TPseudoBoolean;
    canMessage?: TPseudoBoolean;
    canPost?: TPseudoBoolean;
    canSeeAllPosts?: TPseudoBoolean;
    canUploadDoc?: TPseudoBoolean;
    canUploadVideo?: TPseudoBoolean;
    city?: IIdTitlePair;
    contacts?: {
        userId: number;
        desc: string;
        phone: string;
        email: string;
    }[];
    counters?: {
        photos: number;
        albums: number;
        audios: number;
        videos: number;
        topics: number;
        docs: number;
    };
    country?: IIdTitlePair;
    cover?: {
        enabled: TPseudoBoolean;
        images: {
            url: string;
            width: number;
            height: number;
        }[];
    };
    cropPhoto?: ICropPhoto;
    description?: string;
    fixedPost?: number;
    has_photo?: TPseudoBoolean;
    isFavorite?: TPseudoBoolean;
    isHiddenFromFeed?: TPseudoBoolean;
    isMessagesBlocked?: TPseudoBoolean;
    links?: {
        id: number;
        url: string;
        name: string;
        desc: string;
        photo50: string;
        photo100: string;
    }[];
    mainAlbumId?: number;
    mainSection?: ECommunitySection;
    market?: {
        enabled: 0;
    } | {
        enabled: 1;
        type: 'basic' | 'advanced';
        priceMin: number;
        priceMax: number;
        mainAlbumId: number;
        contactId: number;
        currency: {
            id: number;
            name: string;
        };
        currencyText: string;
    };
    memberStatus?: ECommunityMemberStatus;
    membersCount?: number;
    place?: {
        id: number;
        title: string;
        latitude: number;
        longitude: number;
        type: string;
        country: number;
        city: number;
        address: string;
    };
    public_date_label?: string;
    site?: string;
    start_date?: number;
    finish_date?: number;
    status?: string;
    trending?: TPseudoBoolean;
    verified?: TPseudoBoolean;
    wall?: ECommunityWallPrivacy;
    wikiPage?: string;
}
