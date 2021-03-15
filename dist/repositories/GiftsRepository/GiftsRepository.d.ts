import { Repository } from '../Repository';
import { TSendRequest } from '../../types';
import { IGetParams, TGetResult } from './types';
export declare class GiftsRepository extends Repository {
    constructor(sendRequest: TSendRequest);
    /**
     * @see https://vk.com/dev/gifts.get
     * @type {(params: (IGetParams & IRequestOptionalParams)) => Promise<IPager<{id: number, fromId: number, message: string, date: number, gift: {id: number, thumb256: string, thumb96: string, thumb48: string}, privacy: EGiftPrivacy, giftHash: string}>>}
     */
    get: import("../../types").TRepositoryMethod<IGetParams, TGetResult>;
}
