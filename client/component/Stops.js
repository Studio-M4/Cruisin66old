import React from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Image,
  TextInput,
  TouchableHighlight,
  ScrollView,
  Modal
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
  Footer,
  Item,
  Input,
  FooterTab
} from "native-base";

class Stops extends React.Component {
  static navigationOptions = {
    title: "Stops",

    headerRight: (
      <Button
        onPress={() => alert("This is a button!")}
        title="add Stop"
        color="#000"
      />
    )
  };
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false
    };
  }

  render() {
    return (
      <Container>
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
                  this.props.navigation.navigate("Details", {
                    item: item
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
                        <Text>4 Comments</Text>
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
        <Footer>
          <FooterTab>
            <Button>
              <Icon name="camera" />
            </Button>
            <Button
              onPress={() => {
                /* 1. Navigate map and see the direction */
                this.props.navigation.navigate("CreateStop");
              }}
            >
              <Icon name="add" />
            </Button>
            <Button
              onPress={() => {
                /* 1. Navigate map and see the direction */
                this.props.navigation.navigate("MapComponent");
              }}
            >
              <Icon name="navigate" />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
export default Stops;
