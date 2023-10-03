import {TextStyle} from 'react-native';

// required and optional props expected in the LMText component
export interface LMTextProps {
  text: string; // this represents the text to render
  maxLines?: number; // this defines the maximum lines to be displayed
  textStyle?: TextStyle; // this represents ths style of the text
  selectable?: boolean; // this represents the selection behaviour of the text
  onTextLayout?: (event?:any) => void // callback function executed on change of text layout
}
