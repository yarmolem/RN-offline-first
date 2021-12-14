import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

const Input = ({name, onChange = () => {}, ...props}) => {
  return (
    <TextInput
      {...props}
      style={styles.input}
      onChangeText={value => onChange(name, value)}
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    paddingLeft: 20,
    borderRadius: 8,
    marginBottom: 10,
    borderColor: '#9d9d9d',
  },
});
