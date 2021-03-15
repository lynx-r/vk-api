var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { isVKAPIRequestPerformAllowedMessage } from './utils';
import { Core } from '../../Core';
import { PERFORM_REQUEST_EVENT } from '../constants';
/**
 * Stub class which wants to get data from API VKontakte and has to
 * communicate with master.
 */
export class VKAPIConsumer extends Core {
    constructor(props) {
        super();
        /**
         * Internal request counter. Required to send and get answers from master.
         * @type {string}
         */
        this.requestId = '0';
        this.sendRequest = config => this.instance.sendRequest(config);
        this.addRequestToQueue = config => {
            if (!process.send) {
                throw new Error('Unable to process VKAPI request from slave due to there is no ' +
                    '"process.send" method available. It looks like it was created in ' +
                    'main thread, but not in fork');
            }
            const requestId = (parseInt(this.requestId) + 1).toString(16);
            const message = {
                tunnelName: this.tunnelName,
                requestId,
                isVKAPIMessage: true,
                type: PERFORM_REQUEST_EVENT,
            };
            // Reassign request id.
            this.requestId = requestId;
            // Return promise
            const promise = new Promise((res, rej) => {
                // Create listener and wait for provider permission.
                const listener = (message) => __awaiter(this, void 0, void 0, function* () {
                    if (isVKAPIRequestPerformAllowedMessage(message) &&
                        message.tunnelName === this.tunnelName &&
                        message.requestId === requestId) {
                        // Remove event listener.
                        process.off('message', listener);
                        try {
                            res(this.instance.sendRequest(config));
                        }
                        catch (e) {
                            rej(e);
                        }
                    }
                });
                // Add event listener.
                process.on('message', listener);
            });
            // Send request message.
            process.send(message);
            return promise;
        };
        if (!process.send) {
            throw new Error('Unable to create VKAPIConsumer due to there is no "process.send" ' +
                'method available. It looks like it was created in main thread, ' +
                'but not in fork.');
        }
        const { tunnelName = '', instance } = props;
        this.tunnelName = tunnelName;
        this.instance = instance;
        // Initialize repositories with specified addRequestToQueue method.
        this.init(this.addRequestToQueue);
    }
    addRepository(name, Repo) {
        return super.addRepository(name, Repo, this.addRequestToQueue);
    }
}
