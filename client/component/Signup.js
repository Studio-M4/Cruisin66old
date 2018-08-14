import React from 'react';

import t from 'tcomb-form-native';

import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  TextInput, 
  TouchableHighlight,
  ScrollView,
  ActivityIndicator
} from 'react-native';
import {
  InputGroup,
  Input,
  Icon,
  Button
} from 'native-base';
import FormMessage from './FormMessage'

const Form = t.form.Form

const User = t.struct({
  'first name': t.String,
  'last name': t.String,
  username: t.String,
  password: t.String,
});

const options = {
  fields: {
    'first name': {
      error: 'First name is required'
    },
    'last name': {
      error: 'Last name is required'
    },
    username: {
      error: 'Username is required'
    },
    password: {
      error: 'Password is required'
    },
  },
};


class Signup extends React.Component {

  static navigationOptions = {
      title: 'Cruisin\'66'
  };

  constructor(props) {
      super(props);
      this.state = {
        userInfo: {}
      };
  }

  //userInfo will be in format:
  //   {
  // 'first name': "Sophia"
  // 'last name': "Lee"
  // 'password': '123'
  // 'username': 'corgi48'
  // }
  //

  handleSubmit = () => {
    const value = this._form.getValue(); // use that ref to get the form value
    console.log('value', value)
    this.setState({userInfo: value})
    console.log('state', this.state)
  }

  render() {
    return (
      <View style={styles.container}>
        <Form 
          ref={c => this._form = c}
          type ={User}
          options = {options}
        /> 
        <Button 
          style={styles.button}
          title="Sign Up"
          onPress={this.handleSubmit}
        >
          <Text style={styles.buttonTextColor}>Sign Up </Text>
        </Button>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#336699',
    marginTop: 20,
    padding: 10,
    width: 300,
    justifyContent: 'center',
    borderRadius: 5
  },
  buttonTextColor: {
    color: '#fff',
  },
});

export default Signup;