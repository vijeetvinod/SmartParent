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
import MarksView from './MarksView';
import HomeWorksView from './HomeWorksView';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { apiMiddleware, reducer } from '../redux';

const store = createStore(reducer, {}, applyMiddleware(apiMiddleware));
store.dispatch({type: 'GET_PROFILE_DATA'});

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
    <Provider store = {store}>
  <Navigator
          style={{ flex:1 }}
          initialRoute={{name:'LoginView'}}
          renderScene={this.navigatorRenderScene}/>
    </Provider>
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
       case 'MarksView' :
                       return (<MarksView navigator={navigator} title="MarksView"/>);
      case 'HomeWorksView' :
                       return (<HomeWorksView navigator={navigator} title="HomeWorksView"/>);
    }
  }
}



