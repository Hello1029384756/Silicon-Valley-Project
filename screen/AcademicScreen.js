import * as React from 'react';
import { Text, View, Button, TouchableOpacity, StyleSheet } from 'react-native';
import AcademicGradeTable from '../components/AcademicGradeTable' 
import {withNavigation} from 'react-navigation'

class AcademicScreen extends React.Component {
  render() {
    return (
      <View>
        <AcademicGradeTable/>
      </View>
    )
  }
} 

export default withNavigation(AcademicScreen);