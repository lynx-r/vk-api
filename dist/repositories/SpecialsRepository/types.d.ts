import { IPager } from '../../types';
declare type TStickersPager = IPager<{
    stickerId: number;
    isPurchased: boolean;
}>;
export interface IAddStickersParams {
    userIds: (number | string)[];
    packId: number;
    text: string;
    stickerIds?: number[];
}
export declare type TAddStickersResult = TStickersPager;
export interface IGetStickersParams {
    userId: number | string;
    packId: number | string;
}
export declare type TGetStickersResult = TStickersPager;
export {};
