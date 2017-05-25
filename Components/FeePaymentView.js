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



import Container from './Container';
import Button from './Button';
import Label from './Label';
import ImageContainer from './ImageContainer';



export default class FeePaymentView extends Component {
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
     style={styles.textInput}> Total fees:
    </Text>
</Container>

<Container>
    <Text style={styles.textInput}>
    {this.state.myData.profiles[0].fee_tot}
    </Text>
</Container>

<Container>
    <Text
     style={styles.textInput}> Fees Paid:
    </Text>
</Container>
<Container>
     <Text style={styles.textInput}>
        {this.state.myData.profiles[0].fee_paid}
        </Text>
</Container>

<Container>
     <Text style={styles.textInput}> Balance fees :

        </Text>
</Container>
<Container>
    <Text style={styles.textInput}>
 {this.state.myData.profiles[0].fee_bal}
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
