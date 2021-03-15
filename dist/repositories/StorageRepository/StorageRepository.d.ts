import { Repository } from '../Repository';
import { TSendRequest } from '../../types';
import { IGetKeysParams, IGetSingleKeyParams, ISetParams, TGetKeysResult, TGetMultipleKeysResult, TGetParams, TGetSingleKeyResult } from './types';
export declare class StorageRepository extends Repository {
    constructor(sendRequest: TSendRequest);
    /**
     * @see https://vk.com/dev/storage.get
     * @type {<P extends IGetSingleKeyParams | IGetMultipleKeysParams>(params: P) => Promise<P extends IGetSingleKeyParams ? TGetSingleKeyResult : TGetMultipleKeysResult>}
     */
    get: <P extends TGetParams>(params: P) => Promise<P extends IGetSingleKeyParams ? string : TGetMultipleKeysResult>;
    /**
     * @see https://vk.com/dev/storage.getKeys
     * @type {(params: (IGetKeysParams & IRequestOptionalParams)) => Promise<string[]>}
     */
    getKeys: import("../../types").TRepositoryMethod<IGetKeysParams, TGetKeysResult>;
    /**
     * @see https://vk.com/dev/storage.set
     * @type {(params: (ISetParams & IRequestOptionalParams)) => Promise<1>}
     */
    set: import("../../types").TRepositoryMethod<ISetParams, 1>;
}
