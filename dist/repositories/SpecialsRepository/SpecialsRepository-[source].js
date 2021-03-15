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
import { formatOptionalArray } from '../../utils';
export class SpecialsRepository extends Repository {
    constructor(sendRequest) {
        super('specials', sendRequest);
        /**
         * @type {(params: (IAddStickersParams & IRequestOptionalParams)) => Promise<IAddStickersResult>}
         */
        this.addStickers = this.r('addStickers', (_a) => {
            var { userIds, stickerIds } = _a, rest = __rest(_a, ["userIds", "stickerIds"]);
            return (Object.assign(Object.assign({}, rest), { userIds: formatOptionalArray(userIds), stickerIds: formatOptionalArray(stickerIds) }));
        });
        /**
         * @type {(params: (IGetStickersParams & IRequestOptionalParams)) => Promise<IPager<{stickerId: number, isPurchased: boolean}>>}
         */
        this.getStickers = this.r('getStickers');
    }
}
