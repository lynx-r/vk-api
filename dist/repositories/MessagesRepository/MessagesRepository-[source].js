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
export class MessagesRepository extends Repository {
    constructor(sendRequest) {
        super('messages', sendRequest);
        this.send = this.r('send', (_a) => {
            var { randomId: _randomId } = _a, rest = __rest(_a, ["randomId"]);
            const randomId = typeof _randomId === 'undefined'
                ? Math.floor(Math.random() * 10000000)
                : _randomId;
            if ('userIds' in rest) {
                return Object.assign(Object.assign({}, rest), { userIds: formatOptionalArray(rest.userIds), randomId });
            }
            return Object.assign(Object.assign({}, rest), { randomId });
        });
    }
}
