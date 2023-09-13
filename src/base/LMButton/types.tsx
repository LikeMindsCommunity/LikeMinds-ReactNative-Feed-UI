import { ViewStyle } from "react-native";
import { LMTextProps } from "../LMText/types";
import { LMIconProps } from "../LMIcon/types";

export interface LMButtonProps {
    text?: LMTextProps, 
    icon?: LMIconProps,
    onTap: (value?: any) => void,
    placement?: 'start' | 'end',
    isActive?: boolean,
    activeIcon?: LMIconProps,
    activeText?: LMTextProps,
    buttonStyle?: ViewStyle
}

  