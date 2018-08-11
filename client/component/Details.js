import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableHighlight,ScrollView } from 'react-native';
import MapView from 'react-native-maps';


export default class Details extends React.Component {
    static navigationOptions = {
        title: 'Details',
    };
  constructor(props) {
    super(props);
  }

  render() {
    // recieve data 
    const { navigation } = this.props;
    const theId = navigation.getParam('theId', 'NO-ID');
    const name = navigation.getParam('nameStop', 'No name define');
    const description = navigation.getParam('description', 'No name define');

    return (
      <View>
         <View style={styles.container}>
            <Text style={styles.title}> {name} </Text>
            <Text> {description} </Text>
        </View>
        <MapView
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>
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
