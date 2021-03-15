import { isNonNullObject } from '../utils';
const ERROR_NAME = 'VKError';
/**
 * Represents an error sent from VKontakte.
 */
export class VKError extends Error {
    constructor(props) {
        super(JSON.stringify(props.errorInfo));
        const { errorInfo, config } = props;
        this.errorInfo = errorInfo;
        this.config = config;
        this.name = ERROR_NAME;
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, VKError);
        }
    }
}
/**
 * Define instanceof check.
 */
Object.defineProperty(VKError, Symbol.hasInstance, {
    value: (obj) => isNonNullObject(obj) &&
        obj.name === ERROR_NAME &&
        isNonNullObject(obj.data),
});
