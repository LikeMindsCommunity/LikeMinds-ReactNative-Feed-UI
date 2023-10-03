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
        user={post.user}
        menuItems={post.menuItems}
        // todo: make a callback function to return the id of menu item clicked and execute further functionality according to it
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
