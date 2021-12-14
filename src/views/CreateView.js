import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useNetInfo} from '@react-native-community/netinfo';

import Heading from '../components/Heading';
import Input from '../components/Input';
import {useCreatePostMutation} from '../generated/graphql';
import useForm from '../hooks/useForm';
import {post} from '../mock/post';

const CreateView = ({navigation}) => {
  const {isConnected} = useNetInfo();
  const [respuesta, setRespuesta] = useState({});
  const [, createPostMutation] = useCreatePostMutation();
  const [form, {reset, handleChange}] = useForm({
    ...post,
    title: '',
  });

  const handleSubmit = async () => {
    const res = await createPostMutation({input: form});
    setRespuesta(res);

    // Offline handler
    if (!isConnected) {
      reset();
      navigation.navigate('Home');
      return;
    }

    // Online handler
    if (res?.data?.createPost.id) {
      reset();
      navigation.navigate('Home');
    } else {
      console.log('Error with open conection');
    }
  };

  return (
    <View style={styles.center}>
      <Heading>CREATE</Heading>

      <Input
        name="title"
        value={form.title}
        placeholder="Titulo"
        onChange={handleChange}
      />

      <Button title="guardar" onPress={handleSubmit} />

      <View>
        <Text>{JSON.stringify(respuesta, null, 2)}</Text>
      </View>
    </View>
  );
};

export default CreateView;

const styles = StyleSheet.create({
  center: {
    flex: 1,
    padding: 32,
  },
});
