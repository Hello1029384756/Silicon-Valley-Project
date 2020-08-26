import * as React from 'react';
import { Text, View, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';

class SportButton extends React.Component {
  goToSportScreen = () => {
    this.props.navigation.navigate('SportScreen');
  };

  render() {
    return (
      <View>
        <TouchableOpacity style={styles.button} onPress={this.goToSportScreen}>
          <Text style={styles.buttonText}>Sports</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    marginLeft: 195,
    marginTop: 160,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 50,
    backgroundColor: '#00adb5',
    borderWidth:3,
    borderColor: '#eeeeee'
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#393e46'
  },
});

export default withNavigation(SportButton);
