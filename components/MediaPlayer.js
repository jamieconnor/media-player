import { Audio } from 'expo-av';
import { BlurView } from 'expo-blur';
import React, { useRef, useState } from 'react';
import { Animated, Image, StyleSheet, TouchableOpacity } from 'react-native';
const playSquare = require('../assets/play-square.png');
const pauseSquare = require('../assets/pause-square.png');

export default function MediaPlayer({currentSong, setCurrentSong}) {
  const [playing, setPlaying] = useState(false)
  // const [animationValue, setAnimationValue] = useState(-100)
  const animationValue = useRef(new Animated.Value(-100)).current;
  const player = useRef(new Audio.Sound());
  React.useEffect(() => {
    // player.current.addEventListener('ended', () => {
    //   setPlaying(false);
    //   player.current.src = null;
    //   setCurrentSong(null);
    // });
  }, []);
  React.useEffect(() => {
    setPlaying(false);
    if (currentSong) {
      fadeIn();
      try {
        player.current.unloadAsync().then(() => {
          player.current.loadAsync({ uri: currentSong.previewUrl})
        })
      } catch (error) {
        console.log(error);
      }
    } else {
      fadeOut();
    }
  }, [currentSong]);

  const play = () => {
    try {
      player.current.playAsync()
    } catch (error) {
      console.log(error);
    }
    setPlaying(true);
  }
  
  const pause = () => {
    player.current.pauseAsync()
    setPlaying(false);
  }

  const fadeIn = () => {
    Animated.timing(
      animationValue,
      {
        toValue: 0,
        duration: 400,
        useNativeDriver: false
      },
    ).start();
  };

  const fadeOut = () => {
    Animated.timing(
      animationValue,
      {
        toValue: -100,
        duration: 400,
        useNativeDriver: false,
      },
    ).start();
  };
  
  return (
    <Animated.View
      style={[
        styles.mediaPlayerContainer,
        {
          bottom: animationValue,
        },
    ]}>
      <BlurView
        intensity={50}
        style={styles.blurContainer}
        tint="light"
      >
        { animationValue.current }
        {
          !playing &&
          <TouchableOpacity
            style={styles.listItem}
            onPress={play}
          >
            <Image source={playSquare} style={styles.playIcon}/>
          </TouchableOpacity>
        }
        {
          playing && 
          <TouchableOpacity
            style={styles.listItem}
            onPress={pause}
          >
            <Image source={pauseSquare} style={styles.playIcon} />
          </TouchableOpacity>
        }
      </BlurView>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  mediaPlayerContainer: {
    position: 'absolute',
    left: 0,
    bottom: -100,
    width: '100%',
    height: 100,
    zIndex: 100
  },
  blurContainer: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
  },
  playIcon: {
    marginTop: 10,
    width: 80,
    height: 80,
  }
});