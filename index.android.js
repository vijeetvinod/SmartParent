/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow */

import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';



import HomeView from './Components/HomeView'

export default class MyProject extends Component {
  render() {
    return (
    <HomeView/>
    );
  }
}



AppRegistry.registerComponent('MyProject', () => MyProject);
