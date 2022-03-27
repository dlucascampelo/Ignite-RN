import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Alert, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import * as Yup from 'yup'

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
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const [driverLicense, setDriverLicense] = useState('')
  const { navigate, goBack } = useNavigation();


  async function handleGoStep2() {
    try {
      const schema = Yup.object().shape({
        name: Yup
          .string()
          .required('Nome é obrigatório'),

        email: Yup
          .string()
          .required('Email é obrigatório')
          .email('Email inválido'),

        driverlicense: Yup
          .string()
          .required('A CNH é obrigatória')
      });
      const data = { name, email, driverLicense };
      await schema.validate(data);

      navigate('SignUpSecondStep', { user: data });

    }
    catch (error) {
      if (error instanceof Yup.ValidationError) {
        Alert.alert('Ops!', error.message);
      }
      else {
        Alert.alert('Erro ao tentar se registrar.')
      };
    };
  };

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
              onChangeText={setName}
              value={name}
            />
            <Input
              iconName="mail"
              placeholder="Email"
              keyboardType="email-address"
              onChangeText={setEmail}
              value={email}
            />
            <Input
              iconName="credit-card"
              placeholder="DRIVERLICENSE"
              keyboardType="numeric"
              onChangeText={setDriverLicense}
              value={driverLicense}
            />
          </Form>
          <Button title="Próximo" onPress={handleGoStep2} />
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}