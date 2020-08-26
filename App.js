import * as React from 'react';
import { View } from 'react-native';
import HomeScreen from './screen/HomeScreen';
import SportScreen from './screen/SportScreen';
import AcademicScreen from './screen/AcademicScreen';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

export default class App extends React.Component {
  render() {
    return (
      <View style={{backgroundColor:'#222831', height: 900}}>
        <AppContainer />
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  SportScreen: SportScreen,
  AcademicScreen: AcademicScreen,
});

const AppContainer = createAppContainer(AppNavigator);
