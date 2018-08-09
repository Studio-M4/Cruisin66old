import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableHighlight,ScrollView } from 'react-native';

export default class Home extends React.Component {
    static navigationOptions = {
        title: 'Details',
    };
  constructor(props) {
    super(props);
  }

  render() {
    const { navigation } = this.props;
    const theId = navigation.getParam('theId', 'NO-ID');
    const name = navigation.getParam('nameStop', 'No name define');
    const description = navigation.getParam('description', 'No name define');

    return (
      <ScrollView>
        <View style={styles.container}>
            <Text style={styles.title}> {name} </Text>
            <Text> {description} </Text>
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
