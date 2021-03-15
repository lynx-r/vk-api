import { Repository } from '../Repository';
export class GiftsRepository extends Repository {
    constructor(sendRequest) {
        super('gifts', sendRequest);
        /**
         * @see https://vk.com/dev/gifts.get
         * @type {(params: (IGetParams & IRequestOptionalParams)) => Promise<IPager<{id: number, fromId: number, message: string, date: number, gift: {id: number, thumb256: string, thumb96: string, thumb48: string}, privacy: EGiftPrivacy, giftHash: string}>>}
         */
        this.get = this.r('get');
    }
}
