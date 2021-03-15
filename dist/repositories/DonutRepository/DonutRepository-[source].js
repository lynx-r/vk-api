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
export class DonutRepository extends Repository {
    constructor(sendRequest) {
        super('donut', sendRequest);
        /**
         * @see https://vk.com/dev/donut.getFriends
         * @type {(params: (IGetFriendsParams & IRequestOptionalParams)) => Promise<IGetFriendsResult>}
         */
        this.getFriends = this.r('getFriends', (_a) => {
            var { fields } = _a, rest = __rest(_a, ["fields"]);
            return (Object.assign(Object.assign({}, rest), { fields: formatOptionalArray(fields) }));
        });
        /**
         * @see https://vk.com/dev/donut.getSubscription
         * @type {(params: (IGetSubscriptionParams & IRequestOptionalParams)) => Promise<IGetSubscriptionResult>}
         */
        this.getSubscription = this.r('getSubscription');
        /**
         * @see https://vk.com/dev/donut.getSubscriptions
         * @type {(params: (IGetSubscriptionsParams & IRequestOptionalParams)) => Promise<IGetSubscriptionsResult>}
         */
        this.getSubscriptions = this.r('getSubscriptions');
        /**
         * @see https://vk.com/dev/donut.isDon
         * @type {(params: (IIsDonParams & IRequestOptionalParams)) => Promise<0 | 1>}
         */
        this.isDon = this.r('isDon');
    }
}
