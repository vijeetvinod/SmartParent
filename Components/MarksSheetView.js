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
  ScrollView
} from 'react-native';

var _navigator;

import Container from './Container';
import Button from './Button';
import Label from './Label';
import ImageContainer from './ImageContainer';
import {AsyncStorage} from 'react';
import RegisterView from './RegisterView';



export default class MarksSheetView extends Component {
constructor(props) {
    super(props);
  }


_navigate(){
  this.props.navigator.push({
    name: 'MarksView', // Matches route.name
  })

}

  render() {
    return (
    <ScrollView style={styles.scroll}>
             <Container>
             <TouchableHighlight onPress={ () => this._navigate()}
              underlayColor= 'transparent'>
                 <Text style ={styles.buttonBlackText}> Test 1 </Text>
             </TouchableHighlight>
             </Container>
             <Container>
                          <TouchableHighlight onPress={ () => this._navigate()}
                           underlayColor= 'transparent'>
                              <Text style ={styles.buttonBlackText}> Test 2 </Text>
                          </TouchableHighlight>
                          </Container>
             <Container>
                          <TouchableHighlight onPress={ () => this._navigate()}
                           underlayColor= 'transparent'>
                              <Text style ={styles.buttonBlackText}> Test 3 </Text>
                          </TouchableHighlight>
                          </Container>
             <Container>
                          <TouchableHighlight onPress={ () => this._navigate()}
                           underlayColor= 'transparent'>
                              <Text style ={styles.buttonBlackText}> Test 4 </Text>
                          </TouchableHighlight>
                          </Container>
             <Container>
                          <TouchableHighlight onPress={ () => this._navigate()}
                           underlayColor= 'transparent'>
                              <Text style ={styles.buttonBlackText}> Mid Exam </Text>
                          </TouchableHighlight>
                          </Container>
             <Container>
                          <TouchableHighlight onPress={ () => this._navigate()}
                           underlayColor= 'transparent'>
                              <Text style ={styles.buttonBlackText}> Prep Exam </Text>
                          </TouchableHighlight>
                          </Container>
            <Container>
                         <TouchableHighlight onPress={ () => this._navigate()}
                          underlayColor= 'transparent'>
                             <Text style ={styles.buttonBlackText}> Final exam </Text>
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




