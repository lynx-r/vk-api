import { IObjectSharedProps, IPhotoSize } from './shared';
/**
 * List of doc types.
 * @see https://vk.com/dev/objects/doc
 */
export declare enum EDocType {
    Text = 1,
    Archive = 2,
    Gif = 3,
    Image = 4,
    Audio = 5,
    Video = 6,
    EBook = 7,
    Unknown = 8
}
/**
 * @see https://vk.com/dev/objects/doc
 */
export interface IDoc extends IObjectSharedProps {
    title: string;
    size: number;
    ext: string;
    url: string;
    date: number;
    type: EDocType;
    preview: {
        photo?: {
            sizes: IPhotoSize[];
        };
        graffiti?: {
            src: string;
            width: number;
            height: number;
        };
        audioMessage?: {
            duration: number;
            waveform: number[];
            linkOgg: string;
            linkMp3: string;
        };
    };
}
