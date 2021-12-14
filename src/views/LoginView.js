import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import Heading from '../components/Heading';
import Input from '../components/Input';
import {useLoginMutation} from '../generated/graphql';
import useForm from '../hooks/useForm';

const LoginView = ({navigation}) => {
  const [, loginMutation] = useLoginMutation();
  const [form, {reset, handleChange}] = useForm({
    password: 'yarmo',
    usernameOrEmail: 'yarmo',
  });

  const handleSubmit = async () => {
    const res = await loginMutation(form);

    if (res?.data?.login.user) {
      reset();
      navigation.navigate('Home');
    }
  };

  return (
    <View style={styles.center}>
      <View>
        <Heading>LOGIN</Heading>
        <Input
          name="usernameOrEmail"
          onChange={handleChange}
          value={form.usernameOrEmail}
          placeholder="Username o email"
        />
        <Input
          secureTextEntry
          name="password"
          value={form.password}
          placeholder="password"
          onChange={handleChange}
        />

        <Button title="INGRESAR" onPress={handleSubmit} />
      </View>
    </View>
  );
};

export default LoginView;

const styles = StyleSheet.create({
  center: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 32,
    justifyContent: 'center',
  },
});
