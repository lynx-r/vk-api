import { Repository } from '../Repository';
import { TSendRequest } from '../../types';
import { IGetChairsParams, IGetCitiesByIdParams, TGetCitiesByIdResult, IGetCitiesParams, TGetCitiesResult, IGetCountriesByIdParams, TGetCountriesByIdResult, IGetCountriesParams, IGetFacultiesParams, IGetMetroStationsByIdParams, TGetMetroStationsByIdResult, IGetMetroStationsParams, TGetMetroStationsResult, IGetRegionsParams, IGetSchoolClassesParams, TGetSchoolClassesResult, IGetSchoolsParams, IGetUniversitiesParams } from './types';
export declare class DatabaseRepository extends Repository {
    constructor(sendRequest: TSendRequest);
    /**
     * @see https://vk.com/dev/database.getChairs
     * @type {TRepositoryMethod<IGetChairsParams, TGetChairsResult>}
     */
    getChairs: import("../../types").TRepositoryMethod<IGetChairsParams, import("../../types").IPager<import("../../types").IIdTitlePair>>;
    /**
     * @see https://vk.com/dev/database.getCities
     * @type {TRepositoryMethod<IGetCitiesParams, TGetCitiesResult>}
     */
    getCities: import("../../types").TRepositoryMethod<IGetCitiesParams, TGetCitiesResult>;
    /**
     * @see https://vk.com/dev/database.getCitiesById
     * @type {TRepositoryMethod<IGetCitiesByIdParams, TGetCitiesByIdResult>}
     */
    getCitiesById: import("../../types").TRepositoryMethod<IGetCitiesByIdParams, TGetCitiesByIdResult>;
    /**
     * @see https://vk.com/dev/database.getCountries
     * @type {TRepositoryMethod<IGetCountriesParams, TGetCountriesResult>}
     */
    getCountries: import("../../types").TRepositoryMethod<IGetCountriesParams, import("../../types").IPager<import("../../types").IIdTitlePair>>;
    /**
     * @see https://vk.com/dev/database.getCountriesById
     * @type {TRepositoryMethod<IGetCountriesByIdParams, TGetCountriesByIdResult>}
     */
    getCountriesById: import("../../types").TRepositoryMethod<IGetCountriesByIdParams, TGetCountriesByIdResult>;
    /**
     * @see https://vk.com/dev/database.getFaculties
     * @type {TRepositoryMethod<IGetFacultiesParams, TGetFacultiesResult>}
     */
    getFaculties: import("../../types").TRepositoryMethod<IGetFacultiesParams, import("../../types").IPager<import("../../types").IIdTitlePair>>;
    /**
     * @see https://vk.com/dev/database.getMetroStations
     * @type {TRepositoryMethod<IGetCountriesParams, TGetCountriesResult>}
     */
    getMetroStations: import("../../types").TRepositoryMethod<IGetMetroStationsParams, TGetMetroStationsResult>;
    /**
     * @see https://vk.com/dev/database.getMetroStationsById
     * @type {TRepositoryMethod<IGetMetroStationsByIdParams, TGetMetroStationsByIdResult>}
     */
    getMetroStationsById: import("../../types").TRepositoryMethod<IGetMetroStationsByIdParams, TGetMetroStationsByIdResult>;
    /**
     * @see https://vk.com/dev/database.getRegions
     * @type {TRepositoryMethod<IGetRegionsParams, TGetRegionsResult>}
     */
    getRegions: import("../../types").TRepositoryMethod<IGetRegionsParams, import("../../types").IPager<import("../../types").IIdTitlePair>>;
    /**
     * @see https://vk.com/dev/database.getSchoolClasses
     * @type {TRepositoryMethod<IGetSchoolClassesParams, TGetSchoolClassesResult>}
     */
    getSchoolClasses: import("../../types").TRepositoryMethod<IGetSchoolClassesParams, TGetSchoolClassesResult>;
    /**
     * @see https://vk.com/dev/database.getSchools
     * @type {TRepositoryMethod<IGetSchoolsParams, TGetSchoolsResult>}
     */
    getSchools: import("../../types").TRepositoryMethod<IGetSchoolsParams, import("../../types").IPager<import("../../types").IIdTitlePair>>;
    /**
     * @see https://vk.com/dev/database.getUniversities
     * @type {TRepositoryMethod<IGetUniversitiesParams, TGetUniversitiesResult>}
     */
    getUniversities: import("../../types").TRepositoryMethod<IGetUniversitiesParams, import("../../types").IPager<import("../../types").IIdTitlePair>>;
}
