import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import Route from "./src/screens/Route";
import NavigationService from "./src/NavigationService";

export default class App extends React.Component {

  render () {
    return (
        <Route ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }} />
    )
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
