import {View, Text, Image, StyleSheet, ActivityIndicator} from 'react-native';
import React, {useState} from 'react';
import {LMImageProps} from './types';
import LMLoader from '../../../base/LMLoader';
import layout from '../../../utils/layout';
import STYLES from '../../../constants/constants';
import {MEDIA_FETCH_ERROR} from '../../../constants/strings';

const LMImage = ({
  imageUrl,
  width,
  height,
  imageStyle,
  boxFit,
  boxStyle,
  aspectRatio,
  loaderWidget,
  errorWidget,
}: LMImageProps) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  return (
    <View style={StyleSheet.flatten([defaultStyles.imageContainer, boxStyle])}>
      {/* this renders the loader until the image renders */}
      {loading ? (
        <View style={[defaultStyles.imageStyle, defaultStyles.loaderView]}>
          {loaderWidget ? loaderWidget : <LMLoader />}
        </View>
      ) : null}
      {/* this renders the image */}
      <Image
        source={{uri: imageUrl}}
        onLoad={() => setLoading(false)}
        onError={() => setError(true)}
        style={StyleSheet.flatten([
          imageStyle,
          {
            width: width ? width : defaultStyles.imageStyle.width,
            height: height ? height : defaultStyles.imageStyle.height,
            resizeMode: boxFit ? boxFit : defaultStyles.imageStyle.resizeMode,
            aspectRatio: aspectRatio ? aspectRatio : undefined,
          },
        ])}
      />
      {/* this renders the error whenever the media is not fetched */}
      {error ? (
        <View style={[defaultStyles.imageStyle, defaultStyles.errorView]}>
          {errorWidget ? (
            errorWidget
          ) : (
            <Text style={defaultStyles.errorText}>{MEDIA_FETCH_ERROR}</Text>
          )}
        </View>
      ) : null}
    </View>
  );
};

const defaultStyles = StyleSheet.create({
  imageStyle: {
    height: 325,
    width: layout.window.width,
    resizeMode: 'contain',
  },
  imageContainer: {
    backgroundColor: STYLES.$COLORS.BLACK,
    width: layout.window.width,
  },
  loaderView: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  errorView: {
    backgroundColor: STYLES.$COLORS.LIGHT_GREY,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  errorText: {
    color: STYLES.$COLORS.RED,
  },
});

export default LMImage;
