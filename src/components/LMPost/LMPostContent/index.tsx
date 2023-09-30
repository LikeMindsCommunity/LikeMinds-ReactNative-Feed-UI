import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {LMPostContentProps} from './types';
import STYLES from '../../../constants/constants';
import {MAX_DEFAULT_POST_CONTENT_LINES} from '../../../constants/strings';

const LMPostContent = ({
  text,
  linkData,
  textStyle,
  linkStyle,
  visibleLines,
  showMoreTextStyle,
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

  // this renders the attached link's urls
  const renderLinks = () => {
    return linkData?.map(item => {
      return (
        <Text
          style={StyleSheet.flatten([styles.linkText, linkStyle])}
          key={item.attachmentMeta.ogTags.url}>
          {item.attachmentMeta.ogTags.url}
        </Text>
      );
    });
  };

  return (
    <View style={StyleSheet.flatten([postContentViewStyle])}>
      {/* post content text */}
      <Text
        style={StyleSheet.flatten([styles.contentText, textStyle])}
        onTextLayout={onTextLayout}
        numberOfLines={numberOfLines}>
        {text}
      </Text>
      {/* link urls section */}
      {showMoreButton ? (
        showText ? (
          <>{renderLinks()}</>
        ) : null
      ) : (
        <>{renderLinks()}</>
      )}
      {/* show more button section */}
      {showMoreButton && (
        <TouchableOpacity
          disabled={showText ? true : false}
          onPress={() => setShowText(showText => !showText)}
          accessibilityRole="button">
          <Text style={StyleSheet.flatten([showMoreTextStyle])}>
            {showText ? '' : 'Show More'}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  contentText: {
    fontSize: 15,
    color: STYLES.$COLORS.TEXT_COLOR,
  },
  linkText: {
    color: '#007AFF',
  },
});

export default LMPostContent;
