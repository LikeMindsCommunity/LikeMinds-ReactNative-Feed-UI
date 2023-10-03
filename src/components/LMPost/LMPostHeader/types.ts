import {ImageStyle, TextStyle, View, ViewStyle} from 'react-native';
import { LMTextProps } from '../../../base/LMText/types';
import { LMIconProps } from '../../../base/LMIcon/types';

export interface LMPostHeaderProps {
  user: LMUserUI, // this gets the user detail who posted the post
  onProfileTap?: () => void, // this represents the callback function that gets executed on click over the profile picture
  imageSize?: number, // size of the image
  profileTextStyle?: TextStyle, // style of the initial characters of the name
  profileTextViewStyle?: ViewStyle, // style of the view that wraps the initial characters
  imageViewStyle?: ImageStyle // style of the profile image
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
  menuItems: Array<LMPostMenuItemsUI>, // menu list items of the post
  menuIcon?: LMIconProps, // this represents the icon that makes the menu list visible on click over it
  onMenuItemTap: (menuId?: number) => void, // this represents the callback function that executes on the click of every menu item
  menuItemTextStyle?: TextStyle, // style of the menu item text
  menuViewStyle?: ViewStyle, // style of the menu modal view
  menuBackdropColor?: string // color of the backdrop of the modal
}
