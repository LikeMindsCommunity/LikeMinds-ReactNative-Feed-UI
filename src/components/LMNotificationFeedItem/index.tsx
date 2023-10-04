import {View, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import LMProfilePicture from '../../base/LMProfilePicture';
import layout from '../../utils/layout';
import LMText from '../../base/LMText';
import {timeStamp} from '../../utils';
import STYLES from '../../constants/constants';
import {LMNotificationFeedItemProps} from './types';
import LMIcon from '../../base/LMIcon';
import {
  DOCUMENT_ATTACHMENT_TYPE,
  IMAGE_ATTACHMENT_TYPE,
  VIDEO_ATTACHMENT_TYPE,
} from '../../constants/strings';

const LMNotificationFeedItem = ({
  activity,
  userProfilePicture,
  boxStyle,
  activityDateStyle,
  activityTextStyle,
  onMenuTap,
  onTap,
  menuIcon,
}: LMNotificationFeedItemProps) => {
  //creating profile picture props as per customization
  const updatedProfilePictureProps = userProfilePicture
    ? userProfilePicture
    : {
        fallbackText: activity.activityByUser.name,
        size: 50,
        imageUrl: activity.activityByUser.imageUrl,
      };
  return (
    <View
      style={StyleSheet.flatten([
        styles.container,
        boxStyle,
        {backgroundColor: activity.isRead ? '' : STYLES.$COLORS.LIGHT_GREY},
      ])}>
      <TouchableOpacity onPress={onTap} style={{flexDirection: 'row'}}>
        {/* profile avatar view */}
        <View>
          {/* profile picture section */}
          <LMProfilePicture {...updatedProfilePictureProps} />
          {/* handles the gallery and document icon on profile picture */}
          {activity.activityEntityData?.attachments &&
          // show gallery icon
            (activity.activityEntityData.attachments[0].attachmentType ===
              IMAGE_ATTACHMENT_TYPE ||
            activity.activityEntityData.attachments[0].attachmentType ===
              VIDEO_ATTACHMENT_TYPE ? (
              <LMIcon
                assetPath={require('../../assets/images/notification_image3x.png')}
                type="png"
                boxStyle={{position: 'absolute', bottom: -10, right: -8}}
                height={35}
                width={35}
              />
              // show document icon
            ) : activity.activityEntityData.attachments[0].attachmentType ===
              DOCUMENT_ATTACHMENT_TYPE ? (
              <LMIcon
                assetPath={require('../../assets/images/notification_doc3x.png')}
                type="png"
                boxStyle={{position: 'absolute', bottom: -10, right: -8}}
                height={35}
                width={35}
              />
            ) : null)}
        </View>

        {/* activity content text */}
        <View style={{width: '75%', marginLeft: 10}}>
          <LMText
            text={activity.activityText.replace(/<<([^|]+)\|[^>]+>>/g, '$1')}
            textStyle={StyleSheet.flatten([activityTextStyle])}
          />
          <LMText
            text={`${timeStamp(Number(activity.createdAt))} ago`}
            textStyle={StyleSheet.flatten([activityDateStyle])}
          />
        </View>
      </TouchableOpacity>
      {/* menu icon section */}
      <TouchableOpacity onPress={onMenuTap}>
        <>
          {menuIcon ? (
            menuIcon
          ) : (
            <LMIcon
              assetPath={require('../../assets/images/three_dots3x.png')}
              type="png"
              iconStyle={styles.iconSize}
            />
          )}
        </>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
  },
  iconSize: {
    width: layout.normalize(22),
    height: layout.normalize(22),
    resizeMode: 'contain',
  },
  postedDetail: {
    color: STYLES.$COLORS.BLACK,
    fontSize: 14,
  },
});

export default LMNotificationFeedItem;
