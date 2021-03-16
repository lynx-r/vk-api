"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Repository = void 0;
/**
 * Base class to create repositories
 */
var Repository = /** @class */ (function () {
    function Repository(repoName, sendRequest) {
        this.sendRequest = function (_a) {
            var method = _a.method, params = _a.params;
            return sendRequest({
                method: repoName + '.' + method,
                params: params,
            });
        };
    }
    /**
     * Creates method which sends request.
     * @param {string} method
     * @param prepare
     * @returns {TRepositoryMethod<P, R>}
     */
    Repository.prototype.r = function (method, prepare) {
        var _this = this;
        return function (params) { return _this.sendRequest({
            method: method,
            params: prepare ? prepare(params) : params,
        }); };
    };
    /**
     * Implements new method in repository mutating it. Returns current instance
     * for chaining.
     * @param {M extends (TRepositoryNonOverridableMethods | "implement") ? never : M} method
     * @param {(params: P) => any} prepare
     * @returns {this & {[key in M]: TRepositoryMethod<P, R>}}
     */
    Repository.prototype.implement = function (method, prepare) {
        Object.defineProperty(this, method, { value: this.r(method, prepare) });
        return this;
    };
    return Repository;
}());
exports.Repository = Repository;
