import { TBoolean, TPseudoBoolean } from './types';
/**
 * Converts text to snake case.
 * @param {string} text
 * @returns {string}
 */
export declare function toSnakeCase(text: string): string;
export declare const recursiveToSnakeCase: (value: any) => any;
/**
 * Converts text to camel case.
 * @param {string} text
 * @returns {string}
 */
export declare function toCamelCase(text: string): string;
export declare const recursiveToCamelCase: (value: any) => any;
/**
 * Converts boolean to pseudo boolean type.
 * @param {boolean} value
 * @returns {TPseudoBoolean}
 */
export declare function toPseudoBoolean(value: boolean): TPseudoBoolean;
/**
 * Converts optional boolean type to TPseudoBoolean or undefined.
 * @param {boolean | undefined} value
 * @returns {TPseudoBoolean | undefined}
 */
export declare function formatOptionalBoolean(value: TBoolean | undefined): TPseudoBoolean | undefined;
/**
 * Converts optional array of strings or numbers to string or undefined
 * @param {Array<string | number> | undefined} arr
 * @returns {string | undefined}
 */
export declare function formatOptionalArray(arr: Array<string | number> | undefined): string | undefined;
/**
 * States if value is non-null object.
 * @param value
 * @returns {value is Record<string, unknown>}
 */
export declare function isNonNullObject(value: any): value is Record<string, unknown>;
