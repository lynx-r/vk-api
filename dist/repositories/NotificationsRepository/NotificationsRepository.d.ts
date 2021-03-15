import { TSendMessageResult, ISendMessageParams, IMarkAsViewedParams } from './types';
import { Repository } from '../Repository';
import { TSendRequest } from '../../types';
export declare class NotificationsRepository extends Repository {
    constructor(sendRequest: TSendRequest);
    /**
     * @see https://vk.com/dev/notifications.markAsViewed
     * @type {TRepositoryMethod<IMarkAsViewedParams, TMarkAsViewedResult>}
     */
    markAsViewed: import("../../types").TRepositoryMethod<IMarkAsViewedParams, import("../../types").TPseudoBoolean>;
    /**
     * @see https://vk.com/dev/notifications.sendMessage
     * @type {TRepositoryMethod<ISendMessageParams, TSendMessageResult>}
     */
    sendMessage: import("../../types").TRepositoryMethod<ISendMessageParams, TSendMessageResult>;
}
