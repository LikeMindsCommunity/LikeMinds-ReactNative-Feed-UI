import { ViewStyle } from "react-native";
import { LMProfilePictureProps } from "../../base/LMProfilePicture/types";
import { LMTextProps } from "../../base/LMText/types";

export interface LMMemberListItemProps {
  user: LMUserUI, // this represents the user data
  profilePictureProps?: LMProfilePictureProps, // props for member profile avatar
  nameProps?: LMTextProps, // this represents the name of the member
  customTitleProps?: LMTextProps, // this represents the title of the member
  boxStyle?: ViewStyle // this represents the style of the member item view
  onTap?: (user?: LMUserUI) => void // callback function for accessing the user data
}