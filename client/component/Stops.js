import React from 'react';
import { StyleSheet, Text, View,FlatList, Image, TextInput, TouchableHighlight,ScrollView,Modal } from 'react-native';
import MapView from 'react-native-maps';

export default class Stops extends React.Component {
    static navigationOptions = {
        title: 'Stops',
    };
  constructor(props) {
    super(props);
    this.state = {
        modalVisible: false,
    };
 
  }


  goDetails(){
    this.props.navigation.navigate('Details');
  }

  render() {
    return (
      <View style={styles.container}>
      <MapView
    initialRegion={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  />
        <FlatList
        
          data={[
           
            {
              albumId: 1,
              id: 2,
              title: "reprehenderit est deserunt velit ipsam",
              url: "http://placehold.it/600/771796",
              thumbnailUrl: "http://placehold.it/150/771796"
            },
            {
              albumId: 1,
              id: 2,
              title: "reprehenderit est deserunt velit ipsam",
              url: "http://placehold.it/600/771796",
              thumbnailUrl: "http://placehold.it/150/771796"
            },
            {
              albumId: 1,
              id: 5,
              title: "natus nisi omnis corporis facere molestiae rerum in",
              url: "http://placehold.it/600/f66b97",
              thumbnailUrl: "http://placehold.it/150/f66b97"
            }
          ]}
          renderItem={({ item }) =>
          <TouchableHighlight
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate('Details', {
              item : item
            });
          }} 
          >
            <View style={styles.container}>
            
            <Image
              style={styles.imagesStyle}
              source={{ uri: item.thumbnailUrl }}
            />
            <Text style={styles.title}>{item.title}</Text>
          </View>
        </TouchableHighlight>
          }
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    margin:2,
    borderRadius: 5
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#000",
    marginTop: 25,
    marginLeft: 4,
    width: "75%"
  },
  imagesStyle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 20,
  }, 
  imagesStyleModal: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 20,
  },
  textDesign: {
    width: "80%",
    color: "#333",
    marginBottom: 20
  },
  closeIt: {
    padding: 10,
    marginLeft: "80%",
    marginTop: 5
  }
});
