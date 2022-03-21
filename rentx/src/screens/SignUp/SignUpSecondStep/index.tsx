import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';


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


export function SignUpSecondStep() {
  const { navigate, goBack } = useNavigation();
  const theme = useTheme()

  function handleSignUp() {
    navigate('Home');
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
            />
            <PasswordInput
              iconName="lock"
              placeholder="Repetir senha"
            />
          </Form>
          <Button title="Cadastrar" color={theme.colors.success} onPress={handleSignUp} />
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}