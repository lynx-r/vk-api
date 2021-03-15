import { Repository } from '../Repository';
import { TSendRequest } from '../../types';
import { IGetFriendsParams, IGetFriendsResult, IGetSubscriptionParams, IGetSubscriptionResult, IGetSubscriptionsParams, IGetSubscriptionsResult, IIsDonParams } from './types';
export declare class DonutRepository extends Repository {
    constructor(sendRequest: TSendRequest);
    /**
     * @see https://vk.com/dev/donut.getFriends
     * @type {(params: (IGetFriendsParams & IRequestOptionalParams)) => Promise<IGetFriendsResult>}
     */
    getFriends: import("../../types").TRepositoryMethod<IGetFriendsParams, IGetFriendsResult>;
    /**
     * @see https://vk.com/dev/donut.getSubscription
     * @type {(params: (IGetSubscriptionParams & IRequestOptionalParams)) => Promise<IGetSubscriptionResult>}
     */
    getSubscription: import("../../types").TRepositoryMethod<IGetSubscriptionParams, IGetSubscriptionResult>;
    /**
     * @see https://vk.com/dev/donut.getSubscriptions
     * @type {(params: (IGetSubscriptionsParams & IRequestOptionalParams)) => Promise<IGetSubscriptionsResult>}
     */
    getSubscriptions: import("../../types").TRepositoryMethod<IGetSubscriptionsParams, IGetSubscriptionsResult>;
    /**
     * @see https://vk.com/dev/donut.isDon
     * @type {(params: (IIsDonParams & IRequestOptionalParams)) => Promise<0 | 1>}
     */
    isDon: import("../../types").TRepositoryMethod<IIsDonParams, import("../../types").TPseudoBoolean>;
}
