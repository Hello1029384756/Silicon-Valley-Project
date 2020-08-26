import * as React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';

class PersonName extends React.Component {
  constructor () {
    super()
    this.state = {
    }
    this.handleUsernameText = this.handleUsernameText.bind(this)
    this.handleAgeText = this.handleAgeText.bind(this)
  }

  handleUsernameText(newText) {
    this.setState ({
        value: newText
    })
  }

  handleAgeText(newText1) {
    this.setState ({
        value: newText1
    })
  }

  render() {
    return (
      <View>
        <Text style={styles.username}>Name: {this.state.value}</Text>
        <TextInput
        style={styles.input}
        defaultValue = {this.state.value}/>
        <Text style={styles.age}>Age: {this.state.value}</Text>
        <TextInput
        style={styles.ageInput}
        defaultValue = {this.state.value}/>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
username: {
      marginLeft: 30,
      marginTop: 10,
      fontWeight:'bold',
      fontSize: 15,
      color:'#eeeeee'
  }, input: {
    fontWeight: 'bold',
    width: 100,
    marginLeft: 79,
    marginTop: -19,
    color:'#eeeeee'
  }, ageInput: {
    fontWeight: 'bold',
    width: 30,
    marginLeft: 66,
    marginTop: -19,
    color:'#eeeeee'
  }, age: {
    marginLeft: 30,
      marginTop: 10,
      fontWeight:'bold',
      fontSize: 15,
      color:'#eeeeee'
  }
})

export default PersonName;