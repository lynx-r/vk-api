"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNonNullObject = exports.formatOptionalArray = exports.formatOptionalBoolean = exports.toPseudoBoolean = exports.recursiveToCamelCase = exports.toCamelCase = exports.recursiveToSnakeCase = exports.toSnakeCase = void 0;
/**
 * Returns function which formats any value with passed text formatter.
 * @param {TTextFormatter} formatKey
 * @returns {(value: any) => any}
 */
function createRecursiveKeysFormatter(formatKey) {
    var formatter = function (value) {
        if (value === null) {
            return null;
        }
        if (Array.isArray(value)) {
            return value.map(formatter);
        }
        if (typeof value === 'object') {
            return Object.keys(value).reduce(function (acc, key) {
                acc[formatKey(key)] = formatter(value[key]);
                return acc;
            }, {});
        }
        return value;
    };
    return formatter;
}
/**
 * Converts text to snake case.
 * @param {string} text
 * @returns {string}
 */
function toSnakeCase(text) {
    return text.replace(/[A-Z]/g, function (match) { return "_" + match.toLowerCase(); });
}
exports.toSnakeCase = toSnakeCase;
exports.recursiveToSnakeCase = createRecursiveKeysFormatter(toSnakeCase);
/**
 * Converts text to camel case.
 * @param {string} text
 * @returns {string}
 */
function toCamelCase(text) {
    return text.replace(/_./g, function (match) { return match.slice(1).toUpperCase(); });
}
exports.toCamelCase = toCamelCase;
exports.recursiveToCamelCase = createRecursiveKeysFormatter(toCamelCase);
/**
 * Converts boolean to pseudo boolean type.
 * @param {boolean} value
 * @returns {TPseudoBoolean}
 */
function toPseudoBoolean(value) {
    return value ? 1 : 0;
}
exports.toPseudoBoolean = toPseudoBoolean;
/**
 * Converts optional boolean type to TPseudoBoolean or undefined.
 * @param {boolean | undefined} value
 * @returns {TPseudoBoolean | undefined}
 */
function formatOptionalBoolean(value) {
    return typeof value === 'undefined'
        ? undefined
        : (typeof value === 'boolean' ? toPseudoBoolean(value) : value);
}
exports.formatOptionalBoolean = formatOptionalBoolean;
/**
 * Converts optional array of strings or numbers to string or undefined
 * @param {Array<string | number> | undefined} arr
 * @returns {string | undefined}
 */
function formatOptionalArray(arr) {
    return typeof arr === 'undefined' ? arr : arr.join(',');
}
exports.formatOptionalArray = formatOptionalArray;
/**
 * States if value is non-null object.
 * @param value
 * @returns {value is Record<string, unknown>}
 */
function isNonNullObject(value) {
    return typeof value === 'object' && value !== null;
}
exports.isNonNullObject = isNonNullObject;
