/**
 * Base class to create repositories
 */
export class Repository {
    constructor(repoName, sendRequest) {
        this.sendRequest = ({ method, params }) => sendRequest({
            method: repoName + '.' + method,
            params,
        });
    }
    /**
     * Creates method which sends request.
     * @param {string} method
     * @param prepare
     * @returns {TRepositoryMethod<P, R>}
     */
    r(method, prepare) {
        return params => this.sendRequest({
            method,
            params: prepare ? prepare(params) : params,
        });
    }
    /**
     * Implements new method in repository mutating it. Returns current instance
     * for chaining.
     * @param {M extends (TRepositoryNonOverridableMethods | "implement") ? never : M} method
     * @param {(params: P) => any} prepare
     * @returns {this & {[key in M]: TRepositoryMethod<P, R>}}
     */
    implement(method, prepare) {
        Object.defineProperty(this, method, { value: this.r(method, prepare) });
        return this;
    }
}
