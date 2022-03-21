import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';


import { BackBtn } from '../../../components/BackBtn';
import { Input } from '../../../components/Input';
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


export function SignUpFirstStep() {
  const { navigate, goBack } = useNavigation();

  function handleGoStep2() {
    navigate('SignUpSecondStep');
  }

  return (
    <KeyboardAvoidingView behavior='position' enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Header>
            <BackBtn onPress={goBack} />
            <BulletWrapper>
              <Bullet active />
              <Bullet />
            </BulletWrapper>
          </Header>

          <Title>Crie sua{'\n'}conta</Title>
          <Subtitle>Faça seu cadastro de {'\n'}forma rápida e fácil </Subtitle>

          <Form>
            <FormTitle>1. Dados</FormTitle>
            <Input
              iconName="user"
              placeholder="Nome"
            />
            <Input
              iconName="mail"
              placeholder="Email"
              keyboardType="email-address"
            />
            <Input
              iconName="credit-card"
              placeholder="CNH"
              keyboardType="numeric"
            />
          </Form>
          <Button title="Próximo" onPress={handleGoStep2} />
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}