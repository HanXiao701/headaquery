/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component, useState} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TextInput,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import constants from './component/constants';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const Header = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.header}>
      <Image
      style={styles.headerSetting}
      source={require('./img/setting.png')}
      />
      <Text
        style={[
          styles.headerTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
      <SearchBox/>
    </View>
  );
};
var inputText = "";
var list = ['a','b','c']

const ChangeKeyword = (text) =>{
  inputText = text
  let displayList = []
  if(text.length > 0){
    displayList = []
    for(var i in list){
      if(list[i] == text){
        displayList.push(list[i]);
      }
    }
    alert(displayList);
  }else{
    displayList = list;
  }
  return (
    <View>
      {
        displayList.map((item, id) =>{
          return(
            <Section title={id}>
              {item}
            </Section>
          )
        }
        )
      }
      <Section title="TestTitle1">
            Edit <Text style={styles.highlight}>App.js</Text> to change this
            screen and then come back to see your edits.
      </Section>
    </View>
  )
};

const SearchBox = () => {
  const [text, setText] = useState('');
  return (
    <View style={styles.SearchBoxStyle}>
      <TextInput
        placeholder= "Please Type in for Search"
        onChangeText={(Text) => {ChangeKeyword(Text)}}
        defaultValue={text}
      />
    </View>
  );
}

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header title="HEADAQUERY">
        </Header>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <ChangeKeyword></ChangeKeyword>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#DAC9A6",
    paddingHorizontal: 24,
  },
  headerSetting: {
    height: 40,
    width: 40,
    position: "absolute",
  },
  headerTitle: {
    justifyContent : "center",
    textAlign : "center",
    fontSize: 30,
    fontWeight: '600',
  },
  SearchBoxStyle: {
    backgroundColor: "#FFFF",
    paddingHorizontal: 24,
    marginBottom: 12,
    borderRadius: 12
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
