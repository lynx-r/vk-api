import { Repository } from '../Repository';
import { TSendRequest } from '../../types';
import { TGetParams, IGetPostReachParams, IGetPostReachResult, TGetResult, ITrackVisitorParams } from './types';
export declare class StatsRepository extends Repository {
    constructor(sendRequest: TSendRequest);
    /**
     * @see https://vk.com/dev/stats.get
     * @type {TRepositoryMethod<TGetParams, TGetResult>}
     */
    get: import("../../types").TRepositoryMethod<TGetParams, TGetResult>;
    /**
     * @see https://vk.com/dev/stats.getPostReach
     * @type {TRepositoryMethod<IGetPostReachParams, IGetPostReachResult>}
     */
    getPostReach: import("../../types").TRepositoryMethod<IGetPostReachParams, IGetPostReachResult>;
    /**
     * @see https://vk.com/dev/stats.trackVisitor
     * @type {TRepositoryMethod<ITrackVisitorParams, TTrackVisitorResult>}
     */
    trackVisitor: import("../../types").TRepositoryMethod<ITrackVisitorParams, 1>;
}
