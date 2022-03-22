import React, { useState } from 'react';
import { StatusBar, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import * as Yup from 'yup';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { PasswordInput } from '../../components/PasswordInput';

import {
  Container,
  Header,
  Title,
  Subtitle,
  Form,
  Footer,
} from './styles';
import { useTheme } from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';


export function SignIn() {
  const theme = useTheme();
  const { navigate } = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  async function handleSignIn() {
    try {
      const schema = Yup.object().shape({
        email: Yup
          .string()
          .required('Email obrigatório')
          .email('Digite um email válido'),

        password: Yup
          .string()
          .required('A senha é obrigatória')
      });
      await schema.validate({ email, password });
      navigate('Home')
    }
    catch (error) {
      if (error instanceof Yup.ValidationError) {
        Alert.alert('Ops!', error.message);
      }
      else {
        Alert.alert('Erro na autenticação.', 'Ocorreu um erro ao fazer o login, verifique suas credenciais')
      }
    };
  };
  function handleSignUp() {
    navigate('SignUpFirstStep')
  };

  return (
    <KeyboardAvoidingView behavior='position' enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

        <Container>
          <StatusBar
            barStyle='dark-content'
            backgroundColor='transparent'
            translucent
          />

          <Header>
            <Title>Estamos {'\n'}quase lá.</Title>
            <Subtitle>Faça seu login para começar{'\n'}uma experiência incrível.</Subtitle>
          </Header>

          <Form>
            <Input
              iconName='mail'
              placeholder='Email'
              keyboardType='email-address'
              autoCorrect={false}
              autoCapitalize='none'
              value={email}
              onChangeText={setEmail}
            />
            <PasswordInput
              iconName={'lock'}
              placeholder='Senha'
              value={password}
              onChangeText={setPassword}
            />
          </Form>

          <Footer>
            <Button
              title='Login'
              onPress={handleSignIn}
              disabled={false}
              loading={false} />
            <Button
              title='Criar conta gratuita'
              color={theme.colors.background_secondary}
              light
              onPress={handleSignUp}
              loading={false}

            />
          </Footer>
        </Container>

      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};