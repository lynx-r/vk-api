import { Repository } from '../Repository';
import { TSendRequest } from '../../types';
import { IGetCommentsParams, IGetCommentsResult, IGetPagesParams, IGetPagesResult } from './types';
export declare class WidgetsRepository extends Repository {
    constructor(sendRequest: TSendRequest);
    /**
     * @see https://vk.com/dev/widgets.getComments
     * @type {TRepositoryMethod<IGetCommentsParams, IGetCommentsResult>}
     */
    getComments: import("../../types").TRepositoryMethod<IGetCommentsParams, IGetCommentsResult>;
    /**
     * @see https://vk.com/dev/widgets.getPages
     * @type {TRepositoryMethod<IGetPagesParams, IGetPagesResult>}
     */
    getPages: import("../../types").TRepositoryMethod<IGetPagesParams, IGetPagesResult>;
}
