import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import LMProfilePicture from '../../base/LMProfilePicture';
import LMText from '../../base/LMText';
import layout from '../../utils/layout';
import {LMMemberListProps} from './types';
import STYLES from '../../constants/constants'

const LMMemberList = ({
  memberProfilePicture,
  memberName,
  memberTitle,
  boxStyle,
}: LMMemberListProps) => {
  return (
    <View style={StyleSheet.flatten([styles.container, boxStyle])}>
      {/* avatar view */}
      <LMProfilePicture
        fallbackText={memberProfilePicture.fallbackText}
        fallbackTextBoxStyle={memberProfilePicture.fallbackTextBoxStyle}
        fallbackTextStyle={memberProfilePicture.fallbackTextStyle}
        size={memberProfilePicture.size ? memberProfilePicture.size : 50}
        onTap={memberProfilePicture.onTap}
        imageUrl={memberProfilePicture.imageUrl}
        profilePictureStyle={memberProfilePicture.profilePictureStyle}
      />
      {/* member name */}
      <LMText
        text={memberName.text}
        textStyle={StyleSheet.flatten([styles.memberName, memberName.textStyle])}
        selectable={memberName.selectable}
        maxLines={memberName.maxLines}
      />
      {/* member title */}
      {memberTitle?.text && (
        <>
          <Image
            source={require('../../assets/images/single_dot3x.png')}
            resizeMode={'contain'}
            style={styles.dotImageSize}
          />
          <LMText
            text={memberTitle.text}
            textStyle={StyleSheet.flatten([styles.memberTitleText, memberTitle.textStyle])}
            selectable={memberTitle.selectable}
            maxLines={memberTitle.maxLines}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal:10,
    paddingVertical:12
  },
  dotImageSize: {
    width: layout.normalize(6),
    height: layout.normalize(6),
    marginHorizontal: 5,
  },
  memberName:{
    fontWeight:'500',
    fontSize:16,
    marginLeft:10
  },
  memberTitleText:{
    color: STYLES.$COLORS.THEME,
    fontWeight:'400',
    fontSize:14
  }
});

export default LMMemberList;
