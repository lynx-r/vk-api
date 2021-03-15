import { Repository } from '../Repository';
export class DownloadedGamesRepository extends Repository {
    constructor(sendRequest) {
        super('downloadedGames', sendRequest);
        /**
         * @see https://vk.com/dev/downloadedGames.getPaidStatus
         * @type {(params: (IGetPaidStatusParams & IRequestOptionalParams)) => Promise<IGetPaidStatusResult>}
         */
        this.getPaidStatus = this.r('getPaidStatus');
    }
}
