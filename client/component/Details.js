import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableHighlight,
  ScrollView,FlatList
} from "react-native";
import MapView from "react-native-maps";
import { Rating } from 'react-native-elements';
import { Button } from "native-base";

export default class Details extends React.Component {
  static navigationOptions = {
    title: "Details",
  };
  constructor(props) {
    super(props);
  }

  render() {
    // recieve data
    const { navigation } = this.props;
    const item = navigation.getParam("item", {});

    return (
      <View>
        <View>
          
          <Image
            style={styles.imagesStyle}
            
            source={{ uri: item.thumbnailUr }}
          />
          <View style={styles.container}>
            <Text style={styles.title}> {item.title} </Text>
            <Text> {item.title} </Text>

            {/* <MapView
              initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
              }}
            /> */}


            <Rating
            imageSize={30}
            readonly
            startingValue={4.5}
            />
          </View>
        </View>
       
          <ScrollView>
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
            },{
              albumId: 1,
              id: 2,
              title: "reprehenderit est deserunt velit ipsam",
              url: "http://placehold.it/600/771796",
              thumbnailUrl: "http://placehold.it/150/771796"
            },{
              albumId: 1,
              id: 2,
              title: "reprehenderit est deserunt velit ipsam",
              url: "http://placehold.it/600/771796",
              thumbnailUrl: "http://placehold.it/150/771796"
            }
          ]}
          renderItem={({ item }) =>
          <TouchableHighlight>
            <View style={styles.container2}>
            <Image
              style={styles.imagesStyle2}
              source={{ uri: item.thumbnailUrl }}
            />
            <Text style={styles.title}>{item.title}</Text>
          </View>
        </TouchableHighlight>
          }
          keyExtractor={(item, index) => index.toString()}
        />
      </ScrollView>
      <TextInput
            style={styles.inputStyle}
            onFocus={()=> {
              this.props.navigation.navigate("CommentStop")
            }}
            placeholder="Be nice !!!"
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "100%",
    height: "30%",
    backgroundColor:"#fff"
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000",
    marginTop: 2
  },
  imagesStyle: {
    width: "100%",
    height: 140,
    backgroundColor:"#fff",
  },
  inputStyle: {
    height: 40,
    width: '90%',
    borderColor: '#ccc',
    borderWidth: 0.4,
    paddingLeft: 10,
    marginTop: 10,
    bottom:0
  },
  container2: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    backgroundColor:'#fff',
    margin:4,
    borderRadius: 5
  },
  title: {
    fontSize: 14,
    color: "#777",
    marginTop: 7,
    padding:9,
    borderRadius:25,
    marginLeft: 4,
    width: "80%",
    height:30
  },
  imagesStyle2: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 3,
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
  },
  inputStyle: {
    height: 40,
    width: '90%',
    borderColor: '#ccc',
    borderWidth: 0.4,
    paddingLeft: 10,
    marginTop: 10,
    bottom:4
  }
});
