import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class Header extends React.Component{
  render(){
    return(
      <View style = {styles.container}>
        <Text style = {styles.displayText}>Dictionary App</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  displayText:{
    backgroundColor: 'purple',
    color: 'white',
    textAlign: 'center',
    fontSize: 15
  }
})