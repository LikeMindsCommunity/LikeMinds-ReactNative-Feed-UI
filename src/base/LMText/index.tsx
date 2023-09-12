import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {TextUI} from './types';

const LMText = ({text, maxLines, textStyle, selectable}: TextUI) => {
  return (
     // this renders the text component
    <Text
      selectable={selectable ? selectable : true} // default selectable value is true
      numberOfLines={maxLines}
      style={[defaultTextStyle.textStyle, textStyle]}>
      {text}
    </Text>
  );
};

// default text style
const defaultTextStyle = StyleSheet.create({
  textStyle: {
    color: '#000000',
    fontSize: 14,
    fontFamily: 'Arial',
    textAlign: 'auto',
    fontStyle:'normal'
  },
});

export default LMText;
