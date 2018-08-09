import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableHighlight,ScrollView } from 'react-native';

export default class Profil extends React.Component {
    static navigationOptions = {
        title: 'Profil',
    };
  constructor(props) {
    super(props);
  }

  render() {
   
    return (
      <ScrollView>
        <View style={styles.container}>
            <Text style={styles.title}> My name 's Hulio :) </Text>
          
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ccc',
    alignItems: 'center',
    width: '100%',
    borderColor: '#000',
    height: '100%'
  },
 
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: "#000",
    marginTop: 60
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#336699',
    marginTop: 20,
    padding: 10,
    width: 300,
  }
});
