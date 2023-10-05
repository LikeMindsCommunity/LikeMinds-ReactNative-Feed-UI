import {View} from 'react-native';
import React from 'react';
import LMPostHeader from '../LMPostHeader';
import LMPostContent from '../LMPostContent';
import LMPostMedia from '../LMPostMedia';
import LMPostFooter from '../LMPostFooter';
import {LMPostProps} from './types';

const LMPost = ({
  post,
  headerProps,
  contentProps,
  mediaProps,
  footerProps,
}: LMPostProps) => {
  //creating header props as per customization
  const updatedHeaderProps = headerProps
    ? headerProps
    : {
        user: post.user,
        profilePicture: {fallbackText: post.user.name},
        postMenu: {
          menuItems: post.menuItems,
          onSelected: () => {},
          modalPosition: {x: 0, y: 0},
          modalVisible: false,
          onCloseModal: () => {},
        },
        onTap: () => {}
      };

  //creating footer props as per customization
  const updatedFooterProps = footerProps
    ? footerProps
    : {
        isLiked: post.isLiked,
        isSaved: post.isSaved,
        likesCount: post.likesCount,
        commentsCount: post.commentsCount,
      };

  //creating post content props as per customization
  const updatedContentProps = contentProps
    ? contentProps
    : {
        text: post.text,
      };
  //creating post media props as per customization
  const updatedMediaProps = mediaProps
    ? mediaProps
    : {
        attachments: post.attachments,
      };
  return (
    <View>
      {/* post header */}
      <LMPostHeader {...updatedHeaderProps} />
      {/* post content */}
      <LMPostContent {...updatedContentProps} />
      {/* post media */}
      <LMPostMedia {...updatedMediaProps} />
      {/* post footer */}
      <LMPostFooter {...updatedFooterProps} />
    </View>
  );
};

export default LMPost;
