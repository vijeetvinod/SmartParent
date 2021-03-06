import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Alert,
  Navigator,
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
import LoginView from './LoginView';
import CheckList from './CheckList';
import ProfileView from './ProfileView';
import AttendanceView from './AttendanceView';
import MarksSheetView from './MarksSheetView';
import HomeWorksView from './HomeWorksView';
import TestOneMarksView from './TestOneMarksView';
import TestTwoMarksView from './TestTwoMarksView';
import ExamOneMarksView from './ExamOneMarksView';
import ExamTwoMarksView from './ExamTwoMarksView';
import FeePaymentView from './FeePaymentView';
import NotesView from './NotesView';


BackAndroid.addEventListener('hardwareBackPress', () => {
  if (_navigator.getCurrentRoutes().length === 1  ) {
     return false;
  }
  _navigator.pop();
  return true;
});

export default class HomeView extends Component {
  render() {
    return (

  <Navigator
          style={{ flex:1 }}
          initialRoute={{name:'LoginView'}}
          renderScene={this.navigatorRenderScene}/>
    );

  }
navigatorRenderScene(route, navigator) {
    _navigator = navigator;
    switch (route.name) {
      case 'LoginView':
        return (<LoginView navigator={navigator} title="Welcome"/>);
      case 'RegisterView':
        return (<RegisterView navigator={navigator} title="Register" />);
      case 'ProfileView' :
        return (<ProfileView navigator={navigator} title="ProfileView"/>);
      case 'CheckList' :
                return (<CheckList navigator={navigator} title="CheckList"/>);
      case 'AttendanceView' :
                return (<AttendanceView navigator={navigator} title="AttendanceView"/>);
      case 'MarksSheetView' :
                 return (<MarksSheetView navigator={navigator} title="MarksSheetView"/>);
      case 'HomeWorksView' :
                       return (<HomeWorksView navigator={navigator} title="HomeWorksView"/>);
case 'TestOneMarksView' :
                       return (<TestOneMarksView navigator={navigator} title="TestOneMarksView"/>);
case 'TestTwoMarksView' :
                       return (<TestTwoMarksView navigator={navigator} title="TestTwoMarksView"/>);
case 'ExamOneMarksView' :
                       return (<ExamOneMarksView navigator={navigator} title="ExamOneMarksView"/>);
case 'ExamTwoMarksView' :
                       return (<ExamTwoMarksView navigator={navigator} title="ExamTwoMarksView"/>);
case 'FeePaymentView' :
                       return (<FeePaymentView navigator={navigator} title="FeePaymentView"/>);
case 'NotesView' :
                       return (<NotesView navigator={navigator} title="NotesView"/>);
    }
  }
}



