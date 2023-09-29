import {
  View,
  Text,
  StyleSheet,
  Modal,
  Pressable,
  TouchableOpacity,
  Platform,
} from 'react-native';
import React from 'react';
import STYLES from '../../../constants/constants';
import {LMPostMenuProps} from './types';
import layout from '../../../utils/layout';

const LMPostMenu = ({
  menuItems,
  onSelected,
  modalVisible,
  onCloseModal,
  modalPosition,
  menuItemTextStyle,
  menuViewStyle,
  backdropColor,
}: LMPostMenuProps) => {
  return (
    <Modal
      visible={modalVisible}
      animationType="fade"
      transparent={true}
      onRequestClose={onCloseModal}>
        {/* modal backdrop section */}
      <Pressable
        style={StyleSheet.flatten([
          styles.modal,
          {backgroundColor: backdropColor},
        ])}
        onPress={onCloseModal}>
        {/* Menu list View */}
        <Pressable
          onPress={() => {}}
          style={StyleSheet.flatten([
            styles.modalContainer,
            menuViewStyle,
            {
              top:
                modalPosition.y > layout.window.height / 2
                  ? Platform.OS === 'ios'
                    ? modalPosition.y - 150
                    : modalPosition.y - 15
                  : modalPosition.y - 10,
            },
          ])}>
          {/* Menu List Items */}
          {menuItems &&
            menuItems.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    onSelected(item.id), onCloseModal();
                  }}>
                  <Text
                    style={StyleSheet.flatten([
                      styles.listText,
                      menuItemTextStyle,
                    ])}>
                    {item.title}
                  </Text>
                </TouchableOpacity>
              );
            })}
        </Pressable>
      </Pressable>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
  },
  modalContainer: {
    backgroundColor: STYLES.$BACKGROUND_COLORS.LIGHT,
    elevation: 8,
    paddingHorizontal: 18,
    paddingVertical: 12,
    minWidth: '55%',
    position: 'absolute',
    right: 15,
  },
  listText: {
    fontSize: 16,
    fontWeight: '400',
    color: STYLES.$COLORS.TEXT_COLOR,
    marginVertical: 12,
  },
});

export default LMPostMenu;