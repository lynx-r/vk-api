"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VKAPI = void 0;
require("cross-fetch/polyfill");
var Core_1 = require("../Core");
var Queue_1 = require("../Queue");
var utils_1 = require("../utils");
var VKError_1 = require("../VKError");
/**
 * Class to perform requests to VK API.
 */
var VKAPI = /** @class */ (function (_super) {
    __extends(VKAPI, _super);
    function VKAPI(props) {
        if (props === void 0) { props = {}; }
        var _this = _super.call(this) || this;
        /**
         * Access token to perform requests. Used in all requests until overridden.
         * @type {string | null}
         */
        _this.accessToken = null;
        _this.sendRequest = function (config) { return __awaiter(_this, void 0, void 0, function () {
            var method, params, formattedData, form, url, response, json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        method = config.method, params = config.params;
                        formattedData = utils_1.recursiveToSnakeCase(__assign({ v: this.v, accessToken: this.accessToken, lang: this.lang }, params));
                        form = Object
                            .entries(formattedData)
                            .filter(function (_a) {
                            var value = _a[1];
                            return value !== undefined;
                        })
                            .map(function (_a) {
                            var key = _a[0], value = _a[1];
                            var formattedValue = typeof value === 'object'
                                ? JSON.stringify(value)
                                : String(value);
                            return encodeURIComponent(key) + '=' +
                                encodeURIComponent(formattedValue);
                        })
                            .join('&');
                        url = this.baseUrl + "/" + method;
                        // In case, we are in browser, it is required to use JSONP.
                        if (this.isBrowser) {
                            return [2 /*return*/, new Promise(function (res, rej) {
                                    var cbName = "__vkapicallback" + Math.random().toString().slice(2);
                                    // Create script tag and assign source.
                                    var script = document.createElement('script');
                                    script.src = url + "?" + form + "&callback=" + cbName;
                                    // Define JSONP callback.
                                    window[cbName] = function (data) {
                                        // Remove script tag from DOM.
                                        document.head.removeChild(script);
                                        if (data === null || data === void 0 ? void 0 : data.response) {
                                            return res(utils_1.recursiveToCamelCase(data.response));
                                        }
                                        rej(new VKError_1.VKError({
                                            errorInfo: utils_1.recursiveToCamelCase((data === null || data === void 0 ? void 0 : data.error) || {}),
                                            config: config,
                                        }));
                                    };
                                    // Append script to DOM.
                                    document.head.appendChild(script);
                                })];
                        }
                        return [4 /*yield*/, fetch(url, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                                },
                                body: form,
                            })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        json = _a.sent();
                        // In case, we received response, convert it to camel case.
                        if ('response' in json) {
                            return [2 /*return*/, utils_1.recursiveToCamelCase(json.response)];
                        }
                        // Otherwise, throw an error.
                        throw new VKError_1.VKError({
                            errorInfo: utils_1.recursiveToCamelCase((json === null || json === void 0 ? void 0 : json.error) || {}),
                            config: config,
                        });
                }
            });
        }); };
        _this.addRequestToQueue = function (config) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // Wait until request can be performed.
                    return [4 /*yield*/, this.queue.await()];
                    case 1:
                        // Wait until request can be performed.
                        _a.sent();
                        // When awaiting is done, perform a request.
                        return [2 /*return*/, this.sendRequest(config)];
                }
            });
        }); };
        _this.addRepository = function (name, Repo) {
            return _super.prototype.addRepository.call(_this, name, Repo, _this.addRequestToQueue);
        };
        var _a = props.rps, rps = _a === void 0 ? 3 : _a, accessToken = props.accessToken, _b = props.v, v = _b === void 0 ? '5.110' : _b, _c = props.lang, lang = _c === void 0 ? 'ru' : _c, _d = props.isBrowser, isBrowser = _d === void 0 ? false : _d, _e = props.baseUrl, baseUrl = _e === void 0 ? 'https://api.vk.com/method' : _e;
        _this.accessToken = accessToken || null;
        _this.v = v;
        _this.lang = lang;
        _this.isBrowser = isBrowser;
        _this.queue = new Queue_1.Queue({ timeout: Math.ceil(1000 / rps) });
        _this.baseUrl = baseUrl.endsWith('/')
            ? baseUrl.slice(0, baseUrl.length - 1)
            : baseUrl;
        // Initialize repositories with specified addRequestToQueue method.
        _this.init(_this.addRequestToQueue);
        return _this;
    }
    return VKAPI;
}(Core_1.Core));
exports.VKAPI = VKAPI;
