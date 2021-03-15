import { Repository } from '../Repository';
export class StreamingRepository extends Repository {
    constructor(sendRequest) {
        super('streaming', sendRequest);
        /**
         * @see https://vk.com/dev/streaming.getServerUrl
         * @type {TRepositoryMethod<IGetServerUrlParams, IGetServerUrlResult>}
         */
        this.getServerUrl = this.r('getServerUrl');
        /**
         * @see https://vk.com/dev/streaming.getSettings
         * @type {TRepositoryMethod<IGetSettingsParams, IGetSettingsResult>}
         */
        this.getSettings = this.r('getSettings');
        /**
         * @see https://vk.com/dev/streaming.getStats
         * @type {TRepositoryMethod<IGetStatsParams, IGetStatsResult>}
         */
        this.getStats = this.r('getStats');
        /**
         * @see https://vk.com/dev/streaming.getStem
         * @type {TRepositoryMethod<IGetStemParams, IGetStemResult>}
         */
        this.getStem = this.r('getStem');
        /**
         * @see https://vk.com/dev/streaming.setSettings
         * @type {TRepositoryMethod<ISetSettingsParams, TSetSettingsResult>}
         */
        this.setSettings = this.r('setSettings');
    }
}
