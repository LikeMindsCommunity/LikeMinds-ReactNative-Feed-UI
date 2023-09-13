import {Image, View, StyleSheet} from 'react-native';
import React from 'react';
import {LMIconProps} from './types';

const LMIcon = ({
  type,
  assetPath,
  color,
  size,
  boxStyle,
  iconStyle,
  boxFit,
}: LMIconProps) => {
  return (
    <>
      {/* this renders the png image */}
      {type === 'png' ? (
        <View style={boxStyle}>
          <Image
            source={{
              uri: assetPath,
            }}
            style={StyleSheet.flatten([
              iconStyle,
              {
                width: size ? size : defaultStyles.iconStyle.width,
                height: size ? size : defaultStyles.iconStyle.height,
                tintColor: color,
                resizeMode: boxFit
                  ? boxFit
                  : defaultStyles.iconStyle.resizeMode,
              },
            ])}
          />
        </View>
      ) : null}
    </>
  );
};

// default icon style
const defaultStyles = StyleSheet.create({
  iconStyle: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
});

export default LMIcon;
