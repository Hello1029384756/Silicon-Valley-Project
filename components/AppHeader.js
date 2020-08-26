import * as React from 'react';
import { Text, View, StyleSheet,TextInput } from 'react-native';


class AppHeader extends React.Component{
  render(){
    return(
      <View style= {styles.textContainer}>
        <Text style={styles.text}>My Progress Tracker</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
    textContainer:{
    backgroundColor: '#eeeeee',
  },
  text:{
    color: '#393e46',
    padding: 20,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  }
})

export default AppHeader;