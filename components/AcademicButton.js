import * as React from 'react';
import { Text, View, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';

class AcademicButton extends React.Component {
  goToAcademicScreen = () => {
    this.props.navigation.navigate('AcademicScreen');
  };

  render() {
    return (
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={this.goToAcademicScreen}>
          <Text style={styles.buttonText}>Academic</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    marginLeft: 30,
    marginTop: 80,
    alignItems: 'center',
    justifyContent: 'center',
    width: 120,
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

export default withNavigation(AcademicButton);
