import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Alert,
  Navigator,
  TouchableHighlight,
  BackAndroid,
  ScrollView,
  AsyncStorage,
} from 'react-native';

var _navigator;

import Container from './Container';
import Button from './Button';
import Label from './Label';
import ImageContainer from './ImageContainer';
import RegisterView from './RegisterView';


export default class LoginView extends Component {
constructor(props) {
    super(props);
    this.state = {
      userName: '',
      userPass: '',
      error:null,
    };
  }


_navigate(){
  this.props.navigator.push({
    name: 'RegisterView', // Matches route.name
  })

}
_handleAdd = () => {

      const data = {
        username: this.state.userName,
        password: this.state.userPass
     }
      // Serialize and post the data
      const json = JSON.stringify(data)
      fetch('http://10.0.2.2:3000/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: json
      })
      .then((response) => response.json())
      .then((res) => {
        if (res.error) {
          alert(res.error)
        } else {
         this.props.navigator.push({
             name: 'CheckList', // Matches route.name
           })
        }
      })
      .catch(() => {
        alert('There was an error logging in.');
      })
      .done()
    }


  render() {
    return (
    <ScrollView style={styles.scroll}>


        <ImageContainer>

        <Image
                  style={{width:110,height: 110, justifyContent: 'center', alignItems: 'center'}}
                  source={require('./Logo.png')}>
                  </Image>
         </ImageContainer>

<Container>
    <TextInput
        placeholder="Username"
        style={styles.textInput}
        onChangeText={(text) => this.setState({userName:text})}
        autoCapitalize="none"
        autoCorrect={false}
        onSubmitEditing={(event) => {
           const{userName}=this.state.userName;
           const{onSubmitEditing}=this.props;
            if(!userName) return
            onSubmitEditing(userName)
            this.refs.SecondInput.focus();
          }}

    />

    <TextInput
        placeholder="Password"
        ref='SecondInput'
        secureTextEntry={true}
        onChangeText={(text) => this.setState({userPass:text})}
        style={styles.textInput}
    />
</Container>

             <Container>
                 <Button
                     label="Sign In"
                     styles={{button: styles.primaryButton, label: styles.buttonWhiteText}}
                     onPress={() => this._handleAdd()}
                      />
             </Container>
             <Container>
             <TouchableHighlight onPress={ () => this._navigate()}
              underlayColor= 'transparent'>
                 <Text style ={styles.buttonBlackText}>New? Register </Text>
             </TouchableHighlight>
             </Container>

        </ScrollView>

    );

  }

}


const styles = StyleSheet.create({
scroll: {
    backgroundColor: '#FFFFFF',
    padding: 30,
    flexDirection: 'column'
},

buttonWhiteText: {
    fontSize: 20,
    color: '#FFF'
},

buttonBlackText: {
    fontSize: 20,
    marginTop: 20,
    textAlign:'center',
    color: '#000000'
    },


textInput: {
    fontSize: 20,
    backgroundColor: '#FFF'
},
primaryButton: {
    backgroundColor: '#34A853'
},


});


