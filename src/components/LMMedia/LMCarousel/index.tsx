import {StyleSheet} from 'react-native';
import React from 'react';
import SwiperFlatList from 'react-native-swiper-flatlist';
import {LMCarouselProps} from './types';
import LMImage from '../LMImage';
import LMVideo from '../LMVideo';
import layout from '../../../utils/layout';
import STYLES from '../../../constants/constants'
import { IMAGE_ATTACHMENT_TYPE, VIDEO_ATTACHMENT_TYPE } from '../../../constants/strings';

const LMCarousel = ({
  attachments,
  carouselStyle,
  paginationBoxStyle,
  activeIndicatorStyle,
  inactiveIndicatorStyle,
  imageItem,
  videoItem,
}: LMCarouselProps) => {
  return (
    <SwiperFlatList
      data={attachments}
      showPagination
      style={StyleSheet.flatten([styles.swiperView, carouselStyle])}
      // handling custom style of pagination container
      paginationStyle={StyleSheet.flatten([
        styles.paginationView,
        paginationBoxStyle,
      ])}
      // handling custom style of active pagination item
      paginationStyleItemActive={StyleSheet.flatten([
        styles.paginationItemStyle,
        {backgroundColor: STYLES.$COLORS.THEME},
        activeIndicatorStyle,
      ])}
      // handling custom style of inactive pagination item
      paginationStyleItemInactive={StyleSheet.flatten([
        styles.paginationItemStyle,
        {backgroundColor: STYLES.$COLORS.LIGHT_GREY},
        inactiveIndicatorStyle,
      ])}
      renderItem={({item}) => (
        <>
          {/* this section render image */}
          {item?.attachmentType === IMAGE_ATTACHMENT_TYPE && (
            <LMImage
              imageUrl={item?.attachmentMeta?.url}
              width={imageItem?.width}
              height={imageItem?.height}
              imageStyle={imageItem?.imageStyle}
              boxFit={imageItem?.boxFit}
              boxStyle={imageItem?.boxStyle}
              aspectRatio={imageItem?.aspectRatio}
              loaderWidget={imageItem?.loaderWidget}
              errorWidget={imageItem?.errorWidget}
            />
          )}
          {/* this section render video */}
          {item?.attachmentType === VIDEO_ATTACHMENT_TYPE && (
            <LMVideo
              videoUrl={item?.attachmentMeta?.url}
              height={videoItem?.height}
              width={videoItem?.width}
              videoStyle={videoItem?.videoStyle}
              boxFit={videoItem?.boxFit}
              boxStyle={videoItem?.boxStyle}
              aspectRatio={videoItem?.aspectRatio}
              showControls={videoItem?.showControls}
              looping={videoItem?.looping}
              loaderWidget={videoItem?.loaderWidget}
              errorWidget={videoItem?.errorWidget}
              playButton={videoItem?.playButton}
              pauseButton={videoItem?.pauseButton}
              autoPlay={videoItem?.autoPlay}
              currentVideoUrl={videoItem?.currentVideoUrl}
            />
          )}
        </>
      )}
    />
  );
};

const styles = StyleSheet.create({
  mediaDimensions: {
    width: layout.window.width,
    height: 325,
    backgroundColor: STYLES.$BACKGROUND_COLORS.DARK,
  },
  swiperView: {
    marginBottom: 30,
  },
  paginationView: {
    position: 'absolute',
    bottom: -5,
  },
  paginationItemStyle: {
    width: 8,
    height: 8,
    marginHorizontal: 4,
  },
});

export default LMCarousel;
