import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableHighlight,
  ScrollView
} from "react-native";
import MapView from "react-native-maps";
import { Button } from "native-base";

export default class Details extends React.Component {
  static navigationOptions = {
    title: "Details"
  };
  constructor(props) {
    super(props);
  }

  render() {
    // recieve data
    const { navigation } = this.props;
    const item = navigation.getParam("item", {});

    console.log(" The item ", item);
    return (
      <ScrollView>
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

          {/* Comment input */}
            <TextInput
              
              style={styles.inputStyle}
        
              onFocus={()=> {
                this.props.navigation.navigate("CommentStop")
              }}
              placeholder="Be nice !!!"
            />
            {/* <TouchableHighlight
              onPress={()=> {
                this.props.navigation.navigate("CommentStop")
              }}>
              <Text style={styles.button}>Comment</Text>
            </TouchableHighlight> */}

          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    width: "100%",
    height: "100%"
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000",
    marginTop: 2
  },
  button: {
    alignItems: "center",
    marginTop: 20,
    padding: 10,
    width: 300
  },
  imagesStyle: {
    width: "100%",
    height: 140
  },
  inputStyle: {
    height: 40,
    width: '90%',
    borderColor: '#ccc',
    borderWidth: 0.4,
    paddingLeft: 10,
    marginTop: 10,
    bottom:0
  }
});
