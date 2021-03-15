import { IAudio } from '../../types/objects';
/**
 * @see https://vk.com/dev/status.get
 */
export declare type TGetParams = {
    userId: number;
} | {
    groupId: number;
};
export interface IGetResult {
    text: string;
    audio?: IAudio;
}
/**
 * @see https://vk.com/dev/status.set
 */
export interface ISetParams {
    text: string;
    groupId?: number;
}
export declare type TSetResult = 1;
