import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import LMText from '../../base/LMText';
import {LMPostContent} from '../LMPost';
import layout from '../../utils/layout';
import {LMCommentProps} from './types';
import LMButton from '../../base/LMButton';

const LMComment = ({
  likeIconButton,
  likeTextButton,
  comment,
  onTapViewMore,
}: LMCommentProps) => {
  const MAX_LINES = 3;
  const [showText, setShowText] = useState(false);
  const [numberOfLines, setNumberOfLines] = useState<number>();
  const [showMoreButton, setShowMoreButton] = useState(false);

  // this handles the show more functionality
  const onTextLayout = useCallback(
    (e: any) => {
      if (e.nativeEvent.lines.length > MAX_LINES && !showText) {
        setShowMoreButton(true);
        setNumberOfLines(MAX_LINES);
      }
    },
    [showText],
  );

  // this handles the visiblity of whole post content and trimmed text upto maximum line
  useEffect(() => {
    if (showMoreButton) {
      setNumberOfLines(showText ? undefined : MAX_LINES);
    }
  }, [showText, showMoreButton]);
  return (
    <View style={{ paddingHorizontal: 10,width: layout.window.width}}>
      <LMText text={'comment.user.name'} />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
        <View style={{width: '85%'}}>
          {/* post content text */}
          <Text
            style={StyleSheet.flatten([])}
            onTextLayout={onTextLayout}
            numberOfLines={numberOfLines}>
            {comment?.text}
          </Text>
          {/* show more button section */}
          {showMoreButton && (
            <TouchableOpacity
              disabled={showText ? true : false}
              onPress={() => setShowText(showText => !showText)}
              accessibilityRole="button">
              <LMText text={showText ? '' : 'Show More'} />
            </TouchableOpacity>
          )}
        </View>
        <TouchableOpacity style={{width: '8%'}}>
          <Image
            source={require('../../assets/images/three_dots3x.png')}
            resizeMode="contain"
            style={styles.iconSize}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.alignRow}>
        <LMButton
          onTap={() => {}}
          icon={{
            assetPath: require('../../assets/images/heart_icon3x.png'),
            type: 'png',
            width:18,
            height:18
          }}
          buttonStyle={{borderWidth: 0}}
        />
        <LMButton
          onTap={() => {}}
          text={{text: 'Like', textStyle:{fontSize:13, marginLeft:5}}}
          buttonStyle={{borderWidth: 0}}
        />
        <LMText text=' | Reply' textStyle={{fontSize: 13}} />
        <Image
          source={require('../../assets/images/single_dot3x.png')}
          style={{width: 5, height: 5, marginHorizontal:5}}
        />
        <LMButton
          onTap={() => {}}
          text={{text: '17 Replies', textStyle:{fontSize:13}}}
          buttonStyle={{borderWidth: 0}}
        />
      </View>
      <View style={{marginLeft: 30}}>
        <FlatList
          data={comment?.replies}
          renderItem={(item: any) => {
            return <LMComment comment={item} />;
          }}
        />
      </View>
      {/* <LMButton
        onTap={() => {}}
        text={{text: 'View more replies'}}
        buttonStyle={{borderWidth: 0, alignSelf: 'flex-start', marginLeft: 25}}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  iconSize: {
    width: layout.normalize(22),
    height: layout.normalize(22),
  },
  alignRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default LMComment;
