import React from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';
import styleVars from '../styleVars';
import ListItem from './ListItem';

export default function ResultsList({refresh, searchResults, currentSong, setCurrentSong}) {
  return (
    searchResults.length ?
    <FlatList
      data={searchResults}
      renderItem={({item}) => <ListItem key={item.trackId} song={item} currentSong={currentSong} setCurrentSong={setCurrentSong} />}
      keyExtractor={(item) => {
        item.trackId;
      }}
      onRefresh={() => refresh}
      refreshing={false}
      contentContainerStyle={{
        paddingTop: 30,
      }}
    /> : <Text style={styles.searchNoResult}>NO RESULTS</Text>
  );
}
const styles = StyleSheet.create({
  searchNoResult: {
    marginBottom: 15,
    color: styleVars.white,
    fontFamily: 'poppins',
    textAlign: 'center'
  },
});
