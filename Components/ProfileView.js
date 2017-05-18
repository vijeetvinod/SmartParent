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
  ActivityIndicator,
  RefreshControl,
} from 'react-native';

import Container from './Container';
import Button from './Button';
import Label from './Label';
import ImageContainer from './ImageContainer';
import profiles from '../data'


export default class ProfileView extends Component {
constructor(props) {
    super(props);
    }

  componentDidMount() {
  fetch('http://10.0.2.2:3001/v1/profiles.json').then((data) =>
  this.setState({myData: data}))
  }

render() {
    if(this.state.myData) {
    return (

    <ScrollView style={styles.scroll}>
  <ImageContainer>

        <Image
                  style={{width:110,height: 110, justifyContent: 'center', alignItems: 'center',
                  marginBottom:20}}
                  source={require('./profpic.png')}>
                  </Image>
         </ImageContainer>

<Container>
    <Text
     style={styles.textInput}> Name : {this.state.myData.profiles[0]}
    </Text>
</Container>

<Container>
    <Text
     style={styles.textInput}> Admission No.
    </Text>
</Container>

<Container>
    <Text
     style={styles.textInput}> D.O.B :
    </Text>
</Container>


<Container>
    <Text
     style={styles.textInput}> Class :
    </Text>
</Container>

<Container>
    <Text
     style={styles.textInput}> Section :
    </Text>
</Container>


<Container>
    <Text
     style={styles.textInput}> Address :
    </Text>
</Container>

<Container>
    <Text
     style={styles.textInput}> Contact :
    </Text>
</Container>

        </ScrollView>

    );
    }
    else{
    return(
    <Container>
    </Container>
    );
    }

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
    color: "#000000",
    backgroundColor: '#FFF'
},
primaryButton: {
    backgroundColor: '#34A853'
},


});
