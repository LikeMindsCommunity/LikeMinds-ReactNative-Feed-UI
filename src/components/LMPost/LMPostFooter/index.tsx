import {View, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import STYLES from '../../../constants/constants';
import layout from '../../../utils/layout';
import LMButton from '../../../base/LMButton';
import {LMPostFooterProps} from './types';

const LMPostFooter = ({
  isLiked,
  isSaved,
  likesCount,
  commentsCount,
  showBookMarkIcon,
  showShareIcon,
  likeIconButton,
  likeTextButton,
  commentButton,
  saveButton,
  shareButton,
  footerBoxStyle,
}: LMPostFooterProps) => {
  const [liked, setLiked] = useState(isLiked);
  const [likeCount, setLikeCount] = useState(likesCount);
  // handling like state and likes count locally
  const likesCountHandler = () => {
    likeIconButton?.onTap();
    setLiked(!liked);
    if (liked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
  };
  return (
    <View style={StyleSheet.flatten([styles.postFooter, footerBoxStyle])}>
      {/* like and comment view */}
      <View style={styles.alignRow}>
        {/* like section */}
        <View style={styles.alignRow}>
          {/* like icon button */}
          <LMButton
            onTap={likesCountHandler}
            icon={{
              assetPath: likeIconButton?.icon?.assetPath
                ? likeIconButton.icon.assetPath
                : require('../../../assets/images/heart_icon3x.png'),
              type: 'png',
              iconUrl: likeIconButton?.icon?.iconUrl,
              iconStyle: likeIconButton?.icon?.iconStyle,
              color: likeIconButton?.icon?.color,
              height: likeIconButton?.icon?.height
                ? likeIconButton.icon.height
                : 20.5,
              width: likeIconButton?.icon?.width
                ? likeIconButton.icon.width
                : 20.5,
              boxFit: likeIconButton?.icon?.boxFit,
              boxStyle: likeIconButton?.icon?.boxStyle,
            }}
            placement={likeIconButton?.placement}
            isActive={
              likeIconButton?.isActive ? likeIconButton.isActive : liked
            }
            activeIcon={{
              assetPath: likeIconButton?.activeIcon?.assetPath
                ? likeIconButton.activeIcon.assetPath
                : require('../../../assets/images/heart_red_icon3x.png'),
              type: 'png',
              iconUrl: likeIconButton?.activeIcon?.iconUrl,
              iconStyle: likeIconButton?.activeIcon?.iconStyle,
              color: likeIconButton?.activeIcon?.color,
              height: likeIconButton?.activeIcon?.height
                ? likeIconButton.activeIcon.height
                : 20.5,
              width: likeIconButton?.activeIcon?.width
                ? likeIconButton.activeIcon.width
                : 20.5,
              boxFit: likeIconButton?.activeIcon?.boxFit,
              boxStyle: likeIconButton?.activeIcon?.boxStyle,
            }}
            buttonStyle={
              likeIconButton?.buttonStyle
                ? likeIconButton.buttonStyle
                : {
                    borderWidth: 0,
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                  }
            }
          />
          {/* like text button */}
          <LMButton
            onTap={likeTextButton?.onTap ? likeTextButton.onTap : () => {}}
            text={{
              text: likeCount
                ? likeCount > 1
                  ? `${likeCount} Likes`
                  : `${likeCount} Like`
                : 'Like',
              textStyle: likeTextButton?.text?.textStyle
                ? likeTextButton.text.textStyle
                : {
                    fontSize: 14.5,
                    fontWeight: '400',
                    color: '#504B4B',
                  },
            }}
            placement={likeTextButton?.placement}
            isActive={likeTextButton?.isActive}
            activeText={likeTextButton?.activeText}
            buttonStyle={
              likeTextButton?.buttonStyle
                ? likeTextButton.buttonStyle
                : {
                    borderWidth: 0,
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                    marginLeft: 7,
                  }
            }
          />
        </View>

        {/* comment section */}
        <View style={StyleSheet.flatten([styles.alignRow, {marginLeft: 20}])}>
          <LMButton
            onTap={commentButton?.onTap ? commentButton.onTap : () => {}}
            text={{
              text:
                commentsCount > 0
                  ? commentsCount > 1
                    ? `${commentsCount} Comments`
                    : `${commentsCount} Comment`
                  : `Add Comment`,
              textStyle: commentButton?.text?.textStyle
                ? commentButton.text.textStyle
                : {
                    marginLeft: 5,
                    fontSize: 14.5,
                    fontWeight: '400',
                    color: '#504B4B',
                  },
            }}
            icon={{
              assetPath: commentButton?.icon?.assetPath
                ? commentButton.icon.assetPath
                : require('../../../assets/images/comment_icon3x.png'),
              type: 'png',
              iconUrl: commentButton?.icon?.iconUrl,
              iconStyle: commentButton?.icon?.iconStyle,
              color: commentButton?.icon?.color,
              height: commentButton?.icon?.height
                ? commentButton.icon.height
                : 20,
              width: commentButton?.icon?.width ? commentButton.icon.width : 20,
              boxFit: commentButton?.icon?.boxFit,
              boxStyle: commentButton?.icon?.boxStyle,
            }}
            placement={commentButton?.placement}
            isActive={commentButton?.isActive}
            activeIcon={commentButton?.activeIcon}
            activeText={commentButton?.activeText}
            buttonStyle={
              commentButton?.buttonStyle
                ? commentButton.buttonStyle
                : {
                    borderWidth: 0,
                    alignItems: 'center',
                  }
            }
          />
        </View>
      </View>

      {/* save and share view */}
      <View
        style={StyleSheet.flatten([
          styles.alignRow,
          showBookMarkIcon &&
            showShareIcon && {width: '20%', justifyContent: 'space-between'},
        ])}>
        {/* save section */}
        {showBookMarkIcon && (
          <LMButton
            onTap={saveButton?.onTap ? saveButton.onTap : () => {}}
            text={saveButton?.text}
            icon={{
              assetPath: saveButton?.icon?.assetPath
                ? saveButton.icon.assetPath
                : require('../../../assets/images/bookmark_icon3x.png'),
              type: 'png',
              iconUrl: saveButton?.icon?.iconUrl,
              iconStyle: saveButton?.icon?.iconStyle,
              color: saveButton?.icon?.color,
              height: saveButton?.icon?.height ? saveButton.icon.height : 18,
              width: saveButton?.icon?.width ? saveButton.icon.width : 18,
              boxFit: saveButton?.icon?.boxFit,
              boxStyle: saveButton?.icon?.boxStyle,
            }}
            placement={saveButton?.placement}
            isActive={saveButton?.isActive ? saveButton.isActive : isSaved}
            activeIcon={{
              assetPath: saveButton?.activeIcon?.assetPath
                ? saveButton.activeIcon.assetPath
                : require('../../../assets/images/saved_bookmark_icon3x.png'),
              type: 'png',
              iconUrl: saveButton?.activeIcon?.iconUrl,
              iconStyle: saveButton?.activeIcon?.iconStyle,
              color: saveButton?.activeIcon?.color,
              height: saveButton?.activeIcon?.height
                ? saveButton.activeIcon.height
                : 18,
              width: saveButton?.activeIcon?.width
                ? saveButton.activeIcon.width
                : 18,
              boxFit: saveButton?.activeIcon?.boxFit,
              boxStyle: saveButton?.activeIcon?.boxStyle,
            }}
            activeText={saveButton?.activeText}
            buttonStyle={
              saveButton?.buttonStyle
                ? saveButton.buttonStyle
                : {borderWidth: 0}
            }
          />
        )}

        {/* share section */}
        {showShareIcon && (
          <LMButton
            onTap={shareButton?.onTap ? shareButton.onTap : () => {}}
            text={shareButton?.text}
            icon={{
              assetPath: shareButton?.icon?.assetPath
                ? shareButton.icon.assetPath
                : require('../../../assets/images/share_icon3x.png'),
              type: 'png',
              iconUrl: shareButton?.icon?.iconUrl,
              iconStyle: shareButton?.icon?.iconStyle,
              color: shareButton?.icon?.color,
              height: shareButton?.icon?.height ? shareButton.icon.height : 18,
              width: shareButton?.icon?.width ? shareButton.icon.width : 18,
              boxFit: shareButton?.icon?.boxFit,
              boxStyle: shareButton?.icon?.boxStyle,
            }}
            placement={shareButton?.placement}
            isActive={shareButton?.isActive}
            activeIcon={shareButton?.activeIcon}
            activeText={shareButton?.activeText}
            buttonStyle={
              shareButton?.buttonStyle
                ? shareButton.buttonStyle
                : {borderWidth: 0}
            }
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  postFooter: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  alignRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  postFooterText: {
    fontSize: 16,
    fontWeight: '400',
    color: STYLES.$COLORS.BLACK,
    marginLeft: 8,
  },
  likeIconSize: {
    width: layout.normalize(21),
    height: layout.normalize(21),
  },
  commentIconSize: {
    width: layout.normalize(21),
    height: layout.normalize(21),
  },
  iconSize: {
    width: layout.normalize(19),
    height: layout.normalize(19),
  },
});

export default LMPostFooter;
