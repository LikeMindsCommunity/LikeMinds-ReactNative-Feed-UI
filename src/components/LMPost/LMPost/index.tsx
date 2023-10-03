import {View} from 'react-native';
import React from 'react';
import LMPostHeader from '../LMPostHeader';
import LMPostContent from '../LMPostContent';
import LMPostMedia from '../LMPostMedia';
import LMPostFooter from '../LMPostFooter';
import {LMPostProps} from './types';

const LMPost = ({post}: LMPostProps) => {
  return (
    <View>
      {/* post header */}
      <LMPostHeader
        profilePicture={{fallbackText: post.user.name}}
        postMenu={{
          menuItems: post.menuItems,
          onSelected: () => {},
          modalPosition: {x: 0, y: 0},
          modalVisible: false,
          onCloseModal: () => {},
        }}
      />
      {/* post content */}
      <LMPostContent text={post.text} />
      {/* post media */}
      <LMPostMedia attachments={post.attachments} />
      {/* post footer */}
      <LMPostFooter
        isLiked={post.isLiked}
        isSaved={post.isSaved}
        likesCount={post.likesCount}
        commentsCount={post.commentsCount}
      />
    </View>
  );
};

export default LMPost;
