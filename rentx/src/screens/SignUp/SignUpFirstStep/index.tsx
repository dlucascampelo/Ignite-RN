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
  const { navigate, goBack } = useNavigation();
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [cnh, setCnh] = useState('')


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

        cnh: Yup
          .string()
          .required('CNH é obrigatória')
      });
      const data = { name, email, cnh };
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
              placeholder="CNH"
              keyboardType="numeric"
              onChangeText={setCnh}
              value={cnh}
            />
          </Form>
          <Button title="Próximo" onPress={handleGoStep2} />
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}