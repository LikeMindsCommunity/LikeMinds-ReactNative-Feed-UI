import {View} from 'react-native';
import React from 'react';
import LMPostHeader from '../LMPostHeader';
import LMPostContent from '../LMPostContent';
import LMPostMedia from '../LMPostMedia';
import LMPostFooter from '../LMPostFooter';

const LMPost = ({
  id,
  user,
  menuItems,
  text,
  attachments,
  isLiked,
  isSaved,
  likesCount,
  commentsCount,
}: LMPostUI) => {
  return (
    <View>
      {/* post header */}
      <LMPostHeader
        user={user}
        menuItems={menuItems}
        // todo: make a callback function to return the id of menu item clicked and execute further functionality according to it
        onMenuItemTap={() => {}}
      />
      {/* post content */}
      <LMPostContent text={text} />
      {/* post media */}
      <LMPostMedia attachments={attachments} />
      {/* post footer */}
      <LMPostFooter
        isLiked={isLiked}
        isSaved={isSaved}
        likesCount={likesCount}
        commentsCount={commentsCount}
      />
    </View>
  );
};

export default LMPost;
