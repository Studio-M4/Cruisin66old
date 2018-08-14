import React from "react";
import {
  StyleSheet,
  View,
  Image,
  TextInput,
  TouchableHighlight,
  ScrollView,
  Modal,
  FlatList
} from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  Title,
  Item,Input
} from "native-base";

export default class Itinerary extends React.Component {
  static navigationOptions = {
    title: "Itinerary",
    headerStyle: {
      backgroundColor: '#f4511e'
    }
  };
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
            <Icon name="ios-people" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>

        <Content>
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
            renderItem={({ item }) => (
              <TouchableHighlight
                onPress={() => {
                  /* 1. Navigate to the Details route with params */
                  this.props.navigation.navigate("Stops", {
                    id: item
                  });
                }}
              >
                <Card>
                  <CardItem>
                    <Left>
                      <Thumbnail source={{ uri: item.thumbnailUrl }} />
                      <Body>
                        <Text>Julio </Text>
                        <Text note>{item.title}</Text>
                      </Body>
                    </Left>
                  </CardItem>
                  <CardItem cardBody>
                    <Image
                      source={{ uri: item.thumbnailUrl }}
                      style={{ height: 200, width: null, flex: 1 }}
                    />
                  </CardItem>
                  <CardItem>
                    <Left>
                      <Button transparent>
                        <Icon active name="thumbs-up" />
                        <Text>12 Likes</Text>
                      </Button>
                    </Left>
                    <Body>
                      <Button transparent>
                        <Icon active name="chatbubbles" />
                        <Text
                          onPress={() => {
                            /* 1. Navigate to the Details route with params */
                            this.props.navigation.navigate("CommentStop", {
                              id: item
                            });
                          }}>4 Comments</Text>
                      </Button>
                    </Body>
                    <Right>
                      <Text>11h ago</Text>
                    </Right>
                  </CardItem>
                </Card>
              </TouchableHighlight>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    margin: 4,
    borderRadius: 5
  },
  container2: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    margin: 4,
    borderRadius: 5,
    backgroundColor: "#eee"
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
    marginBottom: 20
  },
  imagesStyleModal: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 20
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
