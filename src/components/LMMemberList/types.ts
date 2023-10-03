import { ViewStyle } from "react-native";
import { LMProfilePictureProps } from "../../base/LMProfilePicture/types";
import { LMTextProps } from "../../base/LMText/types";

export interface LMMemberListProps {
  memberProfilePicture: LMProfilePictureProps,
  memberName: LMTextProps,
  memberTitle?: LMTextProps,
  boxStyle?: ViewStyle
}