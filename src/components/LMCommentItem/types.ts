import {TextStyle} from 'react-native';
import {LMButtonProps} from '../../base/LMButton/types';
import {LMTextProps} from '../../base/LMText/types';
import {LMPostMenuProps} from '../LMPost/LMPostMenu/types';

export interface LMCommentProps {
  comment: LMCommentUI; // comment data
  likeIconButton?: LMButtonProps; // custom like icon button
  likeTextButton?: LMButtonProps; // custom like text button
  onTapViewMore?: (val: any, val2: any) => void; // callback function to be executed on click of view more replies
  commentMaxLines?: number; // maximun lines of comment to be shown
  menuIcon?: LMButtonProps; // custom menu icon button
  commentUserNameStyle?: TextStyle; // style for user name text
  commentContentProps?: LMTextProps; // props for comment content
  showMoreProps?: LMTextProps; // props for show more text
  replyTextProps?: LMButtonProps; // props for reply text
  repliesCountTextStyle?: TextStyle; // props for comment count text
  timeStampStyle?: TextStyle; // props for time stamp text
  viewMoreRepliesProps?: LMTextProps; // props for view more text
  onTapReplies?: (val: any) => void; // callback function to be executed on click of replies
  commentMenu: LMPostMenuProps; // this represents the post menu props
}
