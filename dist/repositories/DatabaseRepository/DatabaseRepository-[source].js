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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseRepository = void 0;
var Repository_1 = require("../Repository");
var utils_1 = require("../../utils");
var DatabaseRepository = /** @class */ (function (_super) {
    __extends(DatabaseRepository, _super);
    function DatabaseRepository(sendRequest) {
        var _this = _super.call(this, 'database', sendRequest) || this;
        /**
         * @see https://vk.com/dev/database.getChairs
         * @type {TRepositoryMethod<IGetChairsParams, TGetChairsResult>}
         */
        _this.getChairs = _this.r('getChairs');
        /**
         * @see https://vk.com/dev/database.getCities
         * @type {TRepositoryMethod<IGetCitiesParams, TGetCitiesResult>}
         */
        _this.getCities = _this.r('getCities', function (_a) {
            var needAll = _a.needAll, rest = __rest(_a, ["needAll"]);
            return (__assign(__assign({}, rest), { needAll: utils_1.formatOptionalBoolean(needAll) }));
        });
        /**
         * @see https://vk.com/dev/database.getCitiesById
         * @type {TRepositoryMethod<IGetCitiesByIdParams, TGetCitiesByIdResult>}
         */
        _this.getCitiesById = _this.r('getCitiesById', function (_a) {
            var cityIds = _a.cityIds, rest = __rest(_a, ["cityIds"]);
            return (__assign(__assign({}, rest), { cityIds: utils_1.formatOptionalArray(cityIds) }));
        });
        /**
         * @see https://vk.com/dev/database.getCountries
         * @type {TRepositoryMethod<IGetCountriesParams, TGetCountriesResult>}
         */
        _this.getCountries = _this.r('getCountries', function (_a) {
            var code = _a.code, needAll = _a.needAll, rest = __rest(_a, ["code", "needAll"]);
            return (__assign(__assign({}, rest), { needAll: utils_1.formatOptionalBoolean(needAll), code: utils_1.formatOptionalArray(code) }));
        });
        /**
         * @see https://vk.com/dev/database.getCountriesById
         * @type {TRepositoryMethod<IGetCountriesByIdParams, TGetCountriesByIdResult>}
         */
        _this.getCountriesById = _this.r('getCountriesById', function (_a) {
            var countryIds = _a.countryIds, rest = __rest(_a, ["countryIds"]);
            return (__assign(__assign({}, rest), { countryIds: utils_1.formatOptionalArray(countryIds) }));
        });
        /**
         * @see https://vk.com/dev/database.getFaculties
         * @type {TRepositoryMethod<IGetFacultiesParams, TGetFacultiesResult>}
         */
        _this.getFaculties = _this.r('getFaculties');
        /**
         * @see https://vk.com/dev/database.getMetroStations
         * @type {TRepositoryMethod<IGetCountriesParams, TGetCountriesResult>}
         */
        _this.getMetroStations = _this.r('getMetroStations', function (_a) {
            var extended = _a.extended, rest = __rest(_a, ["extended"]);
            return (__assign(__assign({}, rest), { extended: utils_1.formatOptionalBoolean(extended) }));
        });
        /**
         * @see https://vk.com/dev/database.getMetroStationsById
         * @type {TRepositoryMethod<IGetMetroStationsByIdParams, TGetMetroStationsByIdResult>}
         */
        _this.getMetroStationsById = _this.r('getMetroStationsById', function (_a) {
            var stationIds = _a.stationIds, rest = __rest(_a, ["stationIds"]);
            return (__assign(__assign({}, rest), { stationIds: utils_1.formatOptionalArray(stationIds) }));
        });
        /**
         * @see https://vk.com/dev/database.getRegions
         * @type {TRepositoryMethod<IGetRegionsParams, TGetRegionsResult>}
         */
        _this.getRegions = _this.r('getRegions');
        /**
         * @see https://vk.com/dev/database.getSchoolClasses
         * @type {TRepositoryMethod<IGetSchoolClassesParams, TGetSchoolClassesResult>}
         */
        _this.getSchoolClasses = _this.r('getSchoolClasses');
        /**
         * @see https://vk.com/dev/database.getSchools
         * @type {TRepositoryMethod<IGetSchoolsParams, TGetSchoolsResult>}
         */
        _this.getSchools = _this.r('getSchools');
        /**
         * @see https://vk.com/dev/database.getUniversities
         * @type {TRepositoryMethod<IGetUniversitiesParams, TGetUniversitiesResult>}
         */
        _this.getUniversities = _this.r('getUniversities');
        return _this;
    }
    return DatabaseRepository;
}(Repository_1.Repository));
exports.DatabaseRepository = DatabaseRepository;
