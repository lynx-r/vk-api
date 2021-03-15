import { IObjectSharedProps } from './shared';
/**
 * List of audio genres.
 * @see https://vk.com/dev/objects/audio_genres
 */
export declare enum EAudioGenre {
    Rock = 1,
    Pop = 2,
    RapAndHipHop = 3,
    EasyListening = 4,
    HouseAndDance = 5,
    Instrumental = 6,
    Metal = 7,
    Dubstep = 8,
    DrumAndBass = 10,
    Trance = 11,
    Chanson = 12,
    Ethnic = 13,
    AcousticAndVocal = 14,
    Reggae = 15,
    Classical = 16,
    IndiePop = 17,
    Other = 18,
    Speech = 19,
    Alternative = 21,
    ElectropopAndDisco = 22,
    JazzAndBlues = 1001
}
/**
 * @see https://vk.com/dev/objects/audio
 */
export interface IAudio extends IObjectSharedProps {
    artist: string;
    title: string;
    duration: number;
    url: string;
    lyricsId?: number;
    albumId?: number;
    genreId: EAudioGenre;
    date: number;
    noSearch?: 1;
    isHq?: 1;
}
