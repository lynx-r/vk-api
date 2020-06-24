import {ObjectSharedProps, PhotoSize} from './shared';
import {Photo} from './photo';

/**
 * @see https://vk.com/dev/objects/poll
 */
export interface Poll extends ObjectSharedProps {
  created: number;
  question: string;
  votes: number;
  answers: Array<{
    id: number;
    text: string;
    votes: number;
    rate: number;
  }>;
  anonymous: boolean;
  multiple: boolean;
  answerIds: number[];
  endDate: number;
  closed: boolean;
  isBoard: boolean;
  canEdit: boolean;
  canVote: boolean;
  canReport: boolean;
  canShare: boolean;
  authorId: number;
  photo: Photo;
  background: {
    id: number;
    color: string;
  } & ({
    type: 'gradient';
    angle: number;
    points: Array<{
      position: number;
      color: string;
    }>;
  } | {
    type: 'tile';
    width: number;
    height: number;
    images: PhotoSize[];
  });
  friends: number[];
}
