import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Linking,
} from 'react-native';
import React, {useState} from 'react';
import layout from '../../../utils/layout';
import {LMDocumentProps} from './types';
import LMIcon from '../../../base/LMIcon';
import STYLES from '../../../constants/constants';
import LMButton from '../../../base/LMButton';
import LMText from '../../../base/LMText';

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
  showCancel,
  onCancel,
  showMoreText=true
}: LMDocumentProps) => {
  function formatBytes(bytes: any, decimals = 2) {
    if (!+bytes) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
  }
  const [showFullList, setShowFullList] = useState(false);

  // Define the number of items to display initially
  const initialItemCount = 2;

  // Use data.slice to limit the items displayed
  const displayedData = showMoreText ?  showFullList
    ? attachments
    : attachments.slice(0, initialItemCount) : attachments;

  return (
    <View>
      {displayedData?.map((item, index) => (
        // document View
        <View key={Math.random()}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              Linking.openURL(
                item?.attachmentMeta?.url ? item?.attachmentMeta?.url : '',
              );
              onTap;
            }}
            key={index}
            style={styles.postMedia}>
            <View
              style={StyleSheet.flatten([styles.docView, documentViewStyle])}>
              {/* checks if there is any custom pdf icon is present or not */}
              {documentIcon ? (
                <LMIcon
                  type={documentIcon?.type}
                  iconUrl={documentIcon?.iconUrl}
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
              <View
                style={{
                  marginLeft: 12,
                  width: showCancel ? '72%' : '90%',
                  height: 36,
                }}>
                {/* document title */}
                <Text
                  ellipsizeMode="tail"
                  numberOfLines={1}
                  style={StyleSheet.flatten([
                    styles.docTitle,
                    documentTitleStyle,
                  ])}>
                  {item?.attachmentMeta?.name}
                </Text>
                <View style={styles.alignRow}>
                  {/* document page count text */}
                  {item?.attachmentMeta?.pageCount ? (
                    <>
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
                        {item?.attachmentMeta?.pageCount}
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
                    </>
                  ) : null}
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
                    {formatBytes(item.attachmentMeta.size)}
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
                    PDF
                  </Text>
                </View>
              </View>
              {/* this renders the cancel button */}
              {showCancel && (
                <LMButton
                  onTap={onCancel ? () => onCancel(index) : () => {}}
                  buttonStyle={{
                    marginLeft: 30,
                    borderWidth: 0,
                  }}
                  icon={{
                    assetPath: require('../../../assets/images/crossCircle_icon3x.png'),
                    type: 'png',
                    height: 22,
                    width: 22,
                  }}
                />
              )}
            </View>
          </TouchableOpacity>
        </View>
      ))}
      {showMoreText && attachments.length > 2 && !showFullList && (
        <TouchableOpacity
          activeOpacity={0.8}
          hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
          onPress={() => setShowFullList(true)}
          style={{paddingHorizontal: 15, marginTop: 8}}
          accessibilityRole="button">
          <LMText
            text={`+ ${attachments.length - 2} More`}
            textStyle={StyleSheet.flatten([styles.showMoreText])}
          />
        </TouchableOpacity>
      )}
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
    paddingHorizontal: 15,
    marginVertical: 5,
    height: 70,
    alignItems: 'center',
  },
  pdfIcon: {
    width: 28,
    height: 36,
  },
  alignRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  docTitle: {
    color: '#666666',
    fontSize: 16,
    fontWeight: '500',
  },
  docDetail: {
    color: '#666666',
    fontSize: 13,
  },
  dotImageSize: {
    width: layout.normalize(5),
    height: layout.normalize(5),
    marginHorizontal: 5,
    tintColor: '#666666',
  },
  showMoreText: {
    fontSize: 16,
    color: STYLES.$COLORS.THEME,
  },
});

export default LMDocument;
