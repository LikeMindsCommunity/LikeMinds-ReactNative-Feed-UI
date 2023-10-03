import {ImageStyle, TextStyle, ViewStyle} from 'react-native';
import {LMTextProps} from '../../base/LMText/types';
import { LMIconProps } from '../../base/LMIcon/types';
import { LMProfilePictureProps } from '../../base/LMProfilePicture/types';

export interface LMNotificationProps {
  boxStyle?: ViewStyle;
  userProfilePicture: LMProfilePictureProps
  activityText: LMTextProps;
  activityDate?: number;
  activityDateStyle?: TextStyle;
  onTap?: () => void;
  onMenuTap?: () => void;
  menuIcon?: LMIconProps
}
