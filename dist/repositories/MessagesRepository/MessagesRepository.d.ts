import { Repository } from '../Repository';
import { TSendRequest } from '../../types';
import { TSendParams, TSendResult } from './types';
export declare class MessagesRepository extends Repository {
    constructor(sendRequest: TSendRequest);
    send: import("../../types").TRepositoryMethod<TSendParams, TSendResult>;
}
