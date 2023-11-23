import {View, StyleSheet} from 'react-native';
import React, {forwardRef} from 'react';
import {LMPostMediaProps} from './types';
import {
  DOCUMENT_ATTACHMENT_TYPE,
  IMAGE_ATTACHMENT_TYPE,
  LINK_ATTACHMENT_TYPE,
  VIDEO_ATTACHMENT_TYPE,
} from '../../../constants/strings';
import {
  LMCarousel,
  LMDocument,
  LMImage,
  LMLinkPreview,
  LMVideo,
} from '../../LMMedia';

const LMPostMedia = forwardRef(
  (
    {
      attachments,
      postMediaStyle,
      imageProps,
      videoProps,
      documentProps,
      carouselProps,
      linkPreviewProps,
    }: LMPostMediaProps,
    ref,
  ) => {
    // this handles the rendering of posts with single attachment
    const renderSingleAttachment = () => {
      switch (attachments[0]?.attachmentType) {
        case IMAGE_ATTACHMENT_TYPE: {
          return (
            <LMImage
              imageUrl={
                attachments[0]?.attachmentMeta.url
                  ? attachments[0]?.attachmentMeta.url
                  : ''
              }
              imageStyle={imageProps?.imageStyle}
              height={imageProps?.height}
              width={imageProps?.width}
              boxStyle={imageProps?.boxStyle}
              boxFit={imageProps?.boxFit}
              aspectRatio={imageProps?.aspectRatio}
              loaderWidget={imageProps?.loaderWidget}
              errorWidget={imageProps?.errorWidget}
            />
          );
        }
        case VIDEO_ATTACHMENT_TYPE: {
          return (
            <LMVideo
              videoUrl={
                attachments[0]?.attachmentMeta.url
                  ? attachments[0]?.attachmentMeta.url
                  : ''
              }
              height={videoProps?.height}
              width={videoProps?.width}
              videoStyle={videoProps?.videoStyle}
              boxFit={videoProps?.boxFit}
              boxStyle={videoProps?.boxStyle}
              aspectRatio={videoProps?.aspectRatio}
              showControls={videoProps?.showControls}
              playButton={videoProps?.playButton}
              pauseButton={videoProps?.pauseButton}
              autoPlay={videoProps?.autoPlay}
              looping={videoProps?.looping}
              loaderWidget={videoProps?.loaderWidget}
              errorWidget={videoProps?.errorWidget}
              currentVideoUrl={videoProps?.currentVideoUrl}
              ref={ref}
            />
          );
        }
        case DOCUMENT_ATTACHMENT_TYPE: {
          return (
            <LMDocument
              attachments={attachments}
              documentIcon={documentProps?.documentIcon}
              showPageCount={documentProps?.showPageCount}
              showDocumentFormat={documentProps?.showDocumentFormat}
              showDocumentSize={documentProps?.showDocumentSize}
              onTap={documentProps?.onTap}
              documentTitleStyle={documentProps?.documentTitleStyle}
              documentDetailStyle={documentProps?.documentDetailStyle}
              documentViewStyle={documentProps?.documentViewStyle}
              defaultIconSize={documentProps?.defaultIconSize}
            />
          );
        }
        case LINK_ATTACHMENT_TYPE: {
          return (
            <LMLinkPreview
              attachments={attachments}
              onTap={linkPreviewProps?.onTap}
              showLinkUrl={linkPreviewProps?.showLinkUrl}
              linkPreviewBoxStyle={linkPreviewProps?.linkPreviewBoxStyle}
              linkImageStyle={linkPreviewProps?.linkImageStyle}
              linkTitleStyle={linkPreviewProps?.linkTitleStyle}
              linkDescriptionStyle={linkPreviewProps?.linkDescriptionStyle}
              linkUrlStyle={linkPreviewProps?.linkUrlStyle}
              showDescription={linkPreviewProps?.showDescription}
              showImage={linkPreviewProps?.showImage}
              showTitle={linkPreviewProps?.showTitle}
            />
          );
        }
        default: {
          break;
        }
      }
    };

    // this functions gets the url of image and video for rendering in its components
    const getUrl = (type: number) => {
      const url = attachments?.find(item => item?.attachmentType === type);
      return url?.attachmentMeta.url ? url?.attachmentMeta.url : '';
    };

    // this gets the required attachment type data to render in its component
    const getData = (type: number, type2?: number) => {
      const data = attachments.filter(
        item => item.attachmentType === type || item.attachmentType === type2,
      );
      return data;
    };

    return (
      <View
        style={StyleSheet.flatten([
          {paddingBottom: 5, paddingTop: 15},
          postMediaStyle,
        ])}>
        {attachments?.length > 1 ? (
          // this section renders if there are multiple attachments
          attachments?.filter(
            item =>
              item?.attachmentType === IMAGE_ATTACHMENT_TYPE ||
              item?.attachmentType === VIDEO_ATTACHMENT_TYPE,
          ).length >= 2 ? (
            <LMCarousel
              attachments={getData(
                IMAGE_ATTACHMENT_TYPE,
                VIDEO_ATTACHMENT_TYPE,
              )}
              carouselStyle={carouselProps?.carouselStyle}
              paginationBoxStyle={carouselProps?.paginationBoxStyle}
              activeIndicatorStyle={carouselProps?.activeIndicatorStyle}
              inactiveIndicatorStyle={carouselProps?.inactiveIndicatorStyle}
              imageItem={carouselProps?.imageItem}
              videoItem={carouselProps?.videoItem}
            />
          ) : (
            // this section renders if there are multiple attachments but the image or video attachments are less than 2
            <>
              {attachments?.find(
                item => item?.attachmentType === IMAGE_ATTACHMENT_TYPE,
              ) && (
                <LMImage
                  imageUrl={getUrl(IMAGE_ATTACHMENT_TYPE)}
                  imageStyle={imageProps?.imageStyle}
                  height={imageProps?.height}
                  width={imageProps?.width}
                  boxStyle={imageProps?.boxStyle}
                  boxFit={imageProps?.boxFit}
                  aspectRatio={imageProps?.aspectRatio}
                  loaderWidget={imageProps?.loaderWidget}
                  errorWidget={imageProps?.errorWidget}
                />
              )}
              {attachments?.find(
                item => item?.attachmentType === VIDEO_ATTACHMENT_TYPE,
              ) && (
                <LMVideo
                  videoUrl={getUrl(VIDEO_ATTACHMENT_TYPE)}
                  height={videoProps?.height}
                  width={videoProps?.width}
                  videoStyle={videoProps?.videoStyle}
                  boxFit={videoProps?.boxFit}
                  boxStyle={videoProps?.boxStyle}
                  aspectRatio={videoProps?.aspectRatio}
                  showControls={videoProps?.showControls}
                  playButton={videoProps?.playButton}
                  pauseButton={videoProps?.pauseButton}
                  autoPlay={videoProps?.autoPlay}
                  looping={videoProps?.looping}
                  loaderWidget={videoProps?.loaderWidget}
                  errorWidget={videoProps?.errorWidget}
                  currentVideoUrl={videoProps?.currentVideoUrl}
                  ref={ref}
                />
              )}
              {attachments?.find(
                item => item?.attachmentType === DOCUMENT_ATTACHMENT_TYPE,
              ) && (
                <LMDocument
                  attachments={getData(DOCUMENT_ATTACHMENT_TYPE)}
                  documentIcon={documentProps?.documentIcon}
                  showPageCount={documentProps?.showPageCount}
                  showDocumentFormat={documentProps?.showDocumentFormat}
                  showDocumentSize={documentProps?.showDocumentSize}
                  onTap={documentProps?.onTap}
                  documentTitleStyle={documentProps?.documentTitleStyle}
                  documentDetailStyle={documentProps?.documentDetailStyle}
                  documentViewStyle={documentProps?.documentViewStyle}
                  defaultIconSize={documentProps?.defaultIconSize}
                />
              )}
              {attachments?.every(
                item => item?.attachmentType === LINK_ATTACHMENT_TYPE,
              ) && (
                <LMLinkPreview
                  attachments={attachments}
                  onTap={linkPreviewProps?.onTap}
                  showLinkUrl={linkPreviewProps?.showLinkUrl}
                  linkPreviewBoxStyle={linkPreviewProps?.linkPreviewBoxStyle}
                  linkImageStyle={linkPreviewProps?.linkImageStyle}
                  linkTitleStyle={linkPreviewProps?.linkTitleStyle}
                  linkDescriptionStyle={linkPreviewProps?.linkDescriptionStyle}
                  linkUrlStyle={linkPreviewProps?.linkUrlStyle}
                  showDescription={linkPreviewProps?.showDescription}
                  showImage={linkPreviewProps?.showImage}
                  showTitle={linkPreviewProps?.showTitle}
                />
              )}
            </>
          )
        ) : (
          // this section renders if there is a single attachment
          <>{renderSingleAttachment()}</>
        )}
      </View>
    );
  },
);

export default LMPostMedia;
