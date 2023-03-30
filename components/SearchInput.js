import axios from 'axios';

import React, { useRef, useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export default function SearchInput({setSearchResults, setCurrentSong}) {
  const [searchStr, setSearchStr] = useState('')
  const timeout = useRef(null);
  const searchLookup = (str) => {
    setCurrentSong(null);
    setSearchStr(str);
    // Debounce api requests
    timeout.current = setTimeout(() => {
      axios.get(`https://itunes.apple.com/search?entity=song&attribute=artistTerm&media=music&limit=25&term=${str}`).then((response) => {
        setSearchResults(response.data.results);
      })
    }, 150);
  }
  
  return (
    <View
      style={{ marginTop: 30, padding: 20 }}
    >
      <TextInput
        style={[styles.formInput]}
        onChangeText={searchLookup}
        onSubmitEditing={() => { }}
        placeholder="Search for artist name"
        placeholderTextColor="white"
        value={searchStr}
        autoCompleteType="off"
        autoCorrect={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  formInput: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 24,
    paddingRight: 24,
    borderWidth: 2,
    borderColor: 'white',
    fontFamily: 'poppins',
    fontSize: 18,
    color: 'white',
  },
});