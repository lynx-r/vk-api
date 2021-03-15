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
export class StorageRepository extends Repository {
    constructor(sendRequest) {
        super('storage', sendRequest);
        /**
         * @see https://vk.com/dev/storage.get
         * @type {<P extends IGetSingleKeyParams | IGetMultipleKeysParams>(params: P) => Promise<P extends IGetSingleKeyParams ? TGetSingleKeyResult : TGetMultipleKeysResult>}
         */
        this.get = this.r('get', (params) => {
            if ('keys' in params) {
                const { keys } = params, rest = __rest(params, ["keys"]);
                return Object.assign(Object.assign({}, rest), { keys: formatOptionalArray(keys) });
            }
            return params;
        });
        /**
         * @see https://vk.com/dev/storage.getKeys
         * @type {(params: (IGetKeysParams & IRequestOptionalParams)) => Promise<string[]>}
         */
        this.getKeys = this.r('getKeys');
        /**
         * @see https://vk.com/dev/storage.set
         * @type {(params: (ISetParams & IRequestOptionalParams)) => Promise<1>}
         */
        this.set = this.r('set');
    }
}
