import * as React from 'react';
import {View, Button, TouchableOpacity, StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader'
import PersonName from '../components/PersonName'
import SportButton from '../components/SportButton'
import AcademicButton from '../components/AcademicButton'
import {withNavigation} from 'react-navigation'
//import { createAppContainer, createSwitchNavigator} from 'react-navigation'; 

class HomeScreen extends React.Component {
  
  render() {
    return (
      <View>
      <AppHeader/>
    <PersonName/>
    <SportButton />
    <AcademicButton/>
      </View>
      
    )
  }
}

export default withNavigation(HomeScreen);