
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import LinearBackground from './components/LinearBackground';
import MediaPlayer from './components/MediaPlayer';
import ResultsList from './components/ResultsList';
import SearchInput from './components/SearchInput';


SplashScreen.preventAutoHideAsync();
export default function App() {
  useEffect(() => {
    Font.loadAsync({
      'barricada': require('./assets/fonts/BarricadaRegular.ttf'),
      'poppins': require('./assets/fonts/Poppins-Medium.ttf'),
      'poppinsLight': require('./assets/fonts/Poppins-Light.ttf'),
      'poppinsSemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
      'poppinsBold': require('./assets/fonts/Poppins-Bold.ttf'),
    })
    .then(() => {
     setFontsLoaded(true)
    }) 
  }, [])
  useEffect(() => {
    Asset.loadAsync([
      require('./assets/play.png'),
      require('./assets/play-square.png'),
      require('./assets/pause-square.png'),
    ])
    .then(() => {
     setImagesLoaded(true)
    }) 
  }, [])
  const [searchResults, setSearchResults] = useState([])
  const [currentSong, setCurrentSong] = useState(null)
  const [fontsLoaded, setFontsLoaded] = useState(false)
  const [imagesLoaded, setImagesLoaded] = useState(false)

  if (!fontsLoaded || !imagesLoaded) {
    return null;
  }
  SplashScreen.hideAsync();
  return (
    <View style={styles.container}>
      <LinearBackground>
        <SearchInput setSearchResults={setSearchResults} setCurrentSong={setCurrentSong} />
        <ResultsList searchResults={searchResults} currentSong={currentSong} setCurrentSong={setCurrentSong} />
      </LinearBackground>
      <MediaPlayer currentSong={currentSong}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
    padding: 0,
  },
});
