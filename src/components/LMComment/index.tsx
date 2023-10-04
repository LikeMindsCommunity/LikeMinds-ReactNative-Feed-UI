import {View, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import LMText from '../../base/LMText';
import layout from '../../utils/layout';
import {LMCommentProps} from './types';
import LMButton from '../../base/LMButton';
import LMInputText from '../../base/LMInputText';
import {timeStamp} from '../../utils';
import LMIcon from '../../base/LMIcon';

const LMComment = ({
  likeIconButton,
  likeTextButton,
  comment,
  onTapViewMore,
  commentMaxLines,
  menuIcon,
}: LMCommentProps) => {
  const MAX_LINES = commentMaxLines ? commentMaxLines : 3;
  const [showText, setShowText] = useState(false);
  const [numberOfLines, setNumberOfLines] = useState<number>();
  const [showMoreButton, setShowMoreButton] = useState(false);
  const [showReplies, setShowReplies] = useState(false);
  const [showReplyInput, setShowReplyInput] = useState(false);
  const [repliesArray, setRepliesArray] = useState(comment.replies);

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

  // this handles the visiblity of whole comment content and trimmed text upto maximum line
  useEffect(() => {
    if (showMoreButton) {
      setNumberOfLines(showText ? undefined : MAX_LINES);
    }
  }, [showText, showMoreButton]);

  return (
    <View
      style={
        comment.level === 0 && {
          paddingHorizontal: 10,
          width: layout.window.width,
        }
      }>
      {/* commented user name */}
      <LMText text={'comment.user.name'} />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{width: '85%'}}>
          {/* comment content text */}
          <LMText
            text={comment.text}
            maxLines={numberOfLines}
            onTextLayout={e => onTextLayout(e)}
          />
          {/* show more button section */}
          {showMoreButton && (
            <TouchableOpacity
              disabled={showText ? true : false}
              onPress={() => setShowText(showText => !showText)}
              accessibilityRole="button">
              <LMText text={showText ? '' : 'See More'} />
            </TouchableOpacity>
          )}
        </View>
        {/* menu icon */}
        <LMButton
          onTap={() => menuIcon?.onTap()}
          icon={{
            assetPath: menuIcon?.icon?.assetPath
              ? menuIcon.icon.assetPath
              : require('../../assets/images/three_dots3x.png'),
            type: 'png',
            iconUrl: menuIcon?.icon?.iconUrl,
          }}
          buttonStyle={{borderWidth: 0}}
        />
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={styles.alignRow}>
          {/* like icon */}
          <LMButton
            onTap={() => likeIconButton?.onTap}
            icon={{
              assetPath: likeIconButton?.icon?.assetPath
                ? likeIconButton.icon.assetPath
                : require('../../assets/images/heart_icon3x.png'),
              type: 'png',
              width: 18,
              height: 18,
              iconUrl: likeIconButton?.icon?.iconUrl,
            }}
            buttonStyle={{borderWidth: 0}}
          />
          {/* like text */}
          <LMButton
            onTap={() => likeTextButton?.onTap()}
            text={{
              text: comment.likesCount > 1 ? `${comment.likesCount} Likes` : `${comment.likesCount} Like`,
              textStyle: {fontSize: 13, marginLeft: 5},
            }}
            buttonStyle={{borderWidth: 0}}
          />
          {/* reply section */}
          {comment.level === 0 && (
            <>
              <LMText text=" | " />
              {/* this opens the input text to reply */}
              <LMButton
                text={{text: 'Reply', textStyle: {fontSize: 13}}}
                onTap={() => {
                  setShowReplyInput(!showReplyInput), setShowReplies(true);
                }}
                buttonStyle={{borderWidth: 0}}
              />

              {/* this shows all the replies of a comment */}
              {comment.repliesCount > 0 && (
                <>
                  <LMIcon
                    assetPath={require('../../assets/images/single_dot3x.png')}
                    type="png"
                    iconStyle={{width: 5, height: 5, marginHorizontal: 5}}
                  />
                  <LMButton
                    onTap={() => {
                      setShowReplies(!showReplies);
                      if (showReplyInput) {
                        setShowReplyInput(false);
                      }
                    }}
                    text={{text: comment.repliesCount > 1 ? `${comment.replies} Replies` : `${comment.replies} Reply`, textStyle: {fontSize: 13}}}
                    buttonStyle={{borderWidth: 0}}
                  />
                </>
              )}
            </>
          )}
        </View>
        {/* posted time stamp */}
        <LMText text={`${timeStamp(Number(comment.createdAt))}`} />
      </View>
      {/* text input field for reply */}
      {showReplyInput && (
        <LMInputText
          placeholderText="Reply"
          inputTextStyle={{
            marginLeft: 30,
            borderBottomWidth: 1,
            borderBottomColor: 'grey',
          }}
        />
      )}
      {/* replies section */}
      {(showReplies || showReplyInput) && (
        <View style={{marginLeft: 30}}>
          <FlatList
            data={repliesArray}
            renderItem={({item}) => {
              return <LMComment comment={item} />;
            }}
            ListFooterComponent={
              <LMButton
                onTap={() => onTapViewMore}
                text={{text: 'View more replies'}}
                buttonStyle={{
                  borderWidth: 0,
                  alignSelf: 'flex-start',
                  marginLeft: 30,
                }}
              />
            }
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  iconSize: {
    width: layout.normalize(22),
    height: layout.normalize(22),
    resizeMode: 'contain',
  },
  alignRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default LMComment;
