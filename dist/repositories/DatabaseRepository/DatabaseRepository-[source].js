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
import { Repository } from '../Repository';
import { formatOptionalBoolean, formatOptionalArray } from '../../utils';
export class DatabaseRepository extends Repository {
    constructor(sendRequest) {
        super('database', sendRequest);
        /**
         * @see https://vk.com/dev/database.getChairs
         * @type {TRepositoryMethod<IGetChairsParams, TGetChairsResult>}
         */
        this.getChairs = this.r('getChairs');
        /**
         * @see https://vk.com/dev/database.getCities
         * @type {TRepositoryMethod<IGetCitiesParams, TGetCitiesResult>}
         */
        this.getCities = this.r('getCities', (_a) => {
            var { needAll } = _a, rest = __rest(_a, ["needAll"]);
            return (Object.assign(Object.assign({}, rest), { needAll: formatOptionalBoolean(needAll) }));
        });
        /**
         * @see https://vk.com/dev/database.getCitiesById
         * @type {TRepositoryMethod<IGetCitiesByIdParams, TGetCitiesByIdResult>}
         */
        this.getCitiesById = this.r('getCitiesById', (_a) => {
            var { cityIds } = _a, rest = __rest(_a, ["cityIds"]);
            return (Object.assign(Object.assign({}, rest), { cityIds: formatOptionalArray(cityIds) }));
        });
        /**
         * @see https://vk.com/dev/database.getCountries
         * @type {TRepositoryMethod<IGetCountriesParams, TGetCountriesResult>}
         */
        this.getCountries = this.r('getCountries', (_a) => {
            var { code, needAll } = _a, rest = __rest(_a, ["code", "needAll"]);
            return (Object.assign(Object.assign({}, rest), { needAll: formatOptionalBoolean(needAll), code: formatOptionalArray(code) }));
        });
        /**
         * @see https://vk.com/dev/database.getCountriesById
         * @type {TRepositoryMethod<IGetCountriesByIdParams, TGetCountriesByIdResult>}
         */
        this.getCountriesById = this.r('getCountriesById', (_a) => {
            var { countryIds } = _a, rest = __rest(_a, ["countryIds"]);
            return (Object.assign(Object.assign({}, rest), { countryIds: formatOptionalArray(countryIds) }));
        });
        /**
         * @see https://vk.com/dev/database.getFaculties
         * @type {TRepositoryMethod<IGetFacultiesParams, TGetFacultiesResult>}
         */
        this.getFaculties = this.r('getFaculties');
        /**
         * @see https://vk.com/dev/database.getMetroStations
         * @type {TRepositoryMethod<IGetCountriesParams, TGetCountriesResult>}
         */
        this.getMetroStations = this.r('getMetroStations', (_a) => {
            var { extended } = _a, rest = __rest(_a, ["extended"]);
            return (Object.assign(Object.assign({}, rest), { extended: formatOptionalBoolean(extended) }));
        });
        /**
         * @see https://vk.com/dev/database.getMetroStationsById
         * @type {TRepositoryMethod<IGetMetroStationsByIdParams, TGetMetroStationsByIdResult>}
         */
        this.getMetroStationsById = this.r('getMetroStationsById', (_a) => {
            var { stationIds } = _a, rest = __rest(_a, ["stationIds"]);
            return (Object.assign(Object.assign({}, rest), { stationIds: formatOptionalArray(stationIds) }));
        });
        /**
         * @see https://vk.com/dev/database.getRegions
         * @type {TRepositoryMethod<IGetRegionsParams, TGetRegionsResult>}
         */
        this.getRegions = this.r('getRegions');
        /**
         * @see https://vk.com/dev/database.getSchoolClasses
         * @type {TRepositoryMethod<IGetSchoolClassesParams, TGetSchoolClassesResult>}
         */
        this.getSchoolClasses = this.r('getSchoolClasses');
        /**
         * @see https://vk.com/dev/database.getSchools
         * @type {TRepositoryMethod<IGetSchoolsParams, TGetSchoolsResult>}
         */
        this.getSchools = this.r('getSchools');
        /**
         * @see https://vk.com/dev/database.getUniversities
         * @type {TRepositoryMethod<IGetUniversitiesParams, TGetUniversitiesResult>}
         */
        this.getUniversities = this.r('getUniversities');
    }
}
