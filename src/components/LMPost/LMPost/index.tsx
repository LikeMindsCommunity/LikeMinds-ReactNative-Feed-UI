import {View} from 'react-native';
import React from 'react';
import LMPostHeader from '../LMPostHeader';
import {LMPostProps} from './types';
import LMPostContent from '../LMPostContent';
import LMPostMedia from '../LMPostMedia';
import LMPostFooter from '../LMPostFooter';

const LMPost = ({post, user}: LMPostProps) => {
  return (
    <View>
      {/* post header */}
      <LMPostHeader
        user={user}
        menuItems={post.menuItems}
        onMenuItemTap={() => {}}
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
