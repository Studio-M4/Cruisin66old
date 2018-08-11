import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  TextInput, 
  TouchableHighlight, 
  ScrollView 
} from 'react-native';

import { createBottomTabNavigator,createTabNavigator, createStackNavigator } from "react-navigation";
//import views 
import Login from './client/component/Login';
import Details from './client/component/Details';
import Favorites from './client/component/Favorites';
import Itinerary from "./client/component/Itinerary";
import Ionicons from "react-native-vector-icons/Ionicons";
import Profil from "./client/component/Profil";
import Create from "./client/component/Create";
import Stops from "./client/component/Stops";


// can't swipe createBottomTabNavigator 
// createTabNavigator depreciate but can swip :)
const Tabs = createBottomTabNavigator(
  {
    Itinerary: Itinerary,
    Favorites: Favorites,
    Create: Create,
    Profil: Profil
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Profil") {
          iconName = `ios-contact${focused ? "" : "-outline"}`;
        } else if (routeName === "Favorites") {
          iconName = `ios-folder${focused ? "" : "-outline"}`;
        } else if (routeName === "Create") {
          iconName = `ios-add-circle${focused ? "" : "-outline"}`;
        } else if (routeName === "Itinerary") {
          iconName = `ios-menu${focused ? "" : "-outline"}`;
        }
        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: "tomato",
      inactiveTintColor: "gray"
    },
    swipeEnabled: true,
  }
);

const RootStack = createStackNavigator(
  {
    Login: Login,
    Home: Tabs, // Home 's a key not a component 
    Details: Details,
    Favorites:Favorites,
    Itinerary:Itinerary,
    Stops:Stops,
  },
  {
    initialRouteName: 'Login',
  }
);
class App extends React.Component {
  render() {
    return (
      <RootStack />
    );
  }
}



export default App

