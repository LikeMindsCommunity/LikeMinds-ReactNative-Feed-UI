import {ViewStyle} from 'react-native';

export interface LMPostMediaProps {
  attachments: Array<LMAttachmentUI>; // list of attachments
  postMediaStyle?: ViewStyle; // style for the post media container
}
