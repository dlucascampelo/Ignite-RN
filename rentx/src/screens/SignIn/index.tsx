import React, { useState } from 'react';
import { StatusBar, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';


import { Button } from '../../components/Button';


import {
  Container,
  Header,
  Title,
  Subtitle,
  Form,
  Footer,
} from './styles';
import { useTheme } from 'styled-components/native';
import { Input } from '../../components/Input';
import { PasswordInput } from '../../components/PasswordInput';

export function SignIn() {
  const theme = useTheme();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
              placeholderTextColor={theme.colors.text_details}
              keyboardType='email-address'
              autoCorrect={false}
              autoCapitalize='none'
              value={email}
              onChangeText={setEmail}
            />
            <PasswordInput
              iconName={'lock'}
              placeholder='Senha'
              placeholderTextColor={theme.colors.text_details}
              value={password}
              onChangeText={setPassword}
            />
          </Form>

          <Footer>
            <Button
              title='Login'
              onPress={() => { }}
              enabled={false}
              loading={false} />
            <Button
              title='Criar conta gratuita'
              color={theme.colors.background_secondary}
              light
              onPress={() => { }}
              loading={false}

            />
          </Footer>
        </Container>

      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}