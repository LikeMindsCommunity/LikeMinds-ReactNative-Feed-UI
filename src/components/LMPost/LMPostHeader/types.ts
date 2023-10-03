import {ImageStyle, TextStyle, View, ViewStyle} from 'react-native';
import { LMTextProps } from '../../../base/LMText/types';
import { LMIconProps } from '../../../base/LMIcon/types';
import { LMPostMenuProps } from '../LMPostMenu/types';
import { LMProfilePictureProps } from '../../../base/LMProfilePicture/types';

export interface LMPostHeaderProps {
  profilePicture: LMProfilePictureProps // props for profile avatar
  titleText?: LMTextProps, // this represents the title of the post
  createdAt?: LMTextProps, // time of creation of post
  isEdited?: boolean, // this represents if the post is edited or not
  showMemberStateLabel?: boolean, // this represents if the member state label should be visible or not
  memberState?: number, // this gets the member state
  memberStateViewStyle?: ViewStyle, // style of the member state label view
  memberStateTextStyle?: TextStyle, // style of the member state label text
  postHeaderViewStyle?: ViewStyle, // style of the post header section
  isPinned?: boolean, // this represents if the post is pinned or not
  pinIcon?: LMIconProps, // this represents the pin icon to display
  menuIcon?: LMIconProps, // this represents the icon that makes the menu list visible on click over it
  postMenu: LMPostMenuProps // this represents the post menu props
}
