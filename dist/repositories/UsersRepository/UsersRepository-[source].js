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
import { formatOptionalArray, formatOptionalBoolean, toPseudoBoolean, } from '../../utils';
export class UsersRepository extends Repository {
    constructor(sendRequest) {
        super('users', sendRequest);
        /**
         * @see https://vk.com/dev/users.get
         */
        this.get = this.r('get', (_a) => {
            var { userIds, fields } = _a, rest = __rest(_a, ["userIds", "fields"]);
            return (Object.assign(Object.assign({}, rest), { userIds: formatOptionalArray(userIds), fields: formatOptionalArray(fields) }));
        });
        /**
         * @see https://vk.com/dev/users.getFollowers
         */
        this.getFollowers = this.r('getFollowers', (_a) => {
            var { fields } = _a, rest = __rest(_a, ["fields"]);
            return (Object.assign(Object.assign({}, rest), { fields: formatOptionalArray(fields) }));
        });
        /**
         * @see https://vk.com/dev/users.getSubscriptions
         */
        this.getSubscriptions = this.r('getSubscriptions', (_a) => {
            var { fields, extended } = _a, rest = __rest(_a, ["fields", "extended"]);
            return (Object.assign(Object.assign({}, rest), { extended: formatOptionalBoolean(extended), fields: formatOptionalArray(fields) }));
        });
        /**
         * @see https://vk.com/dev/users.report
         */
        this.report = this.r('getSubscriptions');
        this.search = this.r('search', (_a) => {
            var { sort, online, hasPhoto } = _a, rest = __rest(_a, ["sort", "online", "hasPhoto"]);
            return (Object.assign({ sort: typeof sort === 'undefined'
                    ? undefined
                    : (typeof sort === 'number'
                        ? sort
                        : toPseudoBoolean(sort === 'popularity')), online: formatOptionalBoolean(online), hasPhoto: formatOptionalBoolean(hasPhoto) }, rest));
        });
    }
}
