import {TextStyle, ViewStyle} from 'react-native';

export interface LMPostContentProps {
  text: string; // text content of the post
  linkData?: Array<LMAttachmentUI>; // link urls
  textStyle?: TextStyle; // style for the post content text
  linkStyle?: TextStyle; // style for the links url
  visibleLines?: number; // this represenst ths number of lines to be visible to perform show more functionality
  showMoreTextStyle?: TextStyle; // style for the show more text
  postContentViewStyle?: ViewStyle; // style for the post content box
}