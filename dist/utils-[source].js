/**
 * Returns function which formats any value with passed text formatter.
 * @param {TTextFormatter} formatKey
 * @returns {(value: any) => any}
 */
function createRecursiveKeysFormatter(formatKey) {
    const formatter = (value) => {
        if (value === null) {
            return null;
        }
        if (Array.isArray(value)) {
            return value.map(formatter);
        }
        if (typeof value === 'object') {
            return Object.keys(value).reduce((acc, key) => {
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
export function toSnakeCase(text) {
    return text.replace(/[A-Z]/g, match => `_${match.toLowerCase()}`);
}
export const recursiveToSnakeCase = createRecursiveKeysFormatter(toSnakeCase);
/**
 * Converts text to camel case.
 * @param {string} text
 * @returns {string}
 */
export function toCamelCase(text) {
    return text.replace(/_./g, match => match.slice(1).toUpperCase());
}
export const recursiveToCamelCase = createRecursiveKeysFormatter(toCamelCase);
/**
 * Converts boolean to pseudo boolean type.
 * @param {boolean} value
 * @returns {TPseudoBoolean}
 */
export function toPseudoBoolean(value) {
    return value ? 1 : 0;
}
/**
 * Converts optional boolean type to TPseudoBoolean or undefined.
 * @param {boolean | undefined} value
 * @returns {TPseudoBoolean | undefined}
 */
export function formatOptionalBoolean(value) {
    return typeof value === 'undefined'
        ? undefined
        : (typeof value === 'boolean' ? toPseudoBoolean(value) : value);
}
/**
 * Converts optional array of strings or numbers to string or undefined
 * @param {Array<string | number> | undefined} arr
 * @returns {string | undefined}
 */
export function formatOptionalArray(arr) {
    return typeof arr === 'undefined' ? arr : arr.join(',');
}
/**
 * States if value is non-null object.
 * @param value
 * @returns {value is Record<string, unknown>}
 */
export function isNonNullObject(value) {
    return typeof value === 'object' && value !== null;
}
