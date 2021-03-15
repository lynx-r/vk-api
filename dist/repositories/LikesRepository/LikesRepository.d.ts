import { Repository } from '../Repository';
import { TSendRequest } from '../../types';
import { IDeleteResult, IAddParams, IAddResult, IDeleteParams, IGetListParams, IGetListResult, IIsLikedParams, IIsLikedResult } from './types';
export declare class LikesRepository extends Repository {
    constructor(sendRequest: TSendRequest);
    /**
     * https://vk.com/dev/likes.add
     * @type {(params: (IAddParams & IRequestOptionalParams)) => Promise<IAddResult>}
     */
    add: import("../../types").TRepositoryMethod<IAddParams, IAddResult>;
    /**
     * @see https://vk.com/dev/likes.delete
     * @type {(params: (IDeleteParams & IRequestOptionalParams)) => Promise<IDeleteResult>}
     */
    delete: import("../../types").TRepositoryMethod<IDeleteParams, IDeleteResult>;
    /**
     * @see https://vk.com/dev/likes.getList
     * @type {(params: (IGetListParams & IRequestOptionalParams)) => Promise<IGetListResult>}
     */
    getList: import("../../types").TRepositoryMethod<IGetListParams, IGetListResult>;
    /**
     * @see https://vk.com/dev/likes.isLiked
     * @type {(params: (IIsLikedParams & IRequestOptionalParams)) => Promise<IIsLikedResult>}
     */
    isLiked: import("../../types").TRepositoryMethod<IIsLikedParams, IIsLikedResult>;
}
