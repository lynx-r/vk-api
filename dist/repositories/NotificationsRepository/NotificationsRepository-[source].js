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
export class NotificationsRepository extends Repository {
    constructor(sendRequest) {
        super('notifications', sendRequest);
        /**
         * @see https://vk.com/dev/notifications.markAsViewed
         * @type {TRepositoryMethod<IMarkAsViewedParams, TMarkAsViewedResult>}
         */
        this.markAsViewed = this.r('markAsViewed');
        /**
         * @see https://vk.com/dev/notifications.sendMessage
         * @type {TRepositoryMethod<ISendMessageParams, TSendMessageResult>}
         */
        this.sendMessage = this.r('sendMessage', (_a) => {
            var { userIds } = _a, rest = __rest(_a, ["userIds"]);
            return (Object.assign(Object.assign({}, rest), { userIds: formatOptionalArray(userIds) }));
        });
    }
}
