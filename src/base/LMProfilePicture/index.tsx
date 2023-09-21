import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {LMProfilePictureProps} from './types';
import {getNameInitials} from '../../utils';

const LMProfilePicture = ({
  fallbackText,
  imageUrl,
  size,
  onTap,
  fallbackTextStyle,
  fallbackTextBoxStyle,
  profilePictureStyle,
}: LMProfilePictureProps) => {
  return (
    <TouchableOpacity
      disabled={onTap ? false : true}
      onPress={() => (onTap ? onTap() : null)}>
      {imageUrl ? (
        // this renders the avatar image
        <Image
          source={{uri: imageUrl}}
          style={StyleSheet.flatten([
            defaultStyles.avatarView,
            profilePictureStyle,
            {
              width: size ? size : defaultStyles.avatarView.width,
              height: size ? size : defaultStyles.avatarView.height,
              resizeMode:'cover'
            },
          ])}
        />
      ) : (
        // this renders the initial characters of the name in avatar view
        <View
          style={StyleSheet.flatten([
            defaultStyles.avatarView,
            fallbackTextBoxStyle,
            {
              width: size ? size : defaultStyles.avatarView.width,
              height: size ? size : defaultStyles.avatarView.height,
            },
          ])}>
          <Text
            style={StyleSheet.flatten([
              defaultStyles.nameInitialText,
              fallbackTextStyle,
            ])}>
            {/* this function returns the initial characters of the string passed */}
            {getNameInitials(fallbackText)}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const defaultStyles = StyleSheet.create({
  avatarView: {
    width: 48,
    height: 48,
    borderRadius: 25,
    justifyContent: 'center',
    backgroundColor: '#5046E5',
    alignItems: 'center',
    resizeMode: 'contain',
  },
  nameInitialText: {
    color: '#ffffff',
    fontWeight: '500',
    fontSize: 16,
    fontFamily: 'Arial',
  },
});

export default LMProfilePicture;
