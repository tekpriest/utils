/**
 * Utils to make your development easier
 * @author koderant
 * @link https://github.com/en1tan/js-utils
 * @tutorial https://javascript.plainenglish.io/17-life-saving-javascript-one-liners-part1-b0b0b32c9f61
 */


/**
   * Check if path is relative
   * @param {String} path
   */
export function isRelative(path) {
  return !/^([a-z]+:)?[\\/]/i.test(path);
}
/**
   * Convert the character at a specified postion
   * to uppercase
   * @param {String} str
   * @param {Number} pos
   * @returns
   */
export function convertToUppercase(str, pos) {
  return `${str.charAt(pos).toUpperCase()}${str.slice(1)}`;
}
/**
   * Convert the character at a specified postion
   * to lowercase
   * @param {String} str
   * @param {Number} pos
   * @returns
   */
export function convertTolowercase(str, pos) {
  return `${str.charAt(pos).toLowerCase()}${str.slice(1)}`;
}
/**
   * Repeat strings
   * @param {String} str
   * @param {Number} num
   * @returns
   */
export function repeatString(str, num) {
  return str.repeat(num);
}
/**
   * Check if color is hex
   * @param {String} color
   */
export function isHex(color) {
  return /^#([0-9A-F]{3}|[0-9A-F]{4}|[0-9A-F]{6}|[0-9A-F]{8})$/i.test(color);
}
/**
   * Convert hour to am/pm
   * @param {Number} hour
   */
export function amPm2Hr(hour) {
  if (hour > 23 || hour < 0)
    throw new Error("hour must be between 0 and 23");
  return `${hour % 12 === 0 ? 12 : hour % 12}${hour < 12 ? 'am' : 'pm'}`;
}
/**
   * Get Date differences
   * @param {Date} startDate
   * @param {Date} endDate
   */
export function dateDifference(startDate, endDate) {
  return Math.ceil(Math.abs(startDate - endDate) / (1000 * 60 * 60 * 24));
}
/**
   * Check if date is valid
   * @param  {...Date} date Date
   */
export function isValidDate(...date) {
  return !Number.isNaN(new Date(...date));
}
/**
   * Check if code is running in Node.js
   * @param {String} app
   */
export function isNodeProcess(app) {
  return typeof app !== 'undefined' && app.versions != null && app.versions.node != null;
}
/**
   * Convert params to object
   * @param {String} params
   */
export function params2Object(params) {
  return Array.from(new URLSearchParams(params))
    .reduce((p, [k, v]) => Object.assign({}, p, {
      [k]: p[k]
        ? (Array.isArray(p[k])
          ? p[k] : [p[k]]).concat(v) : v
    }), {});
}
/**
   * Convert RGB to Hex Color
   * @param {Number} r
   * @param {Number} g
   * @param {Number} b
   */
export function rgb2Hex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
/**
   * Generate random hex color
   */
export function genHexColor() {
  return `#${Math.random().toString(16).slice(2, 8).padEnd(6, '0')}`;
}
/**
   * Generate random IP Address
   */
export function genIP() {
  return Array(4).fill(0).map((_, i) => Math.floor(Math.random() * 255) + (i === 0 ? 1 : 0)).join('.');
}
/**
   * Generate random string
   */
export function genRandomString() {
  return require('crypto').randomBytes(32).toString('hex');
}
/**
   *
   * @param {Array} arrayA
   * @param {Array} arrayB
   */
export function arrayEqual(arrayA, arrayB) {
  return JSON.stringify(arrayA) === JSON.stringify(arrayB) || arrayA.length === arrayB.length && arrayA.every((v, i) => v === arrayB[i]);
}
/**
   * Convert Array of objects to a single object
   * @param {Array} array
   * @param {String} key
   */
export function array2Object(array, key) {
  return array.reduce((a, b) => ({ ...a, [b[key]]: b }), {}) || Object.fromEntries(array.map((it) => [it[key], it]));
}
/**
   * Count by the properties of an array of objects
   * @param {Array} array
   * @param {String} prop
   */
export function countArrayProps(array, prop) {
  return array.reduce((prev, curr) => ((prev[curr[prop]] = ++prev[curr[prop]] || 1), prev), {});
}
/**
   * Check if array is empty
   * @param {Array} array
   */
export function isArrayEmpty(array) {
  return Array.isArray(array) && Object.keys(array).length > 0;
}
/**
   * Check if multiple objects are equal
   * @param  {...Object} objects objects to check for
   */
export function isObjectsEqual(...objects) {
  return objects.every((object) => JSON.stringify(object) === JSON.stringify(object[0]));
}
/**
   * Extract values of a property from an array of objects
   * @param {Array} objects
   * @param {String} prop
   */
export function extractArrayProp(objects, prop) {
  return objects.map((object) => object[prop]);
}
/**
   * Invert keys and values of an object
   * @param {Object} object
   */
export function invertObject(object) {
  return Object.keys(object).reduce((res, k) => Object.assign(res, { [object[k]]: k }), {});
}
/**
   * Remove null or undefined properties
   * from an object
   * @param {{}} object
   */
export function clearNull(object) {
  return Object.entries(object).reduce((a, [k, v]) => (v == null ? a : ((a[k] = v), a)), {})
    || Object.entries(object).filter(([_, v]) => v != null).reduce((acc, [k, v]) => ({ ...acc, [k]: v }), {})
    || Object.fromEntries(Object.entries(object).filter(([_, v]) => v != null));
}
/**
   * Sort object by its properties
   * @param {{}}} object
   */
export function objSort(object) {
  return Object.keys(object).sort().reduce((p, c) => ((p[c] = object[c]), p), {});
}
/**
   * Check if object is a promise
   * @param {{}}} object
   */
export function isPromise(object) {
  return !!object && (typeof object === 'object' || typeof object === 'function') && typeof object.then === 'function';
}
/**
   * Check if object is a array object
   * @param {{}} object
   */
export function objIsArray(object) {
  return Array.isArray(object);
}
