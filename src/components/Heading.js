import React from 'react';
import {StyleSheet, Text} from 'react-native';

const Heading = ({children}) => {
  return <Text style={styles.heading}>{children}</Text>;
};

export default Heading;

const styles = StyleSheet.create({
  heading: {
    textAlign: 'center',
    fontSize: 32,
    color: '#000',
    marginBottom: 20,
  },
});
