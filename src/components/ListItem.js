import React from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import {Image, StyleSheet, Text, View} from 'react-native';
import IconChevronRight from '../icons/IconChevronRight';

const ListItem = ({post, onPress = () => {}}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.flex}>
        <Image source={{uri: post.image, width: 60, height: 60}} />
        <Text style={styles.text}>
          {post.id} - {post.title}
        </Text>
        <IconChevronRight style={styles.chevron} width={10} fill="#000" />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  flex: {
    overflow: 'hidden',
    elevation: 5,
    borderRadius: 8,
    marginBottom: 10,
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  text: {
    flex: 1,
    padding: 16,
    fontSize: 20,
    color: '#000',
  },
  chevron: {
    marginEnd: 16,
  },
});
