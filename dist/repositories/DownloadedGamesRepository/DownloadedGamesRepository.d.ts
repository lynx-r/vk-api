import { Repository } from '../Repository';
import { TSendRequest } from '../../types';
import { IGetPaidStatusParams, IGetPaidStatusResult } from './types';
export declare class DownloadedGamesRepository extends Repository {
    constructor(sendRequest: TSendRequest);
    /**
     * @see https://vk.com/dev/downloadedGames.getPaidStatus
     * @type {(params: (IGetPaidStatusParams & IRequestOptionalParams)) => Promise<IGetPaidStatusResult>}
     */
    getPaidStatus: import("../../types").TRepositoryMethod<IGetPaidStatusParams, IGetPaidStatusResult>;
}
