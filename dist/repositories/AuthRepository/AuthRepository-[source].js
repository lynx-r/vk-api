import { Repository } from '../Repository';
export class AuthRepository extends Repository {
    constructor(sendRequest) {
        super('auth', sendRequest);
        /**
         * @see https://vk.com/dev/auth.restore
         * @type {(params: (IRestoreParams & IRequestOptionalParams)) => Promise<IRestoreResult>}
         */
        this.restore = this.r('restore');
    }
}
