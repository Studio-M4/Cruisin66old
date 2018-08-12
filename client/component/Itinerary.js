import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableHighlight,
  ScrollView,
  Modal,
  FlatList,
  Button
} from "react-native";


export default class Itinerary extends React.Component {
  static navigationOptions = {
    title: "Itenary"
  };
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
    
        <FlatList
          data={[
            {
              albumId: 1,
              id: 1,
              title: "accusamus beatae ad facilis cum similique qui sunt",
              url: "http://placehold.it/600/92c952",
              thumbnailUrl: "http://placehold.it/150/92c952"
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
              id: 2,
              title: "reprehenderit est deserunt velit ipsam",
              url: "http://placehold.it/600/771796",
              thumbnailUrl: "http://placehold.it/150/771796"
            },
            {
              albumId: 1,
              id: 3,
              title: "officia porro iure quia iusto qui ipsa ut modi",
              url: "http://placehold.it/600/24f355",
              thumbnailUrl: "http://placehold.it/150/24f355"
            },
            {
              albumId: 1,
              id: 4,
              title:
                "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
              url: "http://placehold.it/600/d32776",
              thumbnailUrl: "http://placehold.it/150/d32776"
            },
            {
              albumId: 1,
              id: 5,
              title: "natus nisi omnis corporis facere molestiae rerum in",
              url: "http://placehold.it/600/f66b97",
              thumbnailUrl: "http://placehold.it/150/f66b97"
            },
            {
              albumId: 1,
              id: 6,
              title: "accusamus ea aliquid et amet sequi nemo",
              url: "http://placehold.it/600/56a8c2",
              thumbnailUrl: "http://placehold.it/150/56a8c2"
            }
          ]}
          renderItem={({item }) =>
         
          <TouchableHighlight
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate('Stops',{
              id: item
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
    margin:4,
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
