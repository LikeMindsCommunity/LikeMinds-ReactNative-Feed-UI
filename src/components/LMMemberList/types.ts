import { ViewStyle } from "react-native";
import { LMProfilePictureProps } from "../../base/LMProfilePicture/types";
import { LMTextProps } from "../../base/LMText/types";

export interface LMMemberListProps {
  memberProfilePicture: LMProfilePictureProps, // props for member profile avatar
  memberName: LMTextProps, // this represents the name of the member
  memberTitle?: LMTextProps, // this represents the title of the member
  boxStyle?: ViewStyle // this represents the style of the member item view
}