/**
 * @see https://vk.com/dev/stats.get
 */
export declare type TGetParams = {
    timestampFrom?: number;
    timestampTo?: number;
    interval?: 'day' | 'week' | 'month' | 'year' | 'all';
    intervalsCount?: number;
    filters?: string[];
    statsGroups?: 'visitors' | 'reach' | 'activity';
    extended?: boolean;
} & ({
    groupId: number;
} | {
    appId: number;
});
export declare type TGetResult = Array<{
    periodFrom: string;
    periodTo: string;
    reach: {
        age: Array<{
            value: string;
            count: number;
        }>;
        cities: Array<{
            count: number;
            name: string;
            value: number;
        }>;
        countries: Array<{
            code: string;
            count: number;
            name: string;
            value: number;
        }>;
        mobileReach: number;
        reach: number;
        reachSubscribers: number;
        sex: Array<{
            value: 'm' | 'f';
            count: number;
        }>;
        sexAge: Array<{
            value: string;
            count: number;
        }>;
    };
    visitors: {
        cities: Array<unknown>;
        countries: Array<unknown>;
        views: number;
        mobileViews: number;
        visitors: number;
    };
}>;
/**
 * @see https://vk.com/dev/stats.getPostReach
 */
export interface IGetPostReachParams {
    ownerId: number;
    postIds: number[];
}
export interface IGetPostReachResult {
    reachSubscribers: number;
    reachTotal: number;
    reachAds: number;
    reachViral: number;
    links: number;
    toGroup: number;
    joinGroup: number;
    report: number;
    hide: number;
    unsubscribe: number;
}
/**
 * @see https://vk.com/dev/stats.trackVisitor
 */
export interface ITrackVisitorParams {
}
export declare type TTrackVisitorResult = 1;
