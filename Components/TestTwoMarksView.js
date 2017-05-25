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



export default class testTwoMarksView extends Component {
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
     style={styles.textInput}> Subject 1 : {this.state.myData.profiles[0].t2_s1}
    </Text>
</Container>

<Container>
    <Text>

    </Text>
</Container>

<Container>
    <Text
     style={styles.textInput}> Subject 2:  {this.state.myData.profiles[0].t2_s2}
    </Text>
</Container>
<Container>
    <Text>

    </Text>
</Container>

<Container>
    <Text
     style={styles.textInput}> Subject 3 :{this.state.myData.profiles[0].t2_s3}
    </Text>
</Container>
<Container>
    <Text>

    </Text>
</Container>


<Container>
    <Text
     style={styles.textInput}> Subject 4 : {this.state.myData.profiles[0].t2_s4}
    </Text>
</Container>

<Container>
    <Text>

    </Text>
</Container>
<Container>
    <Text
     style={styles.textInput}> Subject 5 : {this.state.myData.profiles[0].t2_s5}
    </Text>
</Container>
<Container>
    <Text>

    </Text>
</Container>
<Container>
    <Text
     style={styles.textInput}> Subject 6 : {this.state.myData.profiles[0].t2_s6}
    </Text>
</Container>
<Container>
    <Text>

    </Text>
</Container>
<Container>
    <Text
     style={styles.textInput}> Total: {this.state.myData.profiles[0].t2_tot}
    </Text>
</Container>
<Container>
    <Text
     style={styles.textInput}> Percentage : {this.state.myData.profiles[0].t2_perc}
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
