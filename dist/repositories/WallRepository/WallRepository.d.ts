import { TSendRequest } from '../../types';
import { Repository } from '../Repository';
import { TPostParams, TPostResult } from './types';
export declare class WallRepository extends Repository {
    constructor(sendRequest: TSendRequest);
    /**
     * @see https://vk.com/dev/wall.post
     */
    post: import("../../types").TRepositoryMethod<TPostParams, TPostResult>;
}
