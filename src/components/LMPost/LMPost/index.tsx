import {View} from 'react-native';
import React from 'react';
import LMPostHeader from '../LMPostHeader';
import LMPostContent from '../LMPostContent';
import LMPostMedia from '../LMPostMedia';
import LMPostFooter from '../LMPostFooter';
import {LMPostProps} from './types';

const LMPost = ({post, headerProps, footerProps}: LMPostProps) => {
  //creating header props as per customization
  const updatedHeaderProps = headerProps
    ? headerProps
    : {
        user: post.user,
        profilePicture: {
          fallbackText: post.user.name,
        },
        postMenu: {
          menuItems: post.menuItems,
          onSelected: () => {},
          modalPosition: {x: 0, y: 0},
          modalVisible: false,
          onCloseModal: () => {},
        },
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
  return (
    <View>
      {/* post header */}
      <LMPostHeader {...updatedHeaderProps} />
      {/* post content */}
      <LMPostContent text={post.text} />
      {/* post media */}
      <LMPostMedia attachments={post.attachments} />
      {/* post footer */}
      <LMPostFooter {...updatedFooterProps} />
    </View>
  );
};

export default LMPost;
