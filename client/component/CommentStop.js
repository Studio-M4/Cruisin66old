import React from 'react';
import { StyleSheet, Text, View,FlatList,Image, TextInput, TouchableHighlight,ScrollView,Modal } from 'react-native';


export default class CommentStop extends React.Component {
    static navigationOptions = {
        title: 'Comments',
    };
  constructor(props) {
    super(props);
    this.state = {
        modalVisible: false,
    }; 
  }

  goDetails(){
    this.props.navigation.navigate('Profil');
  }

  render() {
    return (

      <View style={styles.container}>
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
              id: 5,
              title: "natus nisi omnis corporis facere molestiae rerum in",
              url: "http://placehold.it/600/f66b97",
              thumbnailUrl: "http://placehold.it/150/f66b97"
            }
          ]}
          renderItem={({ item }) =>
          <TouchableHighlight>
            <View style={styles.container2}>
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
          </ScrollView>
           <TextInput
         style={styles.inputStyle}
         placeholder="Be nice !!!"
       />
      </View>
  
    );
  }
}
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    backgroundColor:'#fff',
    margin:4,
    borderRadius: 5
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
    backgroundColor:'#eee',
    borderRadius:25,
    marginLeft: 4,
    width: "80%",
    height:30
  },
  imagesStyle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 3,
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
