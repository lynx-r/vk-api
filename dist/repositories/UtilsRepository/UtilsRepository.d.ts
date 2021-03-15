import { Repository } from '../Repository';
import { TSendRequest } from '../../types';
import { ICheckLinkParams, ICheckLinkResult, IDeleteFromLastShortenedParams, IGetLastShortenedLinksParams, TGetLastShortenedLinksResult, IGetLinkStatsParams, IGetLinkStatsResult, IGetServerTimeParams, IGetShortLinkParams, IGetShortLinkResult, IResolveScreenNameParams, TResolveScreenNameResult } from './types';
export declare class UtilsRepository extends Repository {
    constructor(sendRequest: TSendRequest);
    /**
     * @see https://vk.com/dev/utils.checkLink
     * @type {TRepositoryMethod<ICheckLinkParams, ICheckLinkResult>}
     */
    checkLink: import("../../types").TRepositoryMethod<ICheckLinkParams, ICheckLinkResult>;
    /**
     * @see https://vk.com/dev/utils.deleteFromLastShortened
     * @type {TRepositoryMethod<IDeleteFromLastShortenedParams, TDeleteFromLastShortenedResult>}
     */
    deleteFromLastShortened: import("../../types").TRepositoryMethod<IDeleteFromLastShortenedParams, 1>;
    /**
     * @see https://vk.com/dev/utils.getLastShortenedLinks
     * @type {TRepositoryMethod<IGetLastShortenedLinksParams, TGetLastShortenedLinksResult>}
     */
    getLastShortenedLinks: import("../../types").TRepositoryMethod<IGetLastShortenedLinksParams, TGetLastShortenedLinksResult>;
    /**
     * @see https://vk.com/dev/utils.getLinkStats
     * @type {TRepositoryMethod<IGetLinkStatsParams, TGetLastShortenedLinksResult>}
     */
    getLinkStats: import("../../types").TRepositoryMethod<IGetLinkStatsParams, IGetLinkStatsResult>;
    /**
     * @see https://vk.com/dev/utils.getServerTime
     * @type {TRepositoryMethod<IGetServerTimeParams, TGetServerTimeResult>}
     */
    getServerTime: import("../../types").TRepositoryMethod<IGetServerTimeParams, number>;
    /**
     * @see https://vk.com/dev/utils.getShortLink
     * @type {TRepositoryMethod<IGetShortLinkParams, IGetShortLinkResult>}
     */
    getShortLink: import("../../types").TRepositoryMethod<IGetShortLinkParams, IGetShortLinkResult>;
    /**
     * @see https://vk.com/dev/utils.resolveScreenName
     * @type {TRepositoryMethod<IResolveScreenNameParams, TResolveScreenNameResult>}
     */
    resolveScreenName: import("../../types").TRepositoryMethod<IResolveScreenNameParams, TResolveScreenNameResult>;
}
