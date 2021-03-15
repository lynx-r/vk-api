import { IIdTitlePair, IPager } from '../../types';
/**
 * Default pager with item as object with id and title
 */
declare type TDefaultPager = IPager<IIdTitlePair>;
/**
 * @see https://vk.com/dev/database.getChairs
 */
export interface IGetChairsParams {
    facultyId: number;
    offset?: number;
    count?: number;
}
export declare type TGetChairsResult = TDefaultPager;
/**
 * @see https://vk.com/dev/database.getCities
 */
export interface IGetCitiesParams {
    countryId: number;
    regionId?: number;
    q?: string;
    needAll?: boolean;
    offset?: number;
    count?: number;
}
export declare type TGetCitiesResult = IPager<IIdTitlePair & {
    area?: string;
    region?: string;
    important?: boolean;
}>;
/**
 * @see https://vk.com/dev/database.getCitiesById
 */
export interface IGetCitiesByIdParams {
    cityIds?: number[];
}
export declare type TGetCitiesByIdResult = IIdTitlePair[];
/**
 * @see https://vk.com/dev/database.getCountries
 */
export interface IGetCountriesParams {
    needAll?: boolean;
    code?: string[];
    offset?: number;
    count?: number;
}
export declare type TGetCountriesResult = TDefaultPager;
/**
 * @see https://vk.com/dev/database.getCountriesById
 */
export interface IGetCountriesByIdParams {
    countryIds?: number[];
}
export declare type TGetCountriesByIdResult = IIdTitlePair[];
/**
 * @see https://vk.com/dev/database.getFaculties
 */
export interface IGetFacultiesParams {
    universityId: number;
    offset?: number;
    count?: number;
}
export declare type TGetFacultiesResult = TDefaultPager;
/**
 * @see https://vk.com/dev/database.getMetroStations
 */
export interface IGetMetroStationsParams {
    cityId: number;
    offset?: number;
    count?: number;
    extended?: boolean;
}
export declare type TGetMetroStationsResult = IPager<{
    id: number;
    name: string;
    color: string;
}>;
/**
 * @see https://vk.com/dev/database.getMetroStationsById
 */
export interface IGetMetroStationsByIdParams {
    stationIds?: number[];
}
export declare type TGetMetroStationsByIdResult = Array<{
    id: number;
    name: string;
    color: string;
    cityId: number;
}>;
/**
 * @see https://vk.com/dev/database.getRegions
 */
export interface IGetRegionsParams {
    countryId: number;
    q?: string;
    offset?: number;
    count?: number;
}
export declare type TGetRegionsResult = TDefaultPager;
/**
 * @see https://vk.com/dev/database.getSchoolClasses
 */
export interface IGetSchoolClassesParams {
    countryId?: number;
}
declare type TSchoolClassId = number;
declare type TSchoolClassLetter = string;
export declare type TGetSchoolClassesResult = [TSchoolClassId, TSchoolClassLetter][];
/**
 * @see https://vk.com/dev/database.getSchools
 */
export interface IGetSchoolsParams {
    cityId: number;
    q?: string;
    offset?: number;
    count?: number;
}
export declare type TGetSchoolsResult = TDefaultPager;
/**
 * @see https://vk.com/dev/database.getUniversities
 */
export interface IGetUniversitiesParams {
    countryId?: number;
    cityId: number;
    q?: string;
    offset?: number;
    count?: number;
}
export declare type TGetUniversitiesResult = TDefaultPager;
export {};
