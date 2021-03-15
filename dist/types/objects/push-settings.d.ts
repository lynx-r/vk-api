declare type TDefault = ('on' | 'off')[];
declare type TWithDefault<T> = (T | 'on' | 'off')[];
declare type TNoSoundNoText = TWithDefault<'no_sound' | 'no_text'>;
declare type TFrOfFr = TWithDefault<'fr_of_fr'>;
export declare type TPushSetting = 'on' | 'off' | 'no_sound' | 'no_text' | 'fr_of_fr' | 'mutual';
export interface IPushSettings {
    msg?: TNoSoundNoText;
    chat?: TNoSoundNoText;
    friend?: TWithDefault<'mutual'>;
    friendAccepted?: TDefault;
    reply?: TDefault;
    comment?: TFrOfFr;
    mention?: TFrOfFr;
    like?: TFrOfFr;
    repost?: TFrOfFr;
    wallPost?: TDefault;
    wallPublish?: TDefault;
    groupInvite?: TDefault;
    groupAccepted?: TDefault;
    eventSoon?: TDefault;
    tagPhoto?: TFrOfFr;
    appRequest?: TDefault;
    sdkOpen?: TDefault;
    newPost?: TDefault;
    birthday?: TDefault;
}
export {};
