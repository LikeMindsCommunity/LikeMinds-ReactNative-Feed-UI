import {View, TextInput, StyleSheet} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {LMInputTextProps} from './types';
import STYLES from '../../constants/constants';
import layout from '../../utils/layout';
import LMButton from '../LMButton';

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
  disabled,
  rightIcon,
  autoFocus,
}: LMInputTextProps) => {
  const textInputRef = useRef<TextInput>(null);

  // this handles the autoFocus of textinput
  useEffect(() => {
    if (autoFocus) {
      if (textInputRef.current) {
        textInputRef.current.focus();
      }
    }
  }, [autoFocus]);

  return (
    <View style={StyleSheet.flatten([defaultStyles.textInput, inputTextStyle])}>
      {/* text input */}
      <TextInput
        ref={textInputRef}
        onChangeText={enteredText => {
          onType ? onType(enteredText) : null;
        }}
        autoFocus={autoFocus}
        value={inputText}
        placeholderTextColor={
          placeholderTextColor ? placeholderTextColor : STYLES.$COLORS.BLACK
        }
        style={
          rightIcon
            ? defaultStyles.textInputWithRightIcon
            : defaultStyles.textInputWithoutRightIcon
        }
        placeholder={placeholderText}
        autoCapitalize={autoCapitalize ? autoCapitalize : 'none'}
        keyboardType={keyboardType ? keyboardType : 'default'}
        multiline={multilineField ? multilineField : false}
        secureTextEntry={secureText ? secureText : false}
        editable={disabled ? disabled : true}
      />
      {/* icon on right of text input */}
      {rightIcon && (
        <LMButton
          {...rightIcon}
          onTap={rightIcon.onTap}
          text={rightIcon.text}
          icon={{
            type: 'png',
            assetPath: rightIcon.icon?.assetPath,
            ...rightIcon.icon,
          }}
          placement={rightIcon.placement}
          buttonStyle={defaultStyles.rightIconButton}
        />
      )}
    </View>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: layout.window.width,
  },
  textInputWithRightIcon: {
    width: '90%',
  },
  textInputWithoutRightIcon: {
    width: '100%',
  },
  rightIconButton: {
    borderWidth: 0,
  },
});

export default LMInputText;
