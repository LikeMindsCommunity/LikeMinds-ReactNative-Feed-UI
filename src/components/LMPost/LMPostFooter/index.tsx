import {View, StyleSheet} from 'react-native';
import React from 'react';
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
  return (
    <View style={StyleSheet.flatten([styles.postFooter, footerBoxStyle])}>
      {/* like and comment view */}
      <View style={styles.alignRow}>
        {/* like section */}
        <View style={styles.alignRow}>
          {/* like icon button */}
          <LMButton
            onTap={likeIconButton?.onTap ? likeIconButton.onTap : () => {}}
            text={likeIconButton?.text}
            icon={{
              assetPath: likeIconButton?.icon?.assetPath
                ? likeIconButton.icon.assetPath
                : require('../../../assets/images/heart_icon3x.png'),
              type: 'png',
              iconUrl: likeIconButton?.icon?.iconUrl,
              iconStyle: likeIconButton?.icon?.iconStyle,
              color: likeIconButton?.icon?.color,
              height: likeIconButton?.icon?.height,
              width: likeIconButton?.icon?.width,
              boxFit: likeIconButton?.icon?.boxFit,
              boxStyle: likeIconButton?.icon?.boxStyle,
            }}
            placement={likeIconButton?.placement}
            isActive={
              likeIconButton?.isActive ? likeIconButton.isActive : isLiked
            }
            activeIcon={{
              assetPath: likeIconButton?.activeIcon?.assetPath
                ? likeIconButton.activeIcon.assetPath
                : require('../../../assets/images/heart_red_icon3x.png'),
              type: 'png',
              iconUrl: likeIconButton?.activeIcon?.iconUrl,
              iconStyle: likeIconButton?.activeIcon?.iconStyle,
              color: likeIconButton?.activeIcon?.color,
              height: likeIconButton?.activeIcon?.height,
              width: likeIconButton?.activeIcon?.width,
              boxFit: likeIconButton?.activeIcon?.boxFit,
              boxStyle: likeIconButton?.activeIcon?.boxStyle,
            }}
            activeText={likeIconButton?.activeText}
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
              text: likesCount
                ? likesCount > 1
                  ? `${likesCount} Likes`
                  : `${likesCount} Like`
                : 'Like',
              textStyle: likeTextButton?.text?.textStyle,
            }}
            icon={likeTextButton?.icon}
            placement={likeTextButton?.placement}
            isActive={likeTextButton?.isActive}
            activeIcon={likeTextButton?.activeIcon}
            activeText={likeTextButton?.activeText}
            buttonStyle={
              likeTextButton?.buttonStyle
                ? likeTextButton.buttonStyle
                : {
                    borderWidth: 0,
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
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
              textStyle: commentButton?.text?.textStyle,
            }}
            icon={{
              assetPath: commentButton?.icon?.assetPath
                ? commentButton.icon.assetPath
                : require('../../../assets/images/comment_icon3x.png'),
              type: 'png',
              iconUrl: commentButton?.icon?.iconUrl,
              iconStyle: commentButton?.icon?.iconStyle,
              color: commentButton?.icon?.color,
              height: commentButton?.icon?.height,
              width: commentButton?.icon?.width,
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
                    justifyContent: 'space-evenly',
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
              height: saveButton?.icon?.height,
              width: saveButton?.icon?.width,
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
              height: saveButton?.activeIcon?.height,
              width: saveButton?.activeIcon?.width,
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
              height: shareButton?.icon?.height,
              width: shareButton?.icon?.width,
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
