import { TSendRequest } from '../../types'
import { Repository } from '../Repository'
import { TPostParams, TPostResult, } from './types'

export class WallRepository extends Repository {
  constructor(sendRequest: TSendRequest) {
    super('wall', sendRequest);
  }

  /**
   * @see https://vk.com/dev/wall.post
   */
  post = this.r<TPostParams, TPostResult>('post');
}
