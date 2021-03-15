import { Repository } from '../Repository';
import { TSendRequest } from '../../types';
import { IRestoreParams, IRestoreResult } from './types';
export declare class AuthRepository extends Repository {
    constructor(sendRequest: TSendRequest);
    /**
     * @see https://vk.com/dev/auth.restore
     * @type {(params: (IRestoreParams & IRequestOptionalParams)) => Promise<IRestoreResult>}
     */
    restore: import("../../types").TRepositoryMethod<IRestoreParams, IRestoreResult>;
}
