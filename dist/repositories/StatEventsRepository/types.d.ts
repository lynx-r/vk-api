/**
 * @see https://vk.com/dev/statEvents.addMiniAppsCustom
 */
export declare type TAddMiniAppsCustomParams = {
    events: Array<{
        event: string;
        userId: number;
        timezone?: string;
        miniAppId: number;
        url: string;
        vkPlatform: string;
        json?: Record<any, any>;
        timestamp?: Date | number;
    } & ({
        typeNavgo: {
            type: 'type_mini_app_custom_event_item';
        };
    } | {
        typeView: {
            type: 'type_mini_app_custom_event_item';
        };
    } | {
        typeClick: {
            type: 'type_mini_app_custom_event_item';
        };
    })>;
};
export declare type TAddMiniAppsCustomResult = 1;
/**
 * @see https://vk.com/dev/statEvents.addMiniApps
 */
export interface IAddMiniAppsParams extends TAddMiniAppsCustomParams {
}
export declare type TAddMiniAppsResult = TAddMiniAppsCustomResult;
