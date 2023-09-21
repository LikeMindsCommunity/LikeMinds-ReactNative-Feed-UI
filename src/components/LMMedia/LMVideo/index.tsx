import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Video from 'react-native-video';
import {LMVideoProps} from './types';
import LMLoader from '../../../base/LMLoader';
import layout from '../../../utils/layout';

const LMVideo = ({
  videoUrl,
  height,
  width,
  videoStyle,
  boxFit,
  boxStyle,
  aspectRatio,
  showControls,
  autoPlay,
  looping,
  loaderWidget,
  pauseButton,
  playButton,
  errorWidget,
  currentVideoUrl,
}: LMVideoProps) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [playingStatus, setPlayingStatus] = useState(true);
  const [viewController, setViewController] = useState(showControls);

  // this throw error and ask for currentVideoUrl if auto play is set true
  if (autoPlay && !currentVideoUrl) {
    throw new Error(
      `Property 'currentVideoUrl' is missing in type '{ videoUrl: string; autoPlay: true; }' but required in type 'LMVideoProps'.`,
    );
  }

  // this handles the visibility of the player controls
  useEffect(() => {
    if (viewController) {
      setTimeout(() => {
        setViewController(false);
      }, 3000);
    }
  }, [viewController]);

  return (
    <View style={StyleSheet.flatten([boxStyle, defaultStyles.videoContainer])}>
      {/* this renders the loader until the first picture of video is displayed */}
      {loading ? (
        <View style={[defaultStyles.videoStyle, defaultStyles.loaderView]}>
          {loaderWidget ? loaderWidget : <LMLoader />}
        </View>
      ) : null}

      {/* this shows a error if the media is not fetched */}
      {error ? (
        <View style={[defaultStyles.videoStyle, defaultStyles.errorView]}>
          {errorWidget ? (
            errorWidget
          ) : (
            <Text style={defaultStyles.errorText}>
              An error occured while fetching the media
            </Text>
          )}
        </View>
      ) : null}

      {/* this renders the video */}
      <TouchableWithoutFeedback onPress={() => setViewController(true)}>
        <Video
          source={{uri: videoUrl}}
          key={videoUrl}
          onReadyForDisplay={() => setLoading(false)}
          onError={() => setError(true)}
          repeat={looping ? looping : true}
          resizeMode={boxFit ? boxFit : defaultStyles.videoStyle.resizeMode}
          playWhenInactive={false}
          playInBackground={false}
          style={StyleSheet.flatten([
            videoStyle,
            {
              width: width ? width : defaultStyles.videoStyle.width,
              height: height ? height : defaultStyles.videoStyle.height,
              aspectRatio: aspectRatio ? aspectRatio : undefined,
            },
          ])}
          paused={
            autoPlay
              ? currentVideoUrl === videoUrl
                ? false
                : true
              : playingStatus
          } // handles the auto play/pause functionality
          muted={
            autoPlay
              ? currentVideoUrl === videoUrl
                ? false
                : true
              : playingStatus
              ? false
              : true
          } // this handles the mute of the video according to the video being played
        />
      </TouchableWithoutFeedback>

      {/* this renders the controls view */}
      {viewController && (
        <TouchableOpacity
          onPress={() => setViewController(false)}
          style={[
            defaultStyles.videoStyle,
            {
              position: 'absolute',
              justifyContent: 'center',
              alignItems: 'center',
            },
          ]}>
          <TouchableOpacity
            style={{zIndex: 5000}}
            onPress={() => {
              setPlayingStatus(!playingStatus);
            }}>
            <>
              {/* this handles the toggle of play pause icon */}
              {playingStatus ? (
                playButton ? (
                  playButton
                ) : (
                  <Image
                    source={require('../../../assets/images/play_icon3x.png')}
                    style={{width: 35, height: 35}}
                  />
                )
              ) : pauseButton ? (
                pauseButton
              ) : (
                <Image
                  source={require('../../../assets/images/pause_icon3x.png')}
                  style={{width: 35, height: 35}}
                />
              )}
            </>
          </TouchableOpacity>
        </TouchableOpacity>
      )}
    </View>
  );
};

const defaultStyles = StyleSheet.create({
  videoContainer: {
    width: layout.window.width,
    backgroundColor: 'black',
  },
  videoStyle: {
    width: layout.window.width,
    height: 325,
    resizeMode: 'contain',
  },
  loaderView: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  errorView: {
    backgroundColor: '#e0e0e0',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  errorText: {
    color: 'red',
  },
});

export default LMVideo;