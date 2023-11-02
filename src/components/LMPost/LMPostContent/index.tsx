import {Linking, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {LMPostContentProps} from './types';
import {MAX_DEFAULT_POST_CONTENT_LINES} from '../../../constants/strings';
import LMText from '../../../base/LMText';
import { DETECT_LINK_REGEX } from '../../../constants/regex';

const LMPostContent = ({
  text,
  linkData,
  textStyle,
  linkStyle,
  visibleLines,
  showMoreText,
  postContentViewStyle,
}: LMPostContentProps) => {
  const MAX_LINES = visibleLines
    ? visibleLines
    : MAX_DEFAULT_POST_CONTENT_LINES;
  const [showText, setShowText] = useState(false);
  const [numberOfLines, setNumberOfLines] = useState<number>();
  const [showMoreButton, setShowMoreButton] = useState(false);

  // this handles the show more functionality
  const onTextLayout = useCallback(
    (e: any) => {
      if (e.nativeEvent.lines.length > MAX_LINES && !showText) {
        setShowMoreButton(true);
        setNumberOfLines(MAX_LINES);
      }
    },
    [showText],
  );

  // this handles the visiblity of whole post content and trimmed text upto maximum line
  useEffect(() => {
    if (showMoreButton) {
      setNumberOfLines(showText ? undefined : MAX_LINES);
    }
  }, [showText, showMoreButton]);

  
  // this renders the text with highlighted link's urls
  const highlightLinks = (text: string) => {
    const regex = DETECT_LINK_REGEX;
    const parts = text.replace(/\n/g, ' \n').split(' ');

    return parts?.map((part, index) => {
      if (regex.test(part.trim())) {
        return (
          <Text
            key={index}
            style={StyleSheet.flatten([styles.linkText, linkStyle])}
            onPress={() => Linking.openURL(part.includes('https://') ? part : `https://${part}`)}>
            {part}{" "}
          </Text>
        );
      } else {
        return (
          <LMText
            textStyle={StyleSheet.flatten([styles.contentText, textStyle])}
            key={index}
            text={`${part}${' '}`}
          />
        );
      }
    });
  };

  return (
    <View
      style={StyleSheet.flatten([
        postContentViewStyle,
        {paddingHorizontal: 16, paddingTop: 15},
      ])}>
      {/* post content text */}
      <Text
        numberOfLines={numberOfLines}
        key={Math.random()}
        onTextLayout={e => onTextLayout(e)}>
        {highlightLinks(text)}
      </Text>
      {/* show more button section */}
      {showMoreButton && (
        <TouchableOpacity activeOpacity={0.8} hitSlop={{top:10, bottom:10, left:10, right:10}}
          disabled={showText ? true : false}
          onPress={() => setShowText(showText => !showText)}
          accessibilityRole="button">
          <LMText
            text={
              showText
                ? ''
                : showMoreText?.text
                ? showMoreText.text
                : 'See More'
            }
            textStyle={StyleSheet.flatten([styles.showMoreText,showMoreText?.textStyle])}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  contentText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#666666',
    lineHeight: 20,
  },
  linkText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#007AFF',
    lineHeight: 20,
  },
  showMoreText: {
    color: '#9B9B9B'
  }
});

export default LMPostContent;
