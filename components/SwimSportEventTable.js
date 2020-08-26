import * as React from 'react';
import { DataTable } from 'react-native-paper';
import { Text, View, StyleSheet, TextInput } from 'react-native';

class SwimSportEventTable extends React.Component {
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
      <Text style={{fontWeight:'bold', color: 'white'}}>Event--------------------Date--------Best Time</Text>
        ________________________________________
        <Text style={{color: 'white'}}>50 FreeStyle     </Text><TextInput style={{fontColor: 'white',color: 'white',borderColor: '#eeeeee', marginLeft:140, width: 50, height: 30, marginTop:-15,borderWidth:1}}></TextInput><TextInput style={{ fontColor: 'white',borderColor: '#eeeeee',color: 'white', marginLeft:220, width: 70, height: 30,marginTop:-30,borderWidth:1}}></TextInput>
        ________________________________________
        <Text style={{color: 'white'}}>100 FreeStyle    </Text><TextInput style={{borderColor: '#eeeeee',color: 'white', marginLeft:140, width: 50, height: 30, marginTop:-15,borderWidth:1}}></TextInput><TextInput style={{borderColor: '#eeeeee',color: 'white', marginLeft:220, width: 70, height: 30,marginTop:-30,borderWidth:1}}></TextInput>
        ________________________________________
        <Text style={{color: 'white'}}>200 FreeStyle    </Text><TextInput style={{borderColor: '#eeeeee', color: 'white',marginLeft:140, width: 50, height: 30, marginTop:-15,borderWidth:1}}></TextInput><TextInput style={{ color: 'white',borderColor: '#eeeeee',marginLeft:220, width: 70, height: 30,marginTop:-30,borderWidth:1}}></TextInput>
        ________________________________________
        <Text style={{color: 'white'}}>100 BackStroke   </Text><TextInput style={{borderColor: '#eeeeee',color: 'white', marginLeft:140, width: 50, height: 30, marginTop:-15,borderWidth:1}}></TextInput><TextInput style={{color: 'white', borderColor: '#eeeeee',marginLeft:220, width: 70, height: 30,marginTop:-30,borderWidth:1}}></TextInput>
        _______________________________________
        <Text style={{color: 'white'}}>200 BackStroke   </Text><TextInput style={{color: 'white',borderColor: '#eeeeee', marginLeft:140, width: 50, height: 30, marginTop:-15,borderWidth:1}}></TextInput><TextInput style={{ color: 'white',borderColor: '#eeeeee',marginLeft:220, width: 70, height: 30,marginTop:-30,borderWidth:1}}></TextInput>
        ________________________________________
        <Text style={{color: 'white'}}>100 BreastStroke </Text><TextInput style={{ color: 'white',borderColor: '#eeeeee',marginLeft:140, width: 50, height: 30, marginTop:-15,borderWidth:1}}></TextInput><TextInput style={{color: 'white', borderColor: '#eeeeee',marginLeft:220, width: 70, height: 30,marginTop:-30,borderWidth:1}}></TextInput>
        ________________________________________
        <Text style={{color: 'white'}}>200 BreastStroke </Text><TextInput style={{ color: 'white',borderColor: '#eeeeee',marginLeft:140, width: 50, height: 30, marginTop:-15,borderWidth:1}}></TextInput><TextInput style={{color: 'white',borderColor: '#eeeeee', marginLeft:220, width: 70, height: 30,marginTop:-30,borderWidth:1}}></TextInput>
        ________________________________________
        <Text style={{color: 'white'}}>100 ButterFly    </Text><TextInput style={{color: 'white',borderColor: '#eeeeee', marginLeft:140, width: 50, height: 30, marginTop:-15,borderWidth:1}}></TextInput><TextInput style={{borderColor: '#eeeeee',color: 'white', marginLeft:220, width: 70, height: 30,marginTop:-30,borderWidth:1}}></TextInput>
        _______________________________________
        <Text style={{color: 'white'}}>200 ButterFly    </Text><TextInput style={{color: 'white',borderColor: '#eeeeee', marginLeft:140, width: 50, height: 30, marginTop:-15,borderWidth:1}}></TextInput><TextInput style={{ borderColor: '#eeeeee',color: 'white',marginLeft:220, width: 70, height: 30,marginTop:-30,borderWidth:1}}></TextInput>
        ________________________________________
        <Text style={{color: 'white'}}>200 IM           </Text><TextInput style={{color: 'white',borderColor: '#eeeeee', marginLeft:140, width: 50, height: 30, marginTop:-15,borderWidth:1}}></TextInput><TextInput style={{borderColor: '#eeeeee',color: 'white', marginLeft:220, width: 70, height: 30,marginTop:-30,borderWidth:1}}></TextInput>
        ________________________________________
        <Text style={{color: 'white'}}>400 IM           </Text><TextInput style={{color: 'white',borderColor: '#eeeeee', marginLeft:140, width: 50, height: 30, marginTop:-15,borderWidth:1}}></TextInput><TextInput style={{borderColor: '#eeeeee',color: 'white', marginLeft:220, width: 70, height: 30,marginTop:-30,borderWidth:1}}></TextInput>
        </View>
    );
  }
}
export default SwimSportEventTable;
