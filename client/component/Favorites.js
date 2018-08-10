import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableHighlight,ScrollView,Modal } from 'react-native';


export default class Favorites extends React.Component {
    static navigationOptions = {
        title: 'Favoris',
    };
  constructor(props) {
    super(props);
    this.state = {
        modalVisible: false,
    };
    
  }
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  goDetails(){
    this.props.navigation.navigate('Details');
  }

  render() {
    return (
      <ScrollView>
           <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
                alert('Modal has been closed.');
            }}>

            <View style={{marginTop: 22}}>
                <View>
                <Text>Show details about stops</Text>

                <TouchableHighlight
                    onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                    }}>
                    <Text> Close </Text>
                </TouchableHighlight>
                </View>
            </View>
            </Modal>

            <View style={styles.container}>
                <Text style={styles.title}> My Favorites stop :) </Text>
            </View>

            <TouchableHighlight
            style={styles.button}
            onPress={() => this.goDetails()}>

            <Text style={styles.buttonTextColor}> go to details </Text>
            </TouchableHighlight>
            <TouchableHighlight
                onPress={() => {
                    this.setModalVisible(true);
                }}>
                <Text>Show Modal</Text>
             </TouchableHighlight>
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
