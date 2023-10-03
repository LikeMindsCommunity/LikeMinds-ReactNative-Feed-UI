import {ImageStyle, TextStyle, ViewStyle} from 'react-native';
import {LMTextProps} from '../../base/LMText/types';
import { LMIconProps } from '../../base/LMIcon/types';
import { LMProfilePictureProps } from '../../base/LMProfilePicture/types';

export interface LMNotificationProps {
  boxStyle?: ViewStyle; // style of the notification item view
  userProfilePicture: LMProfilePictureProps // props of the profile avatar 
  activityText: LMTextProps; // notification text
  activityDate?: number; // activity createdAt time
  activityDateStyle?: TextStyle; // style of createdAt text
  onTap?: () => void; // callback function executed on click of notification item
  onMenuTap?: () => void; // callback funtion executed on click of menu icon
  menuIcon?: LMIconProps // custom menu icon
}
