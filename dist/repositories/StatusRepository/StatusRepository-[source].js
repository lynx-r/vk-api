import { Repository } from '../Repository';
export class StatusRepository extends Repository {
    constructor(sendRequest) {
        super('status', sendRequest);
        /**
         * @see https://vk.com/dev/status.get
         * @type {(params: (({userId: number} & IRequestOptionalParams) | ({groupId: number} & IRequestOptionalParams))) => Promise<IGetResult>}
         */
        this.get = this.r('get');
        /**
         * @see https://vk.com/dev/status.set
         * @type {(params: (ISetParams & IRequestOptionalParams)) => Promise<1>}
         */
        this.set = this.r('set');
    }
}
