import {View, StyleSheet} from 'react-native';
import React from 'react';
import {LMPostMediaProps} from './types';
import {
  DOCUMENT_ATTACHMENT_TYPE,
  IMAGE_ATTACHMENT_TYPE,
  LINK_ATTACHMENT_TYPE,
  VIDEO_ATTACHMENT_TYPE,
} from '../../../constants/strings';
import {
  LMCarousel,
  LMDocument,
  LMImage,
  LMLinkPreview,
  LMVideo,
} from '../../LMMedia';

const LMPostMedia = ({attachments, postMediaStyle}: LMPostMediaProps) => {
  // this handles the rendering of posts with single attachment
  const renderSingleAttachment = () => {
    switch (attachments[0]?.attachmentType) {
      case IMAGE_ATTACHMENT_TYPE: {
        return (
          <LMImage
            imageUrl={
              attachments[0]?.attachmentMeta.url
                ? attachments[0]?.attachmentMeta.url
                : ''
            }
          />
        );
      }
      case VIDEO_ATTACHMENT_TYPE: {
        return (
          <LMVideo
            videoUrl={
              attachments[0]?.attachmentMeta.url
                ? attachments[0]?.attachmentMeta.url
                : ''
            }
          />
        );
      }
      case DOCUMENT_ATTACHMENT_TYPE: {
        return <LMDocument attachments={attachments} />;
      }
      case LINK_ATTACHMENT_TYPE: {
        return <LMLinkPreview attachments={attachments} />;
      }
      default: {
        break;
      }
    }
  };

  // this functions gets the url of image and video for rendering in its components
  const getUrl = (type: number) => {
    let url = attachments?.find(item => item?.attachmentType === type);
    return url?.attachmentMeta.url ? url?.attachmentMeta.url : '';
  };

  // this gets the required attachment type data to render in its component
  const getData = (type: number, type2?: number) => {
    let data = attachments.filter(
      item => item.attachmentType === type || item.attachmentType === type2,
    );
    return data;
  };

  return (
    <View
      style={StyleSheet.flatten([
        {paddingBottom: 10, paddingTop: 15},
        postMediaStyle,
      ])}>
      {attachments?.length > 1 ? (
        // this section renders if there are multiple attachments
        attachments?.filter(
          item =>
            item?.attachmentType === IMAGE_ATTACHMENT_TYPE ||
            item?.attachmentType === VIDEO_ATTACHMENT_TYPE,
        ).length >= 2 ? (
          <LMCarousel
            attachments={getData(IMAGE_ATTACHMENT_TYPE, VIDEO_ATTACHMENT_TYPE)}
          />
        ) : (
          // this section renders if there are multiple attachments but the image or video attachments are less than 2
          <>
            {attachments?.find(
              item => item?.attachmentType === IMAGE_ATTACHMENT_TYPE,
            ) && <LMImage imageUrl={getUrl(IMAGE_ATTACHMENT_TYPE)} />}
            {attachments?.find(
              item => item?.attachmentType === VIDEO_ATTACHMENT_TYPE,
            ) && <LMVideo videoUrl={getUrl(VIDEO_ATTACHMENT_TYPE)} />}
            {attachments?.find(
              item => item?.attachmentType === DOCUMENT_ATTACHMENT_TYPE,
            ) && <LMDocument attachments={getData(DOCUMENT_ATTACHMENT_TYPE)} />}
          </>
        )
      ) : (
        // this section renders if there is a single attachment
        <>{renderSingleAttachment()}</>
      )}
    </View>
  );
};

export default LMPostMedia;
