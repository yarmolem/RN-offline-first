import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const EditView = () => {
  return (
    <View style={styles.center}>
      <Text>EDIT</Text>
    </View>
  );
};

export default EditView;

const styles = StyleSheet.create({
  center: {
    flex: 1,
  },
});
