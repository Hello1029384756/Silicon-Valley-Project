import * as React from 'react';
import { DataTable } from 'react-native-paper';
import { Text, View, StyleSheet, TextInput,TouchableOpacity } from 'react-native';

class AcademicGradeTable extends React.Component {
  constructor() {
    super()
      this.state={
        value: ""
      }
      this.handleChangeText = this.handleChangeText.bind(this)
  }

  handleChangeText(newText) {
    this.setState({
      value: newText
    })
  }

  render() {
    return (
      <View>
      <Text style={{color: 'white',fontWeight:'bold'}}>Subject----------Date Test Taken------Score/%</Text>
        ________________________________________
        <TextInput style={{ color: 'white',marginLeft:10, width: 80, height: 20,borderColor: '#eeeeee',borderWidth:1}}></TextInput><TextInput style={{color: 'white', marginLeft:140,borderColor: '#eeeeee', width: 50, height: 30, marginTop:-15,borderWidth:1}}></TextInput><TextInput style={{color: 'white', marginLeft:220, width: 70, borderColor: '#eeeeee',height: 30,marginTop:-30,borderWidth:1}}></TextInput>
        ________________________________________
       <TextInput style={{ color: 'white',marginLeft:10, width: 80, height: 20,borderColor: '#eeeeee',borderWidth:1}}></TextInput><TextInput style={{color: 'white', marginLeft:140,borderColor: '#eeeeee', width: 50, height: 30, marginTop:-15,borderWidth:1}}></TextInput><TextInput style={{color: 'white', marginLeft:220, width: 70, borderColor: '#eeeeee',height: 30,marginTop:-30,borderWidth:1}}></TextInput>
        ________________________________________
<TextInput style={{ color: 'white',marginLeft:10, width: 80, height: 20,borderColor: '#eeeeee',borderWidth:1}}></TextInput><TextInput style={{color: 'white', marginLeft:140,borderColor: '#eeeeee', width: 50, height: 30, marginTop:-15,borderWidth:1}}></TextInput><TextInput style={{color: 'white', marginLeft:220, width: 70, borderColor: '#eeeeee',height: 30,marginTop:-30,borderWidth:1}}></TextInput>
        ________________________________________
<TextInput style={{ color: 'white',marginLeft:10, width: 80, height: 20,borderColor: '#eeeeee',borderWidth:1}}></TextInput><TextInput style={{color: 'white', marginLeft:140,borderColor: '#eeeeee', width: 50, height: 30, marginTop:-15,borderWidth:1}}></TextInput><TextInput style={{color: 'white', marginLeft:220, width: 70, borderColor: '#eeeeee',height: 30,marginTop:-30,borderWidth:1}}></TextInput>
        _______________________________________
<TextInput style={{ color: 'white',marginLeft:10, width: 80, height: 20,borderColor: '#eeeeee',borderWidth:1}}></TextInput><TextInput style={{color: 'white', marginLeft:140,borderColor: '#eeeeee', width: 50, height: 30, marginTop:-15,borderWidth:1}}></TextInput><TextInput style={{color: 'white', marginLeft:220, width: 70, borderColor: '#eeeeee',height: 30,marginTop:-30,borderWidth:1}}></TextInput>
        ________________________________________
<TextInput style={{ color: 'white',marginLeft:10, width: 80, height: 20,borderColor: '#eeeeee',borderWidth:1}}></TextInput><TextInput style={{color: 'white', marginLeft:140,borderColor: '#eeeeee', width: 50, height: 30, marginTop:-15,borderWidth:1}}></TextInput><TextInput style={{color: 'white', marginLeft:220, width: 70, borderColor: '#eeeeee',height: 30,marginTop:-30,borderWidth:1}}></TextInput>
        ________________________________________
<TextInput style={{ color: 'white',marginLeft:10, width: 80, height: 20,borderColor: '#eeeeee',borderWidth:1}}></TextInput><TextInput style={{color: 'white', marginLeft:140,borderColor: '#eeeeee', width: 50, height: 30, marginTop:-15,borderWidth:1}}></TextInput><TextInput style={{color: 'white', marginLeft:220, width: 70, borderColor: '#eeeeee',height: 30,marginTop:-30,borderWidth:1}}></TextInput>
        ________________________________________
    <TextInput style={{ color: 'white',marginLeft:10, width: 80, height: 20,borderColor: '#eeeeee',borderWidth:1}}></TextInput><TextInput style={{color: 'white', marginLeft:140,borderColor: '#eeeeee', width: 50, height: 30, marginTop:-15,borderWidth:1}}></TextInput><TextInput style={{color: 'white', marginLeft:220, width: 70, borderColor: '#eeeeee',height: 30,marginTop:-30,borderWidth:1}}></TextInput>
        _______________________________________
<TextInput style={{ color: 'white',marginLeft:10, width: 80, height: 20,borderColor: '#eeeeee',borderWidth:1}}></TextInput><TextInput style={{color: 'white', marginLeft:140,borderColor: '#eeeeee', width: 50, height: 30, marginTop:-15,borderWidth:1}}></TextInput><TextInput style={{color: 'white', marginLeft:220, width: 70, borderColor: '#eeeeee',height: 30,marginTop:-30,borderWidth:1}}></TextInput>
        ________________________________________
<TextInput style={{ color: 'white',marginLeft:10, width: 80, height: 20,borderColor: '#eeeeee',borderWidth:1}}></TextInput><TextInput style={{color: 'white', marginLeft:140,borderColor: '#eeeeee', width: 50, height: 30, marginTop:-15,borderWidth:1}}></TextInput><TextInput style={{color: 'white', marginLeft:220, width: 70, borderColor: '#eeeeee',height: 30,marginTop:-30,borderWidth:1}}></TextInput>
        ________________________________________
<TextInput style={{ color: 'white',marginLeft:10, width: 80, height: 20,borderColor: '#eeeeee',borderWidth:1}}></TextInput><TextInput style={{color: 'white', marginLeft:140,borderColor: '#eeeeee', width: 50, height: 30, marginTop:-15,borderWidth:1}}></TextInput><TextInput style={{color: 'white', marginLeft:220, width: 70, borderColor: '#eeeeee',height: 30,marginTop:-30,borderWidth:1}}></TextInput>
        </View>
    );
  }
}
export default AcademicGradeTable;
