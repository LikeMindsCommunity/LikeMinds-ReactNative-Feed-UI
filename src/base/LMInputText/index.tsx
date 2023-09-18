import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import {LMInputTextProps} from './types';

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
        placeholderTextColor ? placeholderTextColor : '#000000'
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
    backgroundColor: '#ffffff',
    paddingVertical: 10,
    fontSize: 14,
    marginTop: 100,
    fontFamily: 'Arial',
    color: '#000000',
  },
});

export default LMInputText;
