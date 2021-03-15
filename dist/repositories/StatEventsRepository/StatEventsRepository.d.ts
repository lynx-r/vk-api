import { Repository } from '../Repository';
import { TSendRequest } from '../../types';
import { TAddMiniAppsCustomParams, IAddMiniAppsParams } from './types';
export declare class StatEventsRepository extends Repository {
    constructor(sendRequest: TSendRequest);
    /**
     * @see https://vk.com/dev/statEvents.addMiniAppsCustom
     * @type {TRepositoryMethod<TAddMiniAppsCustomParams, TAddMiniAppsCustomResult>}
     */
    addMiniAppsCustom: import("../../types").TRepositoryMethod<TAddMiniAppsCustomParams, 1>;
    /**
     * @see https://vk.com/dev/statEvents.addMiniApps
     * @type {TRepositoryMethod<IAddMiniAppsParams, TAddMiniAppsCustomResult>}
     */
    addMiniApps: import("../../types").TRepositoryMethod<IAddMiniAppsParams, 1>;
}
