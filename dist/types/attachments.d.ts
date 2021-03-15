import { IPhoto, IObjectSharedProps, IVideo, IAudio, IDoc, ILink, INote, IPoll, IPage, IMarketItem, IMarketItemExtended, IMarketAlbum, ISticker, IImage, IButton } from './objects';
/**
 * List of member status values for event attachment.
 */
export declare enum EEventAttachmentMemberStatus {
    SureJoin = 0,
    MaybeJoin = 1,
    NotJoin = 2
}
/**
 * Type which generates new attachments.
 * @see https://vk.com/dev/objects/attachments_w
 */
declare type TGenericAttachment<T extends string, Item = any> = {
    type: T;
} & {
    [key in T]: Item;
};
export declare type TPhotoAttachment = TGenericAttachment<'photo', IPhoto>;
export declare type TPostedPhotoAttachment = TGenericAttachment<'posted_photo', IObjectSharedProps & {
    photo130: string;
    photo604: string;
}>;
export declare type TVideoAttachment = TGenericAttachment<'video', IVideo>;
export declare type TAudioAttachment = TGenericAttachment<'audio', IAudio>;
export declare type TDocAttachment = TGenericAttachment<'doc', IDoc>;
export declare type TGraffitiAttachment = TGenericAttachment<'graffiti', IObjectSharedProps & {
    photo130: string;
    photo604: string;
}>;
export declare type TLinkAttachment = TGenericAttachment<'link', ILink>;
export declare type TNoteAttachment = TGenericAttachment<'note', INote>;
export declare type TAppAttachment = TGenericAttachment<'app', IObjectSharedProps & {
    id: number;
    name: string;
    photo130: string;
    photo604: string;
}>;
export declare type TPollAttachment = TGenericAttachment<'poll', IPoll>;
export declare type TPageAttachment = TGenericAttachment<'page', IPage>;
export declare type TAlbumAttachment = TGenericAttachment<'album', IObjectSharedProps & {
    thumb: IPhoto;
    title: string;
    description: string;
    created: number;
    updated: number;
    size: number;
}>;
export declare type TPhotosListAttachment = TGenericAttachment<'photos_list', number[]>;
export declare type TMarketItemAttachment = TGenericAttachment<'market', IMarketItem | IMarketItemExtended>;
export declare type TMarketAlbumAttachment = TGenericAttachment<'market_album', IMarketAlbum>;
export declare type TStickerAttachment = TGenericAttachment<'sticker', ISticker>;
export declare type TPrettyCardsAttachment = TGenericAttachment<'pretty_cards', {
    cards: Array<{
        cardId: number;
        linkUrl: string;
        title: string;
        images: IImage[];
        button: IButton;
        price: number;
        priceOld: number;
    }>;
}>;
export declare type TEventAttachment = TGenericAttachment<'event', {
    id: number;
    time: number;
    memberStatus: EEventAttachmentMemberStatus;
    isFavorite: boolean;
    address: string;
    text: string;
    buttonText: string;
    friends: number[];
}>;
/**
 * Any attachment.
 */
export declare type TAttachment = TPhotoAttachment | TPostedPhotoAttachment | TVideoAttachment | TAudioAttachment | TDocAttachment | TGraffitiAttachment | TLinkAttachment | TNoteAttachment | TAppAttachment | TPollAttachment | TPageAttachment | TAlbumAttachment | TPhotosListAttachment | TMarketItemAttachment | TMarketAlbumAttachment | TStickerAttachment | TPrettyCardsAttachment | TEventAttachment;
export {};
