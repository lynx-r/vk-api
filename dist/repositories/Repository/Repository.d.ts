import { TRepositoryMethod, TSendRequest } from '../../types';
/**
 * List of methods that could not be overridden.
 */
declare type TRepositoryNonOverridableMethods = 'sendRequest' | 'r' | 'implement';
/**
 * Base class to create repositories
 */
export declare abstract class Repository {
    /**
     * Function which sends request
     */
    protected readonly sendRequest: TSendRequest;
    protected constructor(repoName: string, sendRequest: TSendRequest);
    /**
     * Creates method which sends request.
     * @param {string} method
     * @param prepare
     * @returns {TRepositoryMethod<P, R>}
     */
    protected r<P, R>(method: string, prepare?: (params: P) => any): TRepositoryMethod<P, R>;
    /**
     * Implements new method in repository mutating it. Returns current instance
     * for chaining.
     * @param {M extends (TRepositoryNonOverridableMethods | "implement") ? never : M} method
     * @param {(params: P) => any} prepare
     * @returns {this & {[key in M]: TRepositoryMethod<P, R>}}
     */
    implement<P, R, M extends string>(method: M extends TRepositoryNonOverridableMethods | keyof this ? never : M, prepare?: (params: P) => any): this & {
        [key in M]: TRepositoryMethod<P, R>;
    };
}
export {};
