import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Linking,
} from 'react-native';
import React from 'react';
import layout from '../../../utils/layout';
import {LMDocumentProps} from './types';
import LMIcon from '../../../base/LMIcon';
import STYLES from '../../../constants/constants'

const LMDocument = ({
  attachments,
  documentIcon,
  showPageCount,
  showDocumentFormat,
  showDocumentSize,
  onTap,
  documentTitleStyle,
  documentDetailStyle,
  documentViewStyle,
  defaultIconSize,
}: LMDocumentProps) => {
  return (
    <View>
      {attachments.map((item, index) => (
        // document View
        <TouchableOpacity
          onPress={() => {
            Linking.openURL(item?.attachmentMeta?.url);
            onTap;
          }}
          key={index}
          style={styles.postMedia}>
          <View style={StyleSheet.flatten([styles.docView, documentViewStyle])}>
            {/* checks if there is any custom pdf icon is present or not */}
            {documentIcon ? (
              <LMIcon
                type={documentIcon?.type}
                assetPath={documentIcon?.assetPath}
                iconStyle={documentIcon?.iconStyle}
                color={documentIcon?.color}
                height={documentIcon?.height}
                width={documentIcon?.width}
                boxFit={documentIcon?.boxFit}
                boxStyle={documentIcon?.boxStyle}
              />
            ) : (
              <Image
                source={require('../../../assets/images/pdf_icon3x.png')}
                resizeMode={'contain'}
                style={StyleSheet.flatten({
                  width: defaultIconSize
                    ? defaultIconSize
                    : styles.pdfIcon.width,
                  height: defaultIconSize
                    ? defaultIconSize
                    : styles.pdfIcon.height,
                })}
              />
            )}
            {/* document detail view */}
            <View style={{marginLeft: 5}}>
              {/* document title */}
              <Text
                style={StyleSheet.flatten([
                  styles.docTitle,
                  documentTitleStyle,
                ])}>
                {item?.attachmentMeta?.name}
              </Text>
              <View style={styles.alignRow}>
                {/* document page count text */}
                <Text
                  style={StyleSheet.flatten([
                    styles.docDetail,
                    documentDetailStyle,
                    {
                      display:
                      showPageCount != undefined
                      ? showPageCount
                      ? 'flex'
                      : 'none'
                      : 'flex',
                    },
                  ])}>
                    {/* // todo: remove static data */}
                  2 Pages
                </Text>
                <Image
                  source={require('../../../assets/images/single_dot3x.png')}
                  resizeMode={'contain'}
                  style={StyleSheet.flatten([
                    styles.dotImageSize,
                    {
                      display:
                        showPageCount != undefined
                          ? showPageCount &&
                            (showDocumentFormat || showDocumentSize)
                            ? 'flex'
                            : 'none'
                          : 'flex',
                    },
                  ])}
                />
                {/* document size text */}
                <Text
                  style={StyleSheet.flatten([
                    styles.docDetail,
                    documentDetailStyle,
                    {
                      display:
                        showDocumentSize != undefined
                          ? showDocumentSize
                            ? 'flex'
                            : 'none'
                          : 'flex',
                    },
                  ])}>
                     {/* // todo: remove static data */}
                  278 Kb
                </Text>
                <Image
                  source={require('../../../assets/images/single_dot3x.png')}
                  resizeMode={'contain'}
                  style={StyleSheet.flatten([
                    styles.dotImageSize,
                    {
                      display:
                        (showDocumentSize && showDocumentFormat) != undefined
                          ? showDocumentSize && showDocumentFormat
                            ? 'flex'
                            : 'none'
                          : 'flex',
                    },
                  ])}
                />
                {/* document format text */}
                <Text
                  style={StyleSheet.flatten([
                    styles.docDetail,
                    documentDetailStyle,
                    {
                      textTransform: 'uppercase',
                      display:
                        showDocumentFormat != undefined
                          ? showDocumentFormat
                            ? 'flex'
                            : 'none'
                          : 'flex',
                    },
                  ])}>
                  {item?.attachmentMeta?.format}
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  postMedia: {
    width: '100%',
  },
  docView: {
    flexDirection: 'row',
    borderColor: STYLES.$COLORS.LIGHT_GREY,
    borderWidth: 1,
    marginHorizontal: 15,
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 15,
    marginVertical: 5,
  },
  pdfIcon: {
    width: 50,
    height: 50,
  },
  alignRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  docTitle: {
    color: STYLES.$COLORS.TEXT_COLOR,
    fontSize: 18,
    fontWeight: '500',
  },
  docDetail: {
    color: STYLES.$COLORS.TEXT_COLOR,
    fontSize: 14,
  },
  dotImageSize: {
    width: layout.normalize(6),
    height: layout.normalize(6),
    marginHorizontal: 5,
  },
});

export default LMDocument;
