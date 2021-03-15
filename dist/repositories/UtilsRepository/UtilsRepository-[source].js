var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { Repository } from '../Repository';
import { formatOptionalBoolean } from '../../utils';
export class UtilsRepository extends Repository {
    constructor(sendRequest) {
        super('utils', sendRequest);
        /**
         * @see https://vk.com/dev/utils.checkLink
         * @type {TRepositoryMethod<ICheckLinkParams, ICheckLinkResult>}
         */
        this.checkLink = this.r('checkLink');
        /**
         * @see https://vk.com/dev/utils.deleteFromLastShortened
         * @type {TRepositoryMethod<IDeleteFromLastShortenedParams, TDeleteFromLastShortenedResult>}
         */
        this.deleteFromLastShortened = this.r('deleteFromLastShortened');
        /**
         * @see https://vk.com/dev/utils.getLastShortenedLinks
         * @type {TRepositoryMethod<IGetLastShortenedLinksParams, TGetLastShortenedLinksResult>}
         */
        this.getLastShortenedLinks = this.r('getLastShortenedLinks');
        /**
         * @see https://vk.com/dev/utils.getLinkStats
         * @type {TRepositoryMethod<IGetLinkStatsParams, TGetLastShortenedLinksResult>}
         */
        this.getLinkStats = this.r('getLinkStats', (_a) => {
            var { extended } = _a, rest = __rest(_a, ["extended"]);
            return (Object.assign(Object.assign({}, rest), { extended: formatOptionalBoolean(extended) }));
        });
        /**
         * @see https://vk.com/dev/utils.getServerTime
         * @type {TRepositoryMethod<IGetServerTimeParams, TGetServerTimeResult>}
         */
        this.getServerTime = this.r('getServerTime');
        /**
         * @see https://vk.com/dev/utils.getShortLink
         * @type {TRepositoryMethod<IGetShortLinkParams, IGetShortLinkResult>}
         */
        this.getShortLink = this.r('getShortLink', (_a) => {
            var { private: isPrivate } = _a, rest = __rest(_a, ["private"]);
            return (Object.assign(Object.assign({}, rest), { private: formatOptionalBoolean(isPrivate) }));
        });
        /**
         * @see https://vk.com/dev/utils.resolveScreenName
         * @type {TRepositoryMethod<IResolveScreenNameParams, TResolveScreenNameResult>}
         */
        this.resolveScreenName = this.r('resolveScreenName');
    }
}
