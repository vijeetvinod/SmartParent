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



import Container from './Container';
import Button from './Button';
import Label from './Label';
import ImageContainer from './ImageContainer';



export default class MarksView extends Component {
constructor(props) {
    super(props);
  }

render() {
    return (
    <ScrollView style={styles.scroll}>

<Container>
    <Text
     style={styles.textInput}> Subject 1 :
    </Text>
</Container>

<Container>
    <Text>

    </Text>
</Container>

<Container>
    <Text
     style={styles.textInput}> Subject 2:
    </Text>
</Container>
<Container>
    <Text>

    </Text>
</Container>

<Container>
    <Text
     style={styles.textInput}> Subject 3 :
    </Text>
</Container>
<Container>
    <Text>

    </Text>
</Container>


<Container>
    <Text
     style={styles.textInput}> Subject 4 :
    </Text>
</Container>

<Container>
    <Text>

    </Text>
</Container>
<Container>
    <Text
     style={styles.textInput}> Subject 5 :
    </Text>
</Container>
<Container>
    <Text>

    </Text>
</Container>
<Container>
    <Text
     style={styles.textInput}> Subject 6 :
    </Text>
</Container>
<Container>
    <Text>

    </Text>
</Container>
<Container>
    <Text
     style={styles.textInput}> Total:
    </Text>
</Container>
<Container>
    <Text
     style={styles.textInput}> Percentage :
    </Text>
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
    color: "#000000",
    backgroundColor: '#FFF'
},
primaryButton: {
    backgroundColor: '#34A853'
},


});
