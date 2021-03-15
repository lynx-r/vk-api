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
export class WidgetsRepository extends Repository {
    constructor(sendRequest) {
        super('widget', sendRequest);
        /**
         * @see https://vk.com/dev/widgets.getComments
         * @type {TRepositoryMethod<IGetCommentsParams, IGetCommentsResult>}
         */
        this.getComments = this.r('getComments', (_a) => {
            var { fields } = _a, rest = __rest(_a, ["fields"]);
            return (Object.assign(Object.assign({}, rest), { fields: formatOptionalArray(fields) }));
        });
        /**
         * @see https://vk.com/dev/widgets.getPages
         * @type {TRepositoryMethod<IGetPagesParams, IGetPagesResult>}
         */
        this.getPages = this.r('getPages');
    }
}
