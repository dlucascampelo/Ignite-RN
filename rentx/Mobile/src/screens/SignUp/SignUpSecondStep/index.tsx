import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Alert, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';


import { BackBtn } from '../../../components/BackBtn';
import { PasswordInput } from '../../../components/PasswordInput';
import { Button } from '../../../components/Button';
import { Bullet } from '../../../components/Bullet';

import {
  Container,
  Header,
  BulletWrapper,
  Title,
  Subtitle,
  Form,
  FormTitle,
} from './styles';
import { useTheme } from 'styled-components';
import { ActionCompleted } from '../../ActionCompleted';
import api from '../../../services/api';

interface Params {
  user: {
    name: string;
    email: string;
    driverLicense: string;
  },
}

export function SignUpSecondStep() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { navigate, goBack } = useNavigation();
  const route = useRoute();
  const { user } = route.params as Params;

  const theme = useTheme()

  async function handleSignUp() {
    if (!password) {
      return Alert.alert('O campo SENHA não pode ficar vazio.')
    }
    if (!confirmPassword) {
      return Alert.alert('O campo CONFIRMAR SENHA não pode ficar vazio.')
    }
    if (password != confirmPassword) {
      return Alert.alert('As senhas precisam ser iguais.')
    }

    await api.post('/users', {
      name: user.name,
      email: user.email,
      driver_license: user.driverLicense,
      password,
    }).then(() => {
      navigate('ActionCompleted', {
        title: 'Conta Criada!',
        message: `Agora é só fazer login\ne aproveitar.`,
        nextRouteName: 'SignIn'
      });
    }).catch((error) => {
      console.log(error)
      Alert.alert('Ops..', 'Não foi possível realizar o cadastro!')
    });

  }

  return (
    <KeyboardAvoidingView behavior='position' enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Header>
            <BackBtn onPress={goBack} />
            <BulletWrapper>
              <Bullet />
              <Bullet active />
            </BulletWrapper>
          </Header>

          <Title>Crie sua{'\n'}conta</Title>
          <Subtitle>Faça seu cadastro de {'\n'}forma rápida e fácil </Subtitle>

          <Form>
            <FormTitle>2. Senha</FormTitle>
            <PasswordInput
              iconName="lock"
              placeholder="Senha"
              onChangeText={setPassword}
              value={password}
            />
            <PasswordInput
              iconName="lock"
              placeholder="Repetir senha"
              onChangeText={setConfirmPassword}
              value={confirmPassword}
            />
          </Form>
          <Button title="Cadastrar" color={theme.colors.success} onPress={handleSignUp} />
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}