import {ImageStyle, TextStyle, ViewStyle} from 'react-native';

// data model for ogTags object in attachmentMeta
interface OgTagsProps {
  description: string;
  title: string;
  url: string;
  image?: string;
}

// data model for attachmentMeta
interface AttachmentMeta {
  entityId: string;
  ogTags: OgTagsProps;
}

export interface LMLinkPreviewProps {
  attachments: {
    attachmentMeta: AttachmentMeta;
    attachmentType: number;
  }; // this represents the object of data of link's attachment of 0 index
  onTap?: () => void; // this represents the function to be executed on click over the link preview
  showLinkUrl?: boolean; // this represents if the link url has to be displayed in the preview or not
  linkPreviewBoxStyle?: ViewStyle; // this represents the style of the preview container
  linkTitleStyle?: TextStyle; // this represensts the style of the title text of the preview
  linkDescriptionStyle?: TextStyle; // this represensts the style of the description text of the preview
  linkUrlStyle?: TextStyle; // this represensts the style of the url text of the preview
  linkImageStyle?: ImageStyle; // this represensts the style of the image of the preview
}
