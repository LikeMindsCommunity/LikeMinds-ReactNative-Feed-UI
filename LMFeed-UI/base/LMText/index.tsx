import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {LMTextProps} from './types';
import STYLES from '../../constants/constants';
import decode from '../../utils/decodeMentions';

const LMText = ({
  text,
  maxLines,
  textStyle,
  selectable,
  onTextLayout,
}: LMTextProps) => {
  return (
    // this renders the text component
    <Text
      selectable={selectable ? selectable : true} // default selectable value is true
      numberOfLines={maxLines}
      onTextLayout={onTextLayout}
      style={StyleSheet.flatten([defaultStyles.textStyle, textStyle])}>
      {decode(text, true)}
    </Text>
  );
};

// default text style
const defaultStyles = StyleSheet.create({
  textStyle: {
    color: STYLES.$COLORS.TEXT_COLOR,
    fontSize: 14,
    fontFamily: 'Arial',
    textAlign: 'auto',
    fontStyle: 'normal',
  },
});

export default LMText;
