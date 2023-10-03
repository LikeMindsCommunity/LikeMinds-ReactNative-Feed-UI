import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import STYLES from '../../../constants/constants';
import layout from '../../../utils/layout';
import LMProfilePicture from '../../../base/LMProfilePicture';
import {LMPostHeaderProps} from './types';
import {timeStamp} from '../../../utils';
import LMPostMenu from '../LMPostMenu';
import LMText from '../../../base/LMText';

const LMPostHeader = ({
  profilePicture,
  titleText,
  createdAt,
  isEdited,
  showMemberStateLabel,
  memberState,
  memberStateTextStyle,
  memberStateViewStyle,
  postHeaderViewStyle,
  pinIcon,
  isPinned,
  menuIcon,
  postMenu,
}: LMPostHeaderProps) => {
  const [modalPosition, setModalPosition] = useState(postMenu?.modalPosition);
  const [showPostMenuModal, setShowPostMenuModal] = useState(
    postMenu?.modalVisible,
  );

  // this function closes the menu list modal
  const closePostMenuModal = () => {
    postMenu?.onCloseModal();
  };

  // this function is executed on the click of menu icon & handles the position and visibility of the modal
  const onThreedotsClick = (event: any) => {
    const {pageX, pageY} = event.nativeEvent;
    setShowPostMenuModal(true);
    setModalPosition({x: pageX, y: pageY});
  };

  return (
    <View style={StyleSheet.flatten([styles.postHeader, postHeaderViewStyle])}>
      {/* author detail section */}
      <View style={styles.alignRow}>
        <LMProfilePicture
          fallbackText={profilePicture.fallbackText}
          imageUrl={profilePicture.imageUrl}
          onTap={profilePicture.onTap}
          size={profilePicture.size}
          fallbackTextStyle={profilePicture.fallbackTextStyle}
          fallbackTextBoxStyle={profilePicture.fallbackTextBoxStyle}
          profilePictureStyle={profilePicture.profilePictureStyle}
        />
        {/* author details */}
        <View style={{marginLeft: 10}}>
          {/* author heading */}
          <View style={styles.alignRow}>
            <LMText
              text={titleText?.text ? titleText.text : ''}
              maxLines={titleText?.maxLines}
              selectable={titleText?.selectable}
              textStyle={StyleSheet.flatten([
                styles.postAuthorName,
                titleText?.textStyle,
              ])}
            />
            {/* member state label view */}
            {showMemberStateLabel && memberState === 1 && (
              <View
                style={StyleSheet.flatten([
                  styles.labelView,
                  memberStateViewStyle,
                ])}>
                <Text
                  style={StyleSheet.flatten([
                    styles.labelText,
                    memberStateTextStyle,
                  ])}>
                  Admin
                </Text>
              </View>
            )}
          </View>

          {/* author subHeading */}
          <View style={styles.alignRow}>
            <LMText
              text={`${timeStamp(Number(createdAt?.text))} ago`}
              selectable={createdAt?.selectable}
              maxLines={createdAt?.maxLines}
              textStyle={StyleSheet.flatten([
                styles.postedDetail,
                createdAt?.textStyle,
              ])}
            />
            {/* checks if the post is edited or not */}
            {isEdited && (
              <>
                <Image
                  source={require('../../../assets/images/single_dot3x.png')}
                  resizeMode={'contain'}
                  style={styles.dotImageSize}
                />
                <Text
                  style={StyleSheet.flatten([
                    styles.postedDetail,
                    createdAt?.textStyle,
                  ])}>
                  Edited
                </Text>
              </>
            )}
          </View>
        </View>
      </View>

      {/* Top right action buttons */}
      <View
        style={[
          styles.topRightView,
          isPinned && {justifyContent: 'space-between'},
        ]}>
        {/* pin icon section */}
        {isPinned && (
          <>
            {pinIcon ? (
              pinIcon
            ) : (
              <Image
                source={require('../../../assets/images/pin_icon3x.png')}
                resizeMode={'contain'}
                style={styles.iconSize}
              />
            )}
          </>
        )}
        {/* menu icon section */}
        <TouchableOpacity onPress={onThreedotsClick}>
          <>
            {menuIcon ? (
              menuIcon
            ) : (
              <Image
                source={require('../../../assets/images/three_dots3x.png')}
                resizeMode="contain"
                style={styles.iconSize}
              />
            )}
          </>
        </TouchableOpacity>
      </View>

      {/* menu list modal */}
      <LMPostMenu
        menuItems={postMenu.menuItems}
        onSelected={postMenu.onSelected}
        modalPosition={modalPosition}
        modalVisible={showPostMenuModal}
        onCloseModal={closePostMenuModal}
        menuItemTextStyle={postMenu.menuItemTextStyle}
        menuViewStyle={postMenu.menuViewStyle}
        backdropColor={postMenu.backdropColor}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  postHeader: {
    width: '100%',
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  alignRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  postAuthorName: {
    color: STYLES.$COLORS.BLACK,
    fontSize: 18,
    fontWeight: '400',
  },
  postedDetail: {
    color: STYLES.$COLORS.BLACK,
    fontSize: 14,
  },
  labelText: {
    color: STYLES.$COLORS.WHITE,
    fontSize: 14,
    fontWeight: '500',
  },
  labelView: {
    backgroundColor: '#5046E5',
    marginLeft: 10,
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 5,
  },
  iconSize: {
    width: layout.normalize(22),
    height: layout.normalize(22),
  },
  dotImageSize: {
    width: layout.normalize(6),
    height: layout.normalize(6),
    marginHorizontal: 5,
  },
  topRightView: {
    width: '20%',
    flexDirection: 'row',
    marginTop: 5,
    justifyContent: 'flex-end',
  },
});

export default LMPostHeader;
