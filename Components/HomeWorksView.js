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
  AsyncStorage,
  ScrollView
} from 'react-native';



import Container from './Container';
import Button from './Button';
import Label from './Label';
import ImageContainer from './ImageContainer';



export default class HomeWorksView extends Component {
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
    <Text
     style={styles.textInput}> Yesterday
    </Text>
</Container>

<Container>
    <Text>

    </Text>
 </Container>
<Container>
    <Text style={styles.textInput}>
{this.state.myData.profiles[0].home_yday}
    </Text>
    </Container>
<Container>
    <Text>

    </Text>
    </Container>
<Container>
    <Text>
    </Text>
</Container>
<Container>
    <Text
     style={styles.textInput}> Today
    </Text>
</Container>
<Container>
    <Text style={styles.textInput}>
{this.state.myData.profiles[0].home_tdy}
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
