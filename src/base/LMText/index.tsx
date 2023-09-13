import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {LMTextProps} from './types';

const LMText = ({text, maxLines, textStyle, selectable}: LMTextProps) => {
  return (
    // this renders the text component
    <Text
      selectable={selectable ? selectable : true} // default selectable value is true
      numberOfLines={maxLines}
      style={StyleSheet.flatten([defaultStyles.textStyle, textStyle])}>
      {text}
    </Text>
  );
};

// default text style
const defaultStyles = StyleSheet.create({
  textStyle: {
    color: '#000000',
    fontSize: 35,
    fontFamily: 'Arial',
    textAlign: 'auto',
    fontStyle: 'normal',
  },
});

export default LMText;
