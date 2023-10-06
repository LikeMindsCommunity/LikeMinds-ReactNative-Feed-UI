import {StyleSheet, View} from 'react-native';
import React from 'react';
import LMPostHeader from '../LMPostHeader';
import LMPostContent from '../LMPostContent';
import LMPostMedia from '../LMPostMedia';
import LMPostFooter from '../LMPostFooter';
import {LMPostProps} from './types';
import layout from '../../../utils/layout';
import STYLES from '../../../constants/constants';

const LMPost = ({
  post,
  headerProps,
  contentProps,
  mediaProps,
  footerProps,
}: LMPostProps) => {
  //creating header props as per customization
  const updatedHeaderProps = {
    post: post,
    profilePicture: {
      fallbackText: post.user.name,
      fallbackTextStyle: headerProps?.profilePicture?.fallbackTextStyle,
      imageUrl: post.user.imageUrl,
      onTap: headerProps?.profilePicture?.onTap,
      size: headerProps?.profilePicture?.size,
      fallbackTextBoxStyle: headerProps?.profilePicture?.fallbackTextBoxStyle,
      profilePictureStyle: headerProps?.profilePicture?.profilePictureStyle,
    },
    postMenu: {
      menuItems: post.menuItems,
      onSelected: headerProps?.postMenu.onSelected
        ? headerProps.postMenu.onSelected
        : () => {},
      modalPosition: headerProps?.postMenu.modalPosition
        ? headerProps?.postMenu.modalPosition
        : {x: 0, y: 0},
      modalVisible: headerProps?.postMenu.modalVisible
        ? headerProps.postMenu.modalVisible
        : false,
      onCloseModal: headerProps?.postMenu.onCloseModal
        ? headerProps.postMenu.onCloseModal
        : () => {},
      menuItemTextStyle: headerProps?.postMenu.menuItemTextStyle,
      menuViewStyle: headerProps?.postMenu.menuViewStyle,
      backdropColor: headerProps?.postMenu.backdropColor,
    },
    onTap: headerProps?.onTap ? headerProps.onTap : () => {},
    createdAt: {
      text: `${post.createdAt}`,
      textStyle: headerProps?.createdAt?.textStyle,
    },
    titleText: {
      text: post.user.name,
      textStyle: headerProps?.titleText?.textStyle,
    },
    isEdited: post.isEdited,
    showMemberStateLabel: headerProps?.showMemberStateLabel,
    memberState: headerProps?.memberState,
    memberStateViewStyle: headerProps?.memberStateViewStyle,
    memberStateTextStyle: headerProps?.memberStateTextStyle,
    postHeaderViewStyle: headerProps?.postHeaderViewStyle,
    isPinned: post.isPinned,
    showMenuIcon: headerProps?.showMenuIcon,
    pinIcon: {
      type: headerProps?.pinIcon?.type ? headerProps.pinIcon.type : 'png',
      iconUrl: headerProps?.pinIcon?.iconUrl,
      assetPath: headerProps?.pinIcon?.assetPath,
      color: headerProps?.pinIcon?.color,
      height: headerProps?.pinIcon?.height,
      width: headerProps?.pinIcon?.width,
      iconStyle: headerProps?.pinIcon?.iconStyle,
      boxStyle: headerProps?.pinIcon?.boxStyle,
      boxFit: headerProps?.pinIcon?.boxFit,
    },
    menuIcon: {
      type: headerProps?.menuIcon?.type ? headerProps.menuIcon.type : 'png',
      iconUrl: headerProps?.menuIcon?.iconUrl,
      assetPath: headerProps?.menuIcon?.assetPath,
      color: headerProps?.menuIcon?.color,
      height: headerProps?.menuIcon?.height,
      width: headerProps?.menuIcon?.width,
      iconStyle: headerProps?.menuIcon?.iconStyle,
      boxStyle: headerProps?.menuIcon?.boxStyle,
      boxFit: headerProps?.menuIcon?.boxFit,
    },
  };

  //creating footer props as per customization
  const updatedFooterProps = {
    isLiked: post.isLiked,
    isSaved: post.isSaved,
    likesCount: post.likesCount,
    commentsCount: post.commentsCount,
    showBookMarkIcon: footerProps?.showBookMarkIcon,
    showShareIcon: footerProps?.showShareIcon,
    footerBoxStyle: footerProps?.footerBoxStyle,
    likeIconButton: {
      text: {
        text: footerProps?.likeIconButton?.text?.text
          ? footerProps.likeIconButton.text.text
          : '',
        textStyle: footerProps?.likeIconButton?.text?.textStyle,
      },
      icon: {
        iconUrl: footerProps?.likeIconButton?.icon?.iconUrl,
        assetPath: footerProps?.likeIconButton?.icon?.assetPath,
        color: footerProps?.likeIconButton?.icon?.color,
        height: footerProps?.likeIconButton?.icon?.height,
        width: footerProps?.likeIconButton?.icon?.width,
        iconStyle: footerProps?.likeIconButton?.icon?.iconStyle,
        boxStyle: footerProps?.likeIconButton?.icon?.boxStyle,
        boxFit: footerProps?.likeIconButton?.icon?.boxFit,
      },
      activeIcon: {
        iconUrl: footerProps?.likeIconButton?.activeIcon?.iconUrl,
        assetPath: footerProps?.likeIconButton?.activeIcon?.assetPath,
        color: footerProps?.likeIconButton?.activeIcon?.color,
        height: footerProps?.likeIconButton?.activeIcon?.height,
        width: footerProps?.likeIconButton?.activeIcon?.width,
        iconStyle: footerProps?.likeIconButton?.activeIcon?.iconStyle,
        boxStyle: footerProps?.likeIconButton?.activeIcon?.boxStyle,
        boxFit: footerProps?.likeIconButton?.activeIcon?.boxFit,
      },
      activeText: {
        text: footerProps?.likeIconButton?.activeText?.text
          ? footerProps.likeIconButton.activeText.text
          : '',
        textStyle: footerProps?.likeIconButton?.activeText?.textStyle,
      },
      placement: footerProps?.likeIconButton?.placement,
      isActive: footerProps?.likeIconButton?.isActive,
      buttonStyle: footerProps?.likeIconButton?.buttonStyle,
    },
    likeTextButton: {
      text: {
        text: footerProps?.likeTextButton?.text?.text
          ? footerProps.likeTextButton.text.text
          : '',
        textStyle: footerProps?.likeTextButton?.text?.textStyle,
      },
      icon: {
        iconUrl: footerProps?.likeTextButton?.icon?.iconUrl,
        assetPath: footerProps?.likeTextButton?.icon?.assetPath,
        color: footerProps?.likeTextButton?.icon?.color,
        height: footerProps?.likeTextButton?.icon?.height,
        width: footerProps?.likeTextButton?.icon?.width,
        iconStyle: footerProps?.likeTextButton?.icon?.iconStyle,
        boxStyle: footerProps?.likeTextButton?.icon?.boxStyle,
        boxFit: footerProps?.likeTextButton?.icon?.boxFit,
      },
      activeIcon: {
        iconUrl: footerProps?.likeTextButton?.activeIcon?.iconUrl,
        assetPath: footerProps?.likeTextButton?.activeIcon?.assetPath,
        color: footerProps?.likeTextButton?.activeIcon?.color,
        height: footerProps?.likeTextButton?.activeIcon?.height,
        width: footerProps?.likeTextButton?.activeIcon?.width,
        iconStyle: footerProps?.likeTextButton?.activeIcon?.iconStyle,
        boxStyle: footerProps?.likeTextButton?.activeIcon?.boxStyle,
        boxFit: footerProps?.likeTextButton?.activeIcon?.boxFit,
      },
      activeText: {
        text: footerProps?.likeTextButton?.activeText?.text
          ? footerProps.likeTextButton.activeText.text
          : '',
        textStyle: footerProps?.likeTextButton?.activeText?.textStyle,
      },
      placement: footerProps?.likeTextButton?.placement,
      isActive: footerProps?.likeTextButton?.isActive,
      buttonStyle: footerProps?.likeTextButton?.buttonStyle,
    },
    commentButton: {
      text: {
        text: footerProps?.commentButton?.text?.text
          ? footerProps.commentButton.text.text
          : '',
        textStyle: footerProps?.commentButton?.text?.textStyle,
      },
      icon: {
        iconUrl: footerProps?.commentButton?.icon?.iconUrl,
        assetPath: footerProps?.commentButton?.icon?.assetPath,
        color: footerProps?.commentButton?.icon?.color,
        height: footerProps?.commentButton?.icon?.height,
        width: footerProps?.commentButton?.icon?.width,
        iconStyle: footerProps?.commentButton?.icon?.iconStyle,
        boxStyle: footerProps?.commentButton?.icon?.boxStyle,
        boxFit: footerProps?.commentButton?.icon?.boxFit,
      },
      activeIcon: {
        iconUrl: footerProps?.commentButton?.activeIcon?.iconUrl,
        assetPath: footerProps?.commentButton?.activeIcon?.assetPath,
        color: footerProps?.commentButton?.activeIcon?.color,
        height: footerProps?.commentButton?.activeIcon?.height,
        width: footerProps?.commentButton?.activeIcon?.width,
        iconStyle: footerProps?.commentButton?.activeIcon?.iconStyle,
        boxStyle: footerProps?.commentButton?.activeIcon?.boxStyle,
        boxFit: footerProps?.commentButton?.activeIcon?.boxFit,
      },
      activeText: {
        text: footerProps?.commentButton?.activeText?.text
          ? footerProps.commentButton.activeText.text
          : '',
        textStyle: footerProps?.commentButton?.activeText?.textStyle,
      },
      placement: footerProps?.commentButton?.placement,
      isActive: footerProps?.commentButton?.isActive,
      buttonStyle: footerProps?.commentButton?.buttonStyle,
    },
    saveButton: {
      text: {
        text: footerProps?.saveButton?.text?.text
          ? footerProps.saveButton.text.text
          : '',
        textStyle: footerProps?.saveButton?.text?.textStyle,
      },
      icon: {
        iconUrl: footerProps?.saveButton?.icon?.iconUrl,
        assetPath: footerProps?.saveButton?.icon?.assetPath,
        color: footerProps?.saveButton?.icon?.color,
        height: footerProps?.saveButton?.icon?.height,
        width: footerProps?.saveButton?.icon?.width,
        iconStyle: footerProps?.saveButton?.icon?.iconStyle,
        boxStyle: footerProps?.saveButton?.icon?.boxStyle,
        boxFit: footerProps?.saveButton?.icon?.boxFit,
      },
      activeIcon: {
        iconUrl: footerProps?.saveButton?.activeIcon?.iconUrl,
        assetPath: footerProps?.saveButton?.activeIcon?.assetPath,
        color: footerProps?.saveButton?.activeIcon?.color,
        height: footerProps?.saveButton?.activeIcon?.height,
        width: footerProps?.saveButton?.activeIcon?.width,
        iconStyle: footerProps?.saveButton?.activeIcon?.iconStyle,
        boxStyle: footerProps?.saveButton?.activeIcon?.boxStyle,
        boxFit: footerProps?.saveButton?.activeIcon?.boxFit,
      },
      activeText: {
        text: footerProps?.saveButton?.activeText?.text
          ? footerProps.saveButton.activeText.text
          : '',
        textStyle: footerProps?.saveButton?.activeText?.textStyle,
      },
      placement: footerProps?.saveButton?.placement,
      isActive: footerProps?.saveButton?.isActive,
      buttonStyle: footerProps?.saveButton?.buttonStyle,
    },
    shareButton: {
      text: {
        text: footerProps?.shareButton?.text?.text
          ? footerProps.shareButton.text.text
          : '',
        textStyle: footerProps?.shareButton?.text?.textStyle,
      },
      icon: {
        iconUrl: footerProps?.shareButton?.icon?.iconUrl,
        assetPath: footerProps?.shareButton?.icon?.assetPath,
        color: footerProps?.shareButton?.icon?.color,
        height: footerProps?.shareButton?.icon?.height,
        width: footerProps?.shareButton?.icon?.width,
        iconStyle: footerProps?.shareButton?.icon?.iconStyle,
        boxStyle: footerProps?.shareButton?.icon?.boxStyle,
        boxFit: footerProps?.shareButton?.icon?.boxFit,
      },
      activeIcon: {
        iconUrl: footerProps?.shareButton?.activeIcon?.iconUrl,
        assetPath: footerProps?.shareButton?.activeIcon?.assetPath,
        color: footerProps?.shareButton?.activeIcon?.color,
        height: footerProps?.shareButton?.activeIcon?.height,
        width: footerProps?.shareButton?.activeIcon?.width,
        iconStyle: footerProps?.shareButton?.activeIcon?.iconStyle,
        boxStyle: footerProps?.shareButton?.activeIcon?.boxStyle,
        boxFit: footerProps?.shareButton?.activeIcon?.boxFit,
      },
      activeText: {
        text: footerProps?.shareButton?.activeText?.text
          ? footerProps.shareButton.activeText.text
          : '',
        textStyle: footerProps?.shareButton?.activeText?.textStyle,
      },
      placement: footerProps?.shareButton?.placement,
      isActive: footerProps?.shareButton?.isActive,
      buttonStyle: footerProps?.shareButton?.buttonStyle,
    },
  };

  //creating post content props as per customization
  const updatedContentProps = {
    text: post.text,
    linkData: post.attachments,
    textStyle: contentProps?.textStyle,
    linkStyle: contentProps?.linkStyle,
    visibleLines: contentProps?.visibleLines,
    postContentViewStyle: contentProps?.postContentViewStyle,
    showMoreText: {
      text: contentProps?.showMoreText?.text
        ? contentProps.showMoreText.text != ''
          ? contentProps.showMoreText.text
          : 'Show More'
        : 'Show More',
      textStyle: contentProps?.showMoreText?.textStyle,
      selectable: contentProps?.showMoreText?.selectable,
      maxLines: contentProps?.showMoreText?.maxLines,
      onTextLayout: contentProps?.showMoreText?.onTextLayout,
    },
  };
  //creating post media props as per customization
  const updatedMediaProps = {
    attachments: post.attachments,
    postMediaStyle: mediaProps?.postMediaStyle,
    imageProps: {
      imageUrl: mediaProps?.imageProps?.imageUrl
        ? mediaProps.imageProps.imageUrl
        : '',
      imageStyle: mediaProps?.imageProps?.imageStyle,
      height: mediaProps?.imageProps?.height,
      width: mediaProps?.imageProps?.width,
      boxStyle: mediaProps?.imageProps?.boxStyle,
      boxFit: mediaProps?.imageProps?.boxFit,
      aspectRatio: mediaProps?.imageProps?.aspectRatio,
      loaderWidget: mediaProps?.imageProps?.loaderWidget,
      errorWidget: mediaProps?.imageProps?.errorWidget,
    },
    videoProps: {
      videoUrl: mediaProps?.videoProps?.videoUrl
        ? mediaProps.videoProps.videoUrl
        : '',
      height: mediaProps?.videoProps?.height,
      width: mediaProps?.videoProps?.width,
      videoStyle: mediaProps?.videoProps?.videoStyle,
      boxFit: mediaProps?.videoProps?.boxFit,
      boxStyle: mediaProps?.videoProps?.boxStyle,
      aspectRatio: mediaProps?.videoProps?.aspectRatio,
      showControls: mediaProps?.videoProps?.showControls,
      playButton: mediaProps?.videoProps?.playButton,
      autoPlay: mediaProps?.videoProps?.autoPlay,
      pauseButton: mediaProps?.videoProps?.pauseButton,
      looping: mediaProps?.videoProps?.looping,
      loaderWidget: mediaProps?.videoProps?.loaderWidget,
      errorWidget: mediaProps?.videoProps?.errorWidget,
      currentVideoUrl: mediaProps?.videoProps?.currentVideoUrl,
    },
    carouselProps: {
      attachments: mediaProps?.carouselProps?.attachments
        ? mediaProps.carouselProps.attachments
        : [],
      carouselStyle: mediaProps?.carouselProps?.carouselStyle,
      paginationBoxStyle: mediaProps?.carouselProps?.paginationBoxStyle,
      activeIndicatorStyle: mediaProps?.carouselProps?.activeIndicatorStyle,
      inactiveIndicatorStyle: mediaProps?.carouselProps?.inactiveIndicatorStyle,
      imageItem: mediaProps?.carouselProps?.imageItem,
      videoItem: mediaProps?.carouselProps?.videoItem,
    },
    documentProps: {
      attachments: mediaProps?.documentProps?.attachments
        ? mediaProps.documentProps.attachments
        : [],
      documentIcon: mediaProps?.documentProps?.documentIcon,
      showPageCount: mediaProps?.documentProps?.showPageCount,
      showDocumentFormat: mediaProps?.documentProps?.showDocumentFormat,
      showDocumentSize: mediaProps?.documentProps?.showDocumentSize,
      onTap: mediaProps?.documentProps?.onTap,
      documentTitleStyle: mediaProps?.documentProps?.documentTitleStyle,
      documentDetailStyle: mediaProps?.documentProps?.documentDetailStyle,
      documentViewStyle: mediaProps?.documentProps?.documentViewStyle,
      defaultIconSize: mediaProps?.documentProps?.defaultIconSize,
    },
    linkPreviewProps: {
      attachments: mediaProps?.linkPreviewProps?.attachments
        ? mediaProps.linkPreviewProps.attachments
        : [],
      onTap: mediaProps?.linkPreviewProps?.onTap,
      showLinkUrl: mediaProps?.linkPreviewProps?.showLinkUrl,
      linkPreviewBoxStyle: mediaProps?.linkPreviewProps?.linkPreviewBoxStyle,
      linkImageStyle: mediaProps?.linkPreviewProps?.linkImageStyle,
      linkTitleStyle: mediaProps?.linkPreviewProps?.linkTitleStyle,
      linkDescriptionStyle: mediaProps?.linkPreviewProps?.linkDescriptionStyle,
      linkUrlStyle: mediaProps?.linkPreviewProps?.linkUrlStyle,
      showDescription: mediaProps?.linkPreviewProps?.showDescription,
      showTitle: mediaProps?.linkPreviewProps?.showTitle,
      showImage: mediaProps?.linkPreviewProps?.showImage,
    },
  };
  return (
    <View style={styles.mainContainer}>
      {/* post header */}
      <LMPostHeader
        {...updatedHeaderProps}
      />
      {/* post content */}
      <LMPostContent {...updatedContentProps} />
      {/* post media */}
      <LMPostMedia {...updatedMediaProps} />
      {/* post footer */}
      <LMPostFooter
        {...updatedFooterProps}
        likeIconButton={{
          icon: {type: 'png'},
          activeIcon: {type: 'png'},
          onTap: footerProps?.likeIconButton?.onTap
            ? footerProps.likeIconButton.onTap
            : () => {},
        }}
        likeTextButton={{
          icon: {type: 'png'},
          activeIcon: {type: 'png'},
          onTap: footerProps?.likeTextButton?.onTap
            ? footerProps.likeTextButton.onTap
            : () => {},
        }}
        commentButton={{
          icon: {type: 'png'},
          activeIcon: {type: 'png'},
          onTap: footerProps?.commentButton?.onTap
            ? footerProps.commentButton.onTap
            : () => {},
        }}
        saveButton={{
          icon: {type: 'png'},
          activeIcon: {type: 'png'},
          onTap: footerProps?.saveButton?.onTap
            ? footerProps.saveButton.onTap
            : () => {},
        }}
        shareButton={{
          icon: {type: 'png'},
          activeIcon: {type: 'png'},
          onTap: footerProps?.shareButton?.onTap
            ? footerProps.shareButton.onTap
            : () => {},
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: layout.window.width,
    backgroundColor: STYLES.$BACKGROUND_COLORS.LIGHT,
    marginBottom: 10,
    paddingTop: 10,
  },
});

export default LMPost;