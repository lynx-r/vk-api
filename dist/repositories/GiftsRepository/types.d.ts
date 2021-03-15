import { IPager } from '../../types';
export declare enum EGiftPrivacy {
    NameAndMessagePublic = 0,
    NamePublicMessagePrivate = 1,
    NameAndMessagePrivate = 2
}
/**
 * @see https://vk.com/dev/gifts.get
 */
export interface IGetParams {
    userId?: number;
    count?: number;
    offset?: number;
}
export declare type TGetResult = IPager<{
    id: number;
    fromId: number;
    message: string;
    date: number;
    gift: {
        id: number;
        thumb256: string;
        thumb96: string;
        thumb48: string;
    };
    privacy: EGiftPrivacy;
    giftHash: string;
}>;
