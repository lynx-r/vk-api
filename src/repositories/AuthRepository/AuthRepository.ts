import {Repository} from '../Repository';
import {TSendRequest} from '../../types';
import {IRestoreParams, IRestoreResult} from './types';

export class AuthRepository extends Repository {
  constructor(sendRequest: TSendRequest) {
    super('auth', sendRequest);
  }

  /**
   * @see https://vk.com/dev/auth.restore
   * @type {(params: (IRestoreParams & IRequestOptionalParams)) => Promise<IRestoreResult>}
   */
  restore = this.r<IRestoreParams, IRestoreResult>('restore');
}
