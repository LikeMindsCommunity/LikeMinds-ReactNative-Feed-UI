import {View, Text, Image, StyleSheet} from 'react-native';
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
    <View style={defaultStyles.headerViewStyle}>
      {showBackArrow && (
        <TouchableOpacity
          activeOpacity={0.8}
          hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
          onPress={onBackPress}>
          <Image
            source={require('../../assets/images/backArrow_icon3x.png')}
            style={defaultStyles.backArrowSize}
          />
        </TouchableOpacity>
      )}
      <Text style={defaultStyles.headingStyle}>
        {heading}
        {subHeading && (
          <>
            {'\n'}
            <Text style={defaultStyles.subHeadingStyle}>{subHeading}</Text>
          </>
        )}
      </Text>
      {rightComponent}
    </View>
  );
};

// default header style
const defaultStyles = StyleSheet.create({
  headerViewStyle: {
    flexDirection: 'row',
    borderBottomColor: '#00000011',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60,
  },
  backArrowSize: {width: 25, height: 25},
  headingStyle: {
    fontSize: 16,
    color: '#222020',
    fontWeight: '400',
    marginLeft: 8,
    flex: 1,
  },
  subHeadingStyle: {fontSize: 12, color: '#666666'},
});

export default LMHeader;
