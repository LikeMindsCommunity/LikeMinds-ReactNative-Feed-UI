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

const LMLinkPreview = ({
  attachments,
  onTap,
  showLinkUrl,
  linkPreviewBoxStyle,
  linkImageStyle,
  linkTitleStyle,
  linkDescriptionStyle,
  linkUrlStyle,
}: LMLinkPreviewProps) => {
  return (
    <TouchableOpacity
      style={styles.postMedia}
      onPress={() => {
        Linking.openURL(attachments?.attachmentMeta?.ogTags?.url), onTap;
      }}>
      {/* link preview image */}
      <View
        style={StyleSheet.flatten([
          styles.previewContainer,
          linkPreviewBoxStyle,
        ])}>
        <Image
          source={
            attachments && {uri: attachments?.attachmentMeta?.ogTags?.image}
          }
          style={StyleSheet.flatten([styles.previewImage, linkImageStyle])}
        />
        {/* link preview data */}
        <View style={styles.previewDetailView}>
          {/* preview title */}
          <Text
            style={StyleSheet.flatten([styles.previewTitle, linkTitleStyle])}>
            {attachments?.attachmentMeta?.ogTags?.title}
          </Text>
          {/* preview description */}
          <Text
            style={StyleSheet.flatten([
              styles.previewDescription,
              linkDescriptionStyle,
            ])}>
            {attachments?.attachmentMeta?.ogTags?.description}
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
            {attachments?.attachmentMeta?.ogTags?.url}
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
    borderColor: '#00000066',
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
    color: '#484F67',
    fontSize: 16,
    // fontFamily: STYLES.$FONT_FAMILY.MEDIUM
  },
  previewDescription: {
    color: '#484F6799',
    paddingVertical: 2,
    // fontFamily: STYLES.$FONT_FAMILY.REGULAR
  },
  previewLink: {
    color: '#484F6799',
    fontSize: 12,
    // fontFamily: STYLES.$FONT_FAMILY.REGULAR
  },
  previewDetailView: {
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
});

export default LMLinkPreview;
