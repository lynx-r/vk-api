var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/**
 * Class which represents calls queue. It is important to understand that
 * this class purpose is not to perform http requests or something like
 * that. The main its purpose is to send signals when something can be called
 * according to passed timeout.
 */
export class Queue {
    constructor(props) {
        /**
         * States when queue is free.
         * @type {number | null}
         */
        this.freeAt = null;
        const { timeout } = props;
        this.timeout = timeout;
    }
    await() {
        return __awaiter(this, void 0, void 0, function* () {
            const now = Date.now();
            if (this.freeAt === null || this.freeAt < now) {
                this.freeAt = now + this.timeout;
                return;
            }
            const timeout = this.freeAt - now;
            this.freeAt += this.timeout;
            return new Promise(res => setTimeout(res, timeout));
        });
    }
}
