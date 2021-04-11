import React, {Component, useState} from 'react';
import {Platform, StyleSheet, Text, View, TextInput} from 'react-native';
import constants from './constants';

 const SearchBox = () => {
    const [text, setText] = useState('');
    return (
      <View style={styles.SearchBoxStyle}>
        <TextInput
          placeholder= "Please Type in for Search"
          onChangeText={text => setText(text)}
          defaultValue={text}
        />
        <Text>
          {text}
        </Text>
      </View>
    );
 }

 const styles = StyleSheet.create({
    SearchBoxStyle: {
        backgroundColor: "#FFFF",
        paddingHorizontal: 24,
        marginBottom: 12,
        borderRadius: 12
      },
 })

 export default SearchBox;
