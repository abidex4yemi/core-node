/**
 * Note: all code in this file will be wrapped in a (IIFE) function
 * so we don't pollute global scope this is called module function wrapper
 * (function (exports, require, module, __filename, __dirname
me) { }
 */

const url = 'https://mylogger.io/log';

function log(message) {
	return message;
}

// Note: module.exports is same as exports but

module.exports = log;
module.exports.url = url;
