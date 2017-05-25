import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Alert,
  Linking,
  Navigator,
  TouchableHighlight,
  BackAndroid,
  ScrollView
} from 'react-native';

import Container from './Container';
import Button from './Button';
import Label from './Label';
import ImageContainer from './ImageContainer';
import {AsyncStorage} from 'react';
import RegisterView from './RegisterView';



export default class NotesView extends Component {
constructor(props) {
super(props);
    this.state = {
        myData: '',
      }
        }

      async componentWillMount() {
      let response = await fetch('http://10.0.2.2:3001/v1/profiles.json');
      let responseJson = await response.json();
      this.setState({ myData: responseJson });
      }

    render() {
        if(this.state.myData) {

    return (
    <ScrollView style={styles.scroll}>
             <Container>
             <TouchableHighlight onPress={ () => Linking.openURL(this.state.myData.profiles[0].notes1)}
              underlayColor= 'transparent'>
                 <Text style ={styles.buttonBlackText}> Subject 1 </Text>
             </TouchableHighlight>
             </Container>
             <Container>
                          <TouchableHighlight onPress={ () => Linking.openURL(this.state.myData.profiles[0].notes2)}
                           underlayColor= 'transparent'>
                              <Text style ={styles.buttonBlackText}> Subject 2 </Text>
                          </TouchableHighlight>
                          </Container>

             <Container>
                          <TouchableHighlight onPress={ () => Linking.openURL(this.state.myData.profiles[0].notes3)}
                           underlayColor= 'transparent'>
                              <Text style ={styles.buttonBlackText}> Subject 3 </Text>
                          </TouchableHighlight>
                          </Container>

            <Container>
                         <TouchableHighlight onPress={ () => Linking.openURL(this.state.myData.profiles[0].notes4)}
                          underlayColor= 'transparent'>
                             <Text style ={styles.buttonBlackText}> Subject 4</Text>
                         </TouchableHighlight>
                         </Container>

            <Container>
                         <TouchableHighlight onPress={ () => Linking.openURL(this.state.myData.profiles[0].notes5)}
                          underlayColor= 'transparent'>
                             <Text style ={styles.buttonBlackText}> Subject 5</Text>
                         </TouchableHighlight>
                         </Container>

            <Container>
                         <TouchableHighlight onPress={ () => Linking.openURL(this.state.myData.profiles[0].notes6)}
                          underlayColor= 'transparent'>
                             <Text style ={styles.buttonBlackText}> Subject 6</Text>
                         </TouchableHighlight>
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
    color: '#000000',
    },


textInput: {
    fontSize: 20,
    backgroundColor: '#FFF'
},
primaryButton: {
    backgroundColor: '#34A853'
},


});




