import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Linking,
} from 'react-native';
import React from 'react';
import {LMLinkPreviewProps} from './types';
import STYLES from '../../../constants/constants';

const LMLinkPreview = ({
  attachments,
  onTap,
  showLinkUrl,
  linkPreviewBoxStyle,
  linkImageStyle,
  linkTitleStyle,
  linkDescriptionStyle,
  linkUrlStyle,
  showDescription,
  showImage,
  showTitle,
}: LMLinkPreviewProps) => {
  const previewAttachmentData = attachments[0].attachmentMeta.ogTags;
  return (
    <TouchableOpacity
      style={styles.postMedia}
      onPress={() => {
        Linking.openURL(
          previewAttachmentData?.url ? previewAttachmentData.url : '',
        ),
          onTap;
      }}>
      {/* link preview image */}
      <View
        style={StyleSheet.flatten([
          styles.previewContainer,
          linkPreviewBoxStyle,
        ])}>
        <Image
          source={attachments && {uri: previewAttachmentData?.image}}
          style={StyleSheet.flatten([styles.previewImage, linkImageStyle, {
            display:
              showImage != undefined
                ? showImage
                  ? 'flex'
                  : 'none'
                : 'flex',
          }])}
        />
        {/* link preview data */}
        <View style={styles.previewDetailView}>
          {/* preview title */}
          <Text
            style={StyleSheet.flatten([
              styles.previewTitle,
              linkTitleStyle,
              {
                display:
                  showTitle != undefined
                    ? showTitle
                      ? 'flex'
                      : 'none'
                    : 'flex',
              },
            ])}>
            {previewAttachmentData?.title}
          </Text>
          {/* preview description */}
          <Text
            style={StyleSheet.flatten([
              styles.previewDescription,
              linkDescriptionStyle,
              {
                display:
                  showDescription != undefined
                    ? showDescription
                      ? 'flex'
                      : 'none'
                    : 'flex',
              },
            ])}>
            {previewAttachmentData?.description}
          </Text>
          {/* preview url */}
          <Text
            style={StyleSheet.flatten([
              styles.previewLink,
              linkUrlStyle,
              {
                display:
                  showLinkUrl != undefined
                    ? showLinkUrl
                      ? 'flex'
                      : 'none'
                    : 'flex',
              },
            ])}>
            {previewAttachmentData?.url}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  postMedia: {
    width: '100%',
    paddingHorizontal: 15,
  },
  previewContainer: {
    borderColor: STYLES.$COLORS.LIGHT_GREY,
    borderWidth: 0.5,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 5,
  },
  previewImage: {
    width: '100%',
    height: 220,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
  },
  previewTitle: {
    fontWeight: '500',
    color: STYLES.$COLORS.TEXT_COLOR,
    fontSize: 16,
  },
  previewDescription: {
    color: STYLES.$COLORS.TEXT_COLOR,
    paddingVertical: 2,
    opacity: 0.8,
  },
  previewLink: {
    color: STYLES.$COLORS.TEXT_COLOR,
    fontSize: 12,
    opacity: 0.7,
  },
  previewDetailView: {
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
});

export default LMLinkPreview;
