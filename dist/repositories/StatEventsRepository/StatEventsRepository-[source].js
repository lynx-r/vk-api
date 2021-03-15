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
export class StatEventsRepository extends Repository {
    constructor(sendRequest) {
        super('statEvents', sendRequest);
        /**
         * @see https://vk.com/dev/statEvents.addMiniAppsCustom
         * @type {TRepositoryMethod<TAddMiniAppsCustomParams, TAddMiniAppsCustomResult>}
         */
        this.addMiniAppsCustom = this.r('addMiniAppsCustom', params => {
            const { events } = params, rest = __rest(params, ["events"]);
            const formattedEvents = events.map(e => {
                const { json, timestamp } = e, rest = __rest(e, ["json", "timestamp"]);
                return Object.assign(Object.assign({}, rest), { json: typeof json === 'object' ? JSON.stringify(json) : undefined, timestamp: typeof timestamp === 'number'
                        ? timestamp
                        : (typeof timestamp === 'undefined'
                            ? undefined
                            : timestamp.getTime()) });
            });
            return Object.assign(Object.assign({}, rest), { events: formattedEvents });
        });
        /**
         * @see https://vk.com/dev/statEvents.addMiniApps
         * @type {TRepositoryMethod<IAddMiniAppsParams, TAddMiniAppsCustomResult>}
         */
        this.addMiniApps = this.r('addMiniApps');
    }
}
