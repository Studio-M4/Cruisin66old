import React from 'react';
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
  Icon
} from 'native-base';
import FormMessage from './FormMessage'


class Login extends React.Component {

  static navigationOptions = {
      title: 'Login',
  };

  constructor(props) {
      super(props);
      this.state = {
        email: '',
        password: '',
        showProgress: false,
        error: null
      };
  }

  onLoginPressed() {
    this.setState({showProgress: true});
  }

  renderError() {
    if (this.state.error) {
      return (
        <Text style={styles.error}>
          {this.state.error}
        </Text>
      )
    }
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>
            {/* Crunin'66 */}
          </Text>
          <View>
            <Image style={styles.imagesStyle} source={require('../imgs/icon.png')} />
          </View>
          <View style={styles.formStyle}>
          
            <TextInput
              style={styles.inputStyle}
              placeholder='Email'
              keyboardType='email-address'
              autoCorrect={false}
              autoCapitalize='none'
              onChangeText={(email) => this.setState({ email })}
              value={this.state.email}
            />
            <TextInput
              style={styles.inputStyle}
              placeholder='Password'
              onChangeText={(password) => this.setState({ password })}
              value={this.state.password}
              secureTextEntry
            />

            <TouchableHighlight
              style={styles.button}
              onPress={this.onLoginPressed.bind(this)}
              // onPress={() => this.props.navigation.navigate('Home')}
              >
              <Text style={styles.buttonTextColor}> LOGIN </Text>
            </TouchableHighlight>

             <TouchableHighlight
              style={styles.button}
              //onPress={() => this.props.navigation.navigate('Details')}
              >
              <Text style={styles.buttonTextColor}> SIGN UP </Text>
            </TouchableHighlight>

          </View>
          <ActivityIndicator
            animating={this.state.showProgress}
            size='large'
            style={styles.loader}
          />

        </View>
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
  imagesStyle: {
    width: 80,
    height: 80,
    marginBottom: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: "#000",
    marginTop: 60
  },
  inputStyle: {
    height: 40,
    width: 300,
    borderColor: '#ccc',
    borderWidth: 0.4,
    paddingLeft: 10,
    marginTop: 10
  },
  formStyle: {
    backgroundColor: '#fff',
    alignItems: 'center',
    width: '100%',
    borderColor: '#000',
    height: "auto",
    paddingBottom: 20,
    paddingTop: 21
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
  loader: {
    marginTop: 10
  },
  error: {
    color: 'red',
    marginBottom: 20
  }  
});

export default Login;