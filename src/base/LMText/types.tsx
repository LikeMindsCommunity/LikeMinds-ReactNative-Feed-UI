import {TextStyle} from 'react-native';

// required and optional props expected in the LMText component
export interface LMTextProps {
  text: string;
  maxLines?: number;
  textStyle?: TextStyle;
  selectable?: boolean;
}
