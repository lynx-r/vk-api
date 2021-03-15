import { IButton } from '../../types/objects';
/**
 * @see https://vk.com/dev/messages.send
 */
export declare type TSendResult = number | Array<{
    peerId: number;
    messageId: number;
    error?: string;
}>;
export declare type TSendParams = {
    randomId?: number;
    peerId?: number;
    domain?: string;
    chatId?: number;
    lat?: number;
    long?: number;
    replyTo?: number;
    forwardMessages?: number[];
    stickerId?: number;
    groupId?: number;
    keyboard?: {
        buttons: IButton[][];
    } & ({
        inline: true;
    } | {
        inline: false;
        oneTime: boolean;
    });
    payload?: any;
    dontParseLinks?: boolean;
    disableMentions?: boolean;
    intent?: 'promo_newsletter' | 'bot_ad_invite' | 'bot_ad_promo';
} & ({
    userId?: number;
} | {
    userIds?: number[];
}) & ({
    message: string;
} | {
    message?: string;
    attachment?: string;
});
