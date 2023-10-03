import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import LMProfilePicture from '../../base/LMProfilePicture';
import LMText from '../../base/LMText';
import layout from '../../utils/layout';
import {LMMemberListItemProps} from './types';
import STYLES from '../../constants/constants';
import LMIcon from '../../base/LMIcon';

const LMMemberListItem = ({
  user,
  profilePictureProps,
  nameProps,
  customTitleProps,
  boxStyle,
  onTap
}: LMMemberListItemProps) => {
  return (
    <TouchableOpacity onPress={() => onTap(user)}>
    <View style={StyleSheet.flatten([styles.container, boxStyle])}>
      {/* avatar view */}
      <LMProfilePicture
        fallbackText={profilePictureProps.fallbackText}
        fallbackTextBoxStyle={profilePictureProps.fallbackTextBoxStyle}
        fallbackTextStyle={profilePictureProps.fallbackTextStyle}
        size={profilePictureProps.size ? profilePictureProps.size : 50}
        onTap={profilePictureProps.onTap}
        imageUrl={profilePictureProps.imageUrl}
        profilePictureStyle={profilePictureProps.profilePictureStyle}
      />
      {/* member name */}
      <LMText
        text={nameProps.text}
        textStyle={StyleSheet.flatten([styles.memberName, nameProps.textStyle])}
        selectable={nameProps.selectable}
        maxLines={nameProps.maxLines}
      />
      {/* member title */}
      {customTitleProps?.text && (
        <>
          <LMIcon
            assetPath={require('../../assets/images/single_dot3x.png')}
            type="png"
            iconStyle={styles.dotImageSize}
          />
          <LMText
            text={customTitleProps.text}
            textStyle={StyleSheet.flatten([
              styles.memberTitleText,
              customTitleProps.textStyle,
            ])}
            selectable={customTitleProps.selectable}
            maxLines={customTitleProps.maxLines}
          />
        </>
      )}
    </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 12,
  },
  dotImageSize: {
    width: layout.normalize(6),
    height: layout.normalize(6),
    marginHorizontal: 5,
    resizeMode:'contain'
  },
  memberName: {
    fontWeight: '500',
    fontSize: 16,
    marginLeft: 10,
  },
  memberTitleText: {
    color: STYLES.$COLORS.THEME,
    fontWeight: '400',
    fontSize: 14,
  },
});

export default LMMemberListItem;
