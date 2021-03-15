import { Repository } from '../Repository';
export class WallRepository extends Repository {
    constructor(sendRequest) {
        super('wall', sendRequest);
        /**
         * @see https://vk.com/dev/wall.post
         */
        this.post = this.r('post');
    }
}
