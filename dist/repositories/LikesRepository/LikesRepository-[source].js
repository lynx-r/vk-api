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
export class LikesRepository extends Repository {
    constructor(sendRequest) {
        super('likes', sendRequest);
        /**
         * https://vk.com/dev/likes.add
         * @type {(params: (IAddParams & IRequestOptionalParams)) => Promise<IAddResult>}
         */
        this.add = this.r('add');
        /**
         * @see https://vk.com/dev/likes.delete
         * @type {(params: (IDeleteParams & IRequestOptionalParams)) => Promise<IDeleteResult>}
         */
        this.delete = this.r('delete');
        /**
         * @see https://vk.com/dev/likes.getList
         * @type {(params: (IGetListParams & IRequestOptionalParams)) => Promise<IGetListResult>}
         */
        this.getList = this.r('getList', (_a) => {
            var { friendsOnly, extended, skipOwn } = _a, rest = __rest(_a, ["friendsOnly", "extended", "skipOwn"]);
            return (Object.assign({ friendsOnly: formatOptionalBoolean(friendsOnly), extended: formatOptionalBoolean(extended), skipOwn: formatOptionalBoolean(skipOwn) }, rest));
        });
        /**
         * @see https://vk.com/dev/likes.isLiked
         * @type {(params: (IIsLikedParams & IRequestOptionalParams)) => Promise<IIsLikedResult>}
         */
        this.isLiked = this.r('isLiked');
    }
}
