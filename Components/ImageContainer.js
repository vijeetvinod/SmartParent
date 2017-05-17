import React, { Component } from 'react';

import {
  StyleSheet,
  View
} from 'react-native';

const ImageContainer = (props) => {
    return (
        <View style={styles.labelContainer}>
            { props.children }
        </View>
    );
}

const styles = StyleSheet.create({
    labelContainer: {
        marginBottom: 20,
        alignItems: 'center'


    }
});

export default ImageContainer;