import React, { Component } from 'react';


import {
  StyleSheet,
  Text,
  View,
  Linking,
  Image,
  TextInput,
  Alert,
  Navigator,
  TouchableHighlight,
  BackAndroid,
  ScrollView,
  ActivityIndicator
} from 'react-native';

;

var _navigator;

import Container from './Container';
import Button from './Button';
import Label from './Label';
import ImageContainer from './ImageContainer';
import {AsyncStorage} from 'react';
import RegisterView from './RegisterView';


export default class CheckList extends Component {
constructor(props) {
    super(props);
  }


_navigate(){
  this.props.navigator.push({
    name: 'ProfileView', // Matches route.name
  })

}
_navigate2(){
this.props.navigator.push({
              name: 'AttendanceView',
              })
              }
_navigate3(){
this.props.navigator.push({
              name: 'MarksSheetView',
              })
              }
_navigate4(){
this.props.navigator.push({
              name: 'HomeWorksView',
              })
              }
_navigate5(){
this.props.navigator.push({
              name: 'FeePaymentView',
              })
              }
 _navigate6(){
 this.props.navigator.push({
               name: 'NotesView',
               })
               }
  render() {
    return (
    <ScrollView style={styles.scroll}>
             <Container>
             <TouchableHighlight onPress={ () => this._navigate()}
              underlayColor= 'transparent'>
                 <Text style ={styles.buttonBlackText}> Profile </Text>
             </TouchableHighlight>
             </Container>
             <Container>
                          <TouchableHighlight onPress={ () => this._navigate2()}
                           underlayColor= 'transparent'>
                              <Text style ={styles.buttonBlackText}> Attendance </Text>
                          </TouchableHighlight>
                          </Container>
             <Container>
                          <TouchableHighlight onPress={ () => this._navigate3()}
                           underlayColor= 'transparent'>
                              <Text style ={styles.buttonBlackText}> Marks Sheet </Text>
                          </TouchableHighlight>
                          </Container>
             <Container>
                          <TouchableHighlight onPress={ () => this._navigate4()}
                           underlayColor= 'transparent'>
                              <Text style ={styles.buttonBlackText}> Home Works </Text>
                          </TouchableHighlight>
                          </Container>
             <Container>
                          <TouchableHighlight onPress={ () => this._navigate()}
                           underlayColor= 'transparent'>
                              <Text style ={styles.buttonBlackText}> Discussions </Text>
                          </TouchableHighlight>
                          </Container>
             <Container>
                          <TouchableHighlight onPress={ () => this._navigate5()}
                           underlayColor= 'transparent'>
                              <Text style ={styles.buttonBlackText}> Fee Status </Text>
                          </TouchableHighlight>
                          </Container>
            <Container>
                         <TouchableHighlight onPress={ () => this._navigate6()}
                          underlayColor= 'transparent'>
                             <Text style ={styles.buttonBlackText}> Notes </Text>
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




