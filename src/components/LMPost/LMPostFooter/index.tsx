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
            {likeIconButton && (
              <LMButton
                onTap={likeIconButton.onTap}
                text={likeIconButton.text}
                icon={
                  likeIconButton.icon
                    ? likeIconButton.icon
                    : {
                        assetPath: require('../../../assets/images/heart_icon3x.png'),
                        type: 'png',
                      }
                }
                placement={likeIconButton.placement}
                isActive={
                  likeIconButton.isActive ? likeIconButton.isActive : isLiked
                }
                activeIcon={
                  likeIconButton.activeIcon
                    ? likeIconButton.activeIcon
                    : {
                        assetPath: require('../../../assets/images/heart_red_icon3x.png'),
                        type: 'png',
                      }
                }
                activeText={likeIconButton.activeText}
                buttonStyle={
                  likeIconButton.buttonStyle
                    ? likeIconButton.buttonStyle
                    : {
                        borderWidth: 0,
                        alignItems: 'center',
                        justifyContent: 'space-evenly',
                      }
                }
              />
            )}
          {/* like text button */}
          {likeTextButton && (
            <LMButton
              onTap={likeTextButton.onTap}
              text={
                likeTextButton.text
                  ? likeTextButton.text
                  : {
                      text: likesCount
                        ? likesCount > 1
                          ? `${likesCount} Likes`
                          : `${likesCount} Like`
                        : 'Like',
                    }
              }
              icon={likeTextButton.icon}
              placement={likeTextButton.placement}
              isActive={likeTextButton.isActive}
              activeIcon={likeTextButton.activeIcon}
              activeText={likeTextButton.activeText}
              buttonStyle={
                likeTextButton.buttonStyle
                  ? likeTextButton.buttonStyle
                  : {
                      borderWidth: 0,
                      alignItems: 'center',
                      justifyContent: 'space-evenly',
                    }
              }
            />
          )}
        </View>

        {/* comment section */}
        <View style={StyleSheet.flatten([styles.alignRow, {marginLeft: 20}])}>
          {commentButton && (
            <LMButton
              onTap={commentButton.onTap}
              text={
                commentButton.text
                  ? commentButton.text
                  : {
                      text:
                        commentsCount > 0
                          ? commentsCount > 1
                            ? `${commentsCount} Comments`
                            : `${commentsCount} Comment`
                          : `Add Comment`,
                    }
              }
              icon={
                commentButton.icon
                  ? commentButton.icon
                  : {
                      assetPath: require('../../../assets/images/comment_icon3x.png'),
                      type: 'png',
                    }
              }
              placement={commentButton.placement}
              isActive={commentButton.isActive}
              activeIcon={commentButton.activeIcon}
              activeText={commentButton.activeText}
              buttonStyle={
                commentButton.buttonStyle
                  ? commentButton.buttonStyle
                  : {
                      borderWidth: 0,
                      alignItems: 'center',
                      justifyContent: 'space-evenly',
                    }
              }
            />
          )}
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
          <>
            {saveButton && (
              <LMButton
                onTap={saveButton.onTap}
                text={saveButton.text}
                icon={
                  saveButton.icon
                    ? saveButton.icon
                    : {
                        assetPath: require('../../../assets/images/bookmark_icon3x.png'),
                        type: 'png',
                      }
                }
                placement={saveButton.placement}
                isActive={saveButton.isActive ? saveButton.isActive : isSaved}
                activeIcon={
                  saveButton.activeIcon
                    ? saveButton.activeIcon
                    : {
                        assetPath: require('../../../assets/images/saved_bookmark_icon3x.png'),
                        type: 'png',
                      }
                }
                activeText={saveButton.activeText}
                buttonStyle={
                  saveButton.buttonStyle
                    ? saveButton.buttonStyle
                    : {borderWidth: 0}
                }
              />
            )}
          </>
        )}

        {/* share section */}
        {showShareIcon && (
          <>
            {shareButton && (
              <LMButton
                onTap={shareButton.onTap}
                text={shareButton.text}
                icon={
                  shareButton.icon
                    ? shareButton.icon
                    : {
                        assetPath: require('../../../assets/images/share_icon3x.png'),
                        type: 'png',
                      }
                }
                placement={shareButton.placement}
                isActive={shareButton.isActive}
                activeIcon={shareButton.activeIcon}
                activeText={shareButton.activeText}
                buttonStyle={
                  shareButton.buttonStyle
                    ? shareButton.buttonStyle
                    : {borderWidth: 0}
                }
              />
            )}
          </>
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
