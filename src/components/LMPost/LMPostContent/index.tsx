import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import React, {useEffect, useState} from 'react';
import { LMPostContentProps } from './types';
import STYLES from '../../../constants/constants'

const LMPostContent = ({text, linkData, textStyle, linkStyle, visibleLines, showMoreTextStyle, postContentViewStyle}: LMPostContentProps) => {
  const [showMoreVisible, setShowMoreVisible] = useState(false);
  const [numberOfLine, setNumOfLine] = useState(0);
  // this handles the visibility of show more button
  useEffect(() => {
    setShowMoreVisible(false);
    // this checks the condition if the text takes more than given visible lines or have more than 500 characters
    if (
      (Dimensions.get('screen').width * (visibleLines ? (visibleLines-1) : 2)) / 6.71 < text?.length ||
      text?.length > 500
    ) {
      setNumOfLine(visibleLines? visibleLines : 3);
      setShowMoreVisible(true);
    } else {
      setShowMoreVisible(false);
    }
  }, [text]);

  return (
    <View style={StyleSheet.flatten([postContentViewStyle])}>
      <Text
        numberOfLines={numberOfLine}
        style={StyleSheet.flatten([styles.contentText, textStyle])}>
        {showMoreVisible ? text?.substring(0, 500) : text}
      </Text>
      {/* link urls section */}
      {
        showMoreVisible ? null : 
        linkData?.map((item) =>{
          return(
            <Text style={StyleSheet.flatten([styles.linkText,linkStyle])} key={item.attachmentMeta.ogTags.url}>{item.attachmentMeta.ogTags.url}</Text>
          )
        })
      }
      {/* show more button section */}
      {showMoreVisible && (
        <TouchableOpacity
          onPress={() => {
            setShowMoreVisible(false);
            setNumOfLine(0);
          }}>
          <Text style={StyleSheet.flatten([showMoreTextStyle])}>
            Show more
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};


const styles = StyleSheet.create({
  contentText:{
      fontSize: 16,
      color: STYLES.$COLORS.TEXT_COLOR,
  },
  linkText:{
      color:'#007AFF',
  }
});

export default LMPostContent;
