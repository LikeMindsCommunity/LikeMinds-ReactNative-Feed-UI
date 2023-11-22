import {View, Text, Image} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {LMHeaderProps} from './types';

const LMHeader = ({
  heading,
  rightComponent,
  showBackArrow,
  onBackPress,
  subHeading,
}: LMHeaderProps) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        borderBottomColor: '#00000011',
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        paddingHorizontal: 15,
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 60,
      }}>
      {showBackArrow && (
        <TouchableOpacity
          activeOpacity={0.8}
          hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
          onPress={onBackPress}>
          <Image
            source={require('../../assets/images/backArrow_icon3x.png')}
            style={{width: 25, height: 25}}
          />
        </TouchableOpacity>
      )}
      <Text
        style={{
          fontSize: 16,
          color: '#222020',
          fontWeight: '400',
          marginLeft: 8,
          flex: 1,
        }}>
        {heading}
        {subHeading && (
          <>
            {`\n`}
            <Text style={{fontSize: 12, color: '#666666'}}>{subHeading}</Text>
          </>
        )}
      </Text>
      {rightComponent}
    </View>
  );
};

export default LMHeader;
