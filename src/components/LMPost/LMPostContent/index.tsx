import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {LMPostContentProps} from './types';
import STYLES from '../../../constants/constants';
import {MAX_DEFAULT_POST_CONTENT_LINES} from '../../../constants/strings';
import LMText from '../../../base/LMText';

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

  // this renders the attached link's urls
  const renderLinks = () => {
    return linkData?.map(item => {
      return (
        <>
          {item.attachmentMeta.ogTags.url && (
            <LMText
              key={item.attachmentMeta.ogTags.url}
              text={item.attachmentMeta.ogTags.url}
              textStyle={StyleSheet.flatten([styles.linkText, linkStyle])}
            />
          )}
        </>
      );
    });
  };

  return (
    <View style={StyleSheet.flatten([postContentViewStyle])}>
      {/* post content text */}
      <LMText
        text={text}
        maxLines={numberOfLines}
        textStyle={StyleSheet.flatten([styles.contentText, textStyle])}
        onTextLayout={e => onTextLayout(e)}
      />
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
          <LMText
            text={
              showText
                ? ''
                : showMoreText?.text
                ? showMoreText.text
                : 'Show More'
            }
            textStyle={StyleSheet.flatten([showMoreText?.textStyle])}
          />
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
