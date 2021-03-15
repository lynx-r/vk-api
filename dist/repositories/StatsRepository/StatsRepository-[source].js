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
import { formatOptionalArray, formatOptionalBoolean } from '../../utils';
export class StatsRepository extends Repository {
    constructor(sendRequest) {
        super('stats', sendRequest);
        /**
         * @see https://vk.com/dev/stats.get
         * @type {TRepositoryMethod<TGetParams, TGetResult>}
         */
        this.get = this.r('get', (_a) => {
            var { extended, filters } = _a, rest = __rest(_a, ["extended", "filters"]);
            return (Object.assign(Object.assign({}, rest), { extended: formatOptionalBoolean(extended), filters: formatOptionalArray(filters) }));
        });
        /**
         * @see https://vk.com/dev/stats.getPostReach
         * @type {TRepositoryMethod<IGetPostReachParams, IGetPostReachResult>}
         */
        this.getPostReach = this.r('getPostReach', (_a) => {
            var { postIds } = _a, rest = __rest(_a, ["postIds"]);
            return (Object.assign(Object.assign({}, rest), { postIds: formatOptionalArray(postIds) }));
        });
        /**
         * @see https://vk.com/dev/stats.trackVisitor
         * @type {TRepositoryMethod<ITrackVisitorParams, TTrackVisitorResult>}
         */
        this.trackVisitor = this.r('trackVisitor');
    }
}
