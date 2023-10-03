import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';
import LMProfilePicture from '../../base/LMProfilePicture';
import layout from '../../utils/layout';
import LMText from '../../base/LMText';
import {timeStamp} from '../../utils';
import STYLES from '../../constants/constants';
import {LMNotificationProps} from './types';

const LMNotification = ({
  activityText,
  activityDate,
  userProfilePicture,
  boxStyle,
  activityDateStyle,
  onMenuTap,
  onTap,
  menuIcon,
}: LMNotificationProps) => {
  return (
    <View style={StyleSheet.flatten([styles.container, boxStyle])}>
      <LMProfilePicture
        fallbackText={userProfilePicture?.fallbackText}
        imageUrl={userProfilePicture.imageUrl}
        fallbackTextStyle={userProfilePicture.fallbackTextStyle}
        fallbackTextBoxStyle={userProfilePicture.fallbackTextBoxStyle}
        size={userProfilePicture.size}
        profilePictureStyle={userProfilePicture.profilePictureStyle}
        onTap={userProfilePicture.onTap}
      />
      <TouchableOpacity onPress={onTap} style={{width: '75%',marginLeft:10}}>
        <LMText
          text={activityText.text.replace(/<<([^|]+)\|[^>]+>>/g, '$1')}
          textStyle={activityText.textStyle}
        />
        <Text style={StyleSheet.flatten([activityDateStyle])}>{`${timeStamp(
          Number(activityDate),
        )} ago`}</Text>
      </TouchableOpacity>
      {/* menu icon section */}
      <TouchableOpacity onPress={onMenuTap}>
        <>
          {menuIcon ? (
            menuIcon
          ) : (
            <Image
              source={require('../../assets/images/three_dots_vertical3x.png')}
              resizeMode="contain"
              style={styles.iconSize}
            />
          )}
        </>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding:10
  },
  iconSize: {
    width: layout.normalize(22),
    height: layout.normalize(22),
  },
  postedDetail: {
    color: STYLES.$COLORS.BLACK,
    fontSize: 14,
  },
});

export default LMNotification;
