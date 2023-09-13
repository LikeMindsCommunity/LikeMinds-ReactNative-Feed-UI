import { ImageStyle, ViewStyle } from "react-native";

export interface LMIconProps {
    type: 'png',
    assetPath?: string,
    color?: string,
    size?: number,
    iconStyle?: ImageStyle,
    boxFit?: 'center' | 'contain' | 'cover' | 'repeat' | 'stretch',
    boxStyle?: ViewStyle
}

  