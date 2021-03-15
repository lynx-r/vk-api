import { TPseudoBoolean } from '../shared';
/**
 * List of access connected with page.
 * @see https://vk.com/dev/objects/page
 */
export declare enum EPageAccess {
    Admins = 0,
    Participants = 1,
    Everybody = 2
}
/**
 * @see https://vk.com/dev/objects/page
 */
export interface IPage {
    id: number;
    groupId: number;
    creatorId: number;
    title: string;
    currentUserCanEdit: TPseudoBoolean;
    currentUserCanEditAccess: TPseudoBoolean;
    whoCanView: EPageAccess;
    whoCanEdit: EPageAccess;
    edited: number;
    created: number;
    editorId: number;
    views: number;
    parent?: string;
    parent2?: string;
    source?: string;
    html?: string;
    viewUrl: string;
}
