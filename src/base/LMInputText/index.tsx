import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import {LMInputTextProps} from './types';
import STYLES from '../../constants/constants'

const LMInputText = ({
  inputText,
  onType,
  inputTextStyle,
  placeholderText,
  placeholderTextColor,
  autoCapitalize,
  keyboardType,
  multilineField,
  secureText,
  disabled
}: LMInputTextProps) => {
  return (
    <TextInput
      onChangeText={enteredText => {
        onType ? onType(enteredText) : null;
      }}
      style={StyleSheet.flatten([defaultStyles.textInput, inputTextStyle])}
      value={inputText}
      placeholderTextColor={
        placeholderTextColor ? placeholderTextColor : STYLES.$COLORS.BLACK
      }
      placeholder={placeholderText}
      autoCapitalize={autoCapitalize ? autoCapitalize : 'none'}
      keyboardType={keyboardType ? keyboardType : 'default'}
      multiline={multilineField ? multilineField : false}
      secureTextEntry={secureText ? secureText : false}
      editable={disabled ? disabled : true}
    />
  );
};

// default inputText style
const defaultStyles = StyleSheet.create({
  textInput: {
    margin: 10,
    shadowRadius: 5,
    elevation: 8,
    borderRadius: 10,
    backgroundColor: STYLES.$BACKGROUND_COLORS.LIGHT,
    paddingVertical: 10,
    fontSize: 14,
    color: STYLES.$COLORS.BLACK,
  },
});

export default LMInputText;
