import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class App extends React.Component {
  iterateElement(list){
    console.log("list");
    const elements=list.map((element)=>{
      console.log(element);
      return (
        <Text>Item: {element}</Text>
      );
    })
    return elements;
  }

  render() {
    const list=["what", "the", "hell"]
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        { this.iterateElement(list) }
        <Text>End Of List</Text>
        <TextInput
            style={styles.textInput}
            placeholder="Type here to translate!"
            onChangeText={(text) => this.setState({text})}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput:{
    width:300,
    height:40
  }

});
