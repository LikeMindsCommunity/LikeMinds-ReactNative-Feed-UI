import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import React, {useState} from 'react';
import LMText from '../LMText';
import LMIcon from '../LMIcon';
import {LMButtonProps} from './types';

const LMButton = ({
  text,
  icon,
  onTap,
  placement,
  isActive,
  activeIcon,
  activeText,
  buttonStyle,
}: LMButtonProps) => {
  const [active, setActive] = useState(isActive);

  // this function handles the active state of the button
  const activeStateHandler = () => {
    if (isActive != undefined) {
      setActive(!active);
    }
  };
  return (
    <TouchableOpacity
      onPress={() => {
        onTap(), activeStateHandler();
      }}>
      {/* button view */}
      <View
        style={StyleSheet.flatten([
          defaultStyles.buttonViewStyle,
          buttonStyle,
          {flexDirection: placement === 'end' ? 'row-reverse' : 'row'},
        ])}>
        {/* icon view */}
        {icon ? (
          active ? (
            activeIcon ? (
              // this renders the icon in active state
              <LMIcon
                type={activeIcon.type}
                width={activeIcon.width}
                height={activeIcon.height}
                assetPath={activeIcon.assetPath}
                color={activeIcon.color}
                iconStyle={activeIcon.iconStyle}
                boxFit={activeIcon.boxFit}
                boxStyle={activeIcon.boxStyle}
              />
            ) : null
          ) : (
            // this renders the icon in inactive state
            <LMIcon
              type={icon.type}
              width={icon.width}
              height={icon.height}
              assetPath={icon.assetPath}
              color={icon.color}
              iconStyle={icon.iconStyle}
              boxFit={icon.boxFit}
              boxStyle={icon.boxStyle}
            />
          )
        ) : null}
        {/* text view */}
        {text ? (
          active ? (
            activeText ? (
              // this renders the text for active state
              <LMText
                text={activeText.text}
                textStyle={StyleSheet.flatten([
                  defaultStyles.buttonTextStyle,
                  activeText.textStyle,
                ])}
                maxLines={activeText.maxLines}
                selectable={activeText.selectable}
              />
            ) : null
          ) : (
            // this renders the text in inactive state
            <LMText
              text={text.text}
              textStyle={StyleSheet.flatten([
                defaultStyles.buttonTextStyle,
                text.textStyle,
              ])}
              maxLines={text.maxLines}
              selectable={text.selectable}
            />
          )
        ) : null}
      </View>
    </TouchableOpacity>
  );
};

// default button style
const defaultStyles = StyleSheet.create({
  buttonViewStyle: {
    width: 100,
    backgroundColor: '#ffffff',
    borderColor: '#000000',
    borderWidth: 2,
    justifyContent: 'center',
    paddingVertical: 5,
    borderRadius: 5,
  },
  buttonTextStyle: {
    fontSize: 16,
  },
});

export default LMButton;
