import { Repository } from '../Repository';
import { TSendRequest } from '../../types';
import { IGetResult, ISetParams, TGetParams } from './types';
export declare class StatusRepository extends Repository {
    constructor(sendRequest: TSendRequest);
    /**
     * @see https://vk.com/dev/status.get
     * @type {(params: (({userId: number} & IRequestOptionalParams) | ({groupId: number} & IRequestOptionalParams))) => Promise<IGetResult>}
     */
    get: import("../../types").TRepositoryMethod<TGetParams, IGetResult>;
    /**
     * @see https://vk.com/dev/status.set
     * @type {(params: (ISetParams & IRequestOptionalParams)) => Promise<1>}
     */
    set: import("../../types").TRepositoryMethod<ISetParams, 1>;
}
