import { Repository } from '../Repository';
import { TSendRequest } from '../../types';
import { IAddStickersParams, IGetStickersParams } from './types';
export declare class SpecialsRepository extends Repository {
    constructor(sendRequest: TSendRequest);
    /**
     * @type {(params: (IAddStickersParams & IRequestOptionalParams)) => Promise<IAddStickersResult>}
     */
    addStickers: import("../../types").TRepositoryMethod<IAddStickersParams, import("../../types").IPager<{
        stickerId: number;
        isPurchased: boolean;
    }>>;
    /**
     * @type {(params: (IGetStickersParams & IRequestOptionalParams)) => Promise<IPager<{stickerId: number, isPurchased: boolean}>>}
     */
    getStickers: import("../../types").TRepositoryMethod<IGetStickersParams, import("../../types").IPager<{
        stickerId: number;
        isPurchased: boolean;
    }>>;
}
