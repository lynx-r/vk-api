import { Repository } from '../Repository';
import { TSendRequest } from '../../types';
import { IGetFollowersParams, TGetFollowersResult, TGetParams, TGetResult, IGetSubscriptionsParams, TGetSubscriptionsResult, IReportParams, ISearchParams, TSearchResult } from './types';
export declare class UsersRepository extends Repository {
    constructor(sendRequest: TSendRequest);
    /**
     * @see https://vk.com/dev/users.get
     */
    get: import("../../types").TRepositoryMethod<TGetParams, TGetResult>;
    /**
     * @see https://vk.com/dev/users.getFollowers
     */
    getFollowers: import("../../types").TRepositoryMethod<IGetFollowersParams, TGetFollowersResult>;
    /**
     * @see https://vk.com/dev/users.getSubscriptions
     */
    getSubscriptions: import("../../types").TRepositoryMethod<IGetSubscriptionsParams, TGetSubscriptionsResult>;
    /**
     * @see https://vk.com/dev/users.report
     */
    report: import("../../types").TRepositoryMethod<IReportParams, 1>;
    search: import("../../types").TRepositoryMethod<ISearchParams, TSearchResult>;
}
