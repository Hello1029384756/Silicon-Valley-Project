import * as React from 'react';
import { Text, View, Button, TouchableOpacity, StyleSheet } from 'react-native';
import SwimSportEventTable from '../components/SwimSportEventTable'
import {withNavigation} from 'react-navigation'

class SportScreen extends React.Component {
  render() {
    return (
      <View>
        <SwimSportEventTable/>
      </View>
    )
  }
} 

export default withNavigation(SportScreen);