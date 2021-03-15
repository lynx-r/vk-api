import { Repository } from '../Repository';
import { TSendRequest } from '../../types';
import { IGetServerUrlParams, IGetServerUrlResult, IGetSettingsParams, IGetSettingsResult, IGetStatsParams, IGetStatsResult, IGetStemParams, IGetStemResult, ISetSettingsParams } from './types';
export declare class StreamingRepository extends Repository {
    constructor(sendRequest: TSendRequest);
    /**
     * @see https://vk.com/dev/streaming.getServerUrl
     * @type {TRepositoryMethod<IGetServerUrlParams, IGetServerUrlResult>}
     */
    getServerUrl: import("../../types").TRepositoryMethod<IGetServerUrlParams, IGetServerUrlResult>;
    /**
     * @see https://vk.com/dev/streaming.getSettings
     * @type {TRepositoryMethod<IGetSettingsParams, IGetSettingsResult>}
     */
    getSettings: import("../../types").TRepositoryMethod<IGetSettingsParams, IGetSettingsResult>;
    /**
     * @see https://vk.com/dev/streaming.getStats
     * @type {TRepositoryMethod<IGetStatsParams, IGetStatsResult>}
     */
    getStats: import("../../types").TRepositoryMethod<IGetStatsParams, IGetStatsResult>;
    /**
     * @see https://vk.com/dev/streaming.getStem
     * @type {TRepositoryMethod<IGetStemParams, IGetStemResult>}
     */
    getStem: import("../../types").TRepositoryMethod<IGetStemParams, IGetStemResult>;
    /**
     * @see https://vk.com/dev/streaming.setSettings
     * @type {TRepositoryMethod<ISetSettingsParams, TSetSettingsResult>}
     */
    setSettings: import("../../types").TRepositoryMethod<ISetSettingsParams, 1>;
}
