import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {useGetPostsQuery} from '../generated/graphql';
import ListItem from '../components/ListItem';
import Heading from '../components/Heading';

const HomeView = ({navigation}) => {
  const [{data, fetching}, getPostsQuery] = useGetPostsQuery({
    variables: {
      limit: 5,
    },
  });

  return (
    <>
      <View style={styles.center}>
        <View>
          <Heading>My Posts</Heading>

          <View style={styles.btn}>
            <Button
              title="crear posts"
              onPress={() => navigation.navigate('Create')}
            />
          </View>
          <View style={styles.btn}>
            <Button title="Refrescar" onPress={getPostsQuery} />
          </View>

          {!fetching && data
            ? data.getPosts.map(post => <ListItem key={post.id} post={post} />)
            : null}
        </View>
      </View>
    </>
  );
};

export default HomeView;

const styles = StyleSheet.create({
  center: {
    flex: 1,
    padding: 32,
    position: 'relative',
  },
  btn: {
    marginBottom: 10,
  },
});
