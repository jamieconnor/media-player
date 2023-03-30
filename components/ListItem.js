import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import styleVars from '../styleVars';
import ListItemImage from './ListItemImage';
const arrowPurple = require('../assets/arrow-purple.png');

export default function ListItem({song, currentSong, setCurrentSong}) {
  const playing = currentSong && song.trackId === currentSong.trackId;
  return (
  <TouchableOpacity
    style={styles.listItem}
    onPress={() => setCurrentSong(song)}
  >
    {
      song.artworkUrl100 &&
      <ListItemImage imageSrc={song.artworkUrl100}  playing={playing} />
    }
    <View style={styles.listItemText}>
      <View style={{ flex: 1, justifyContent: 'space-between' }}>
        <View style={{ minHeight: 72 }}>
          <Text style={styles.listItemTextName}>{song.artistName}</Text>
          <Text style={styles.listItemTextTrack}>{song.trackName}</Text>
        </View>
      </View>

      <View style={styles.listItemTextArrowContainer}>
        <Image
          source={arrowPurple}
          style={styles.listItemTextArrow}
        />
      </View>
    </View>
  </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  listItem: {
    flex: 1,
    flexDirection: 'row',
    marginRight: 15,
    marginTop: 15,
  },
  listItemText: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: styleVars.white,
    borderTopRightRadius: 60,
    borderBottomRightRadius: 60,
    padding: 15,
    paddingRight: 15,
    minHeight: 120,
  },
  listItemTextName: {
    fontFamily: 'poppinsSemiBold',
    fontSize: 16,
    lineHeight: 18,
    color: styleVars.grey,
    paddingBottom: 3,
    paddingRight: 5,
  },
  listItemTextTrack: {
    fontFamily: 'poppins',
    fontSize: 14,
    lineHeight: 16,
    color: styleVars.grey,
    paddingRight: 29,
    paddingBottom: 2,
  },
  listItemTextArrowContainer: {
    position: 'absolute',
    flex: 1,
    justifyContent: 'center',
    height: '100%',
    width: 21,
    right: 18,
    top: 15,
  },
  listItemTextArrow: {
    width: 21,
    height: 17,
  },
});
