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
  onTap,
}: LMMemberListItemProps) => {
  //creating profile picture props as per customization
  const updatedProfilePictureProps = profilePictureProps
    ? profilePictureProps
    : {
        fallbackText: user.name,
        size: 50,
        imageUrl: user.imageUrl,
      };
  //creating user name props as per customization
  const updatedNameProps = nameProps
    ? nameProps
    : {
        text: user.name,
      };
  //creating custom title props as per customization
  const updatedCustomTitleProps = customTitleProps
    ? customTitleProps
    : {
        text: user.customTitle,
      };

  return (
    <TouchableOpacity onPress={() => (onTap ? onTap(user) : null)}>
      <View style={StyleSheet.flatten([styles.container, boxStyle])}>
        {/* avatar view */}
        <LMProfilePicture {...updatedProfilePictureProps} />
        {/* member name */}
        <LMText
          {...updatedNameProps}
          textStyle={StyleSheet.flatten([
            styles.memberName,
            nameProps?.textStyle,
          ])}
        />
        {/* member title */}
        {user.customTitle && (
          <>
            <LMIcon
              assetPath={require('../../assets/images/single_dot3x.png')}
              type="png"
              width={styles.dotImageSize.width}
              height={styles.dotImageSize.height}
              iconStyle={styles.dotImageSize}
            />
            <LMText
              {...updatedCustomTitleProps}
              textStyle={StyleSheet.flatten([
                styles.memberTitleText,
                customTitleProps?.textStyle,
              ])}
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
    resizeMode: 'contain',
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
