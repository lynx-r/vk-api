import {
  IPost
} from '../../types';

/**
 * @see https://vk.com/dev/wall.post
 */
export interface TPostParams {
  ownerId: string | number;
  friendOnly?: boolean;
  fromGroup?: boolean;
  message: string
}

export type TPostResult = IPost[];
