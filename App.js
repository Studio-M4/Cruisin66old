import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableHighlight, ScrollView } from 'react-native';
import { createStackNavigator } from 'react-navigation';


//import views 
import Login from './component/Login';
import Home from './component/Home';
import Details from './component/Details';
import Favorites from './component/Favorites';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'Your email',
      password: 'Your password',
    };
  }
  render() {
    return (
      <RootStack />
    );
  }
}

const RootStack = createStackNavigator(
  {
    Login: Login,
    Home: Home,
    Details: Details,
    Favorites:Favorites
  },
  {
    initialRouteName: 'Login',
  }
);


export default App


