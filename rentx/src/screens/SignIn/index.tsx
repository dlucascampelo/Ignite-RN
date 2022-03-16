import React, { useState } from 'react';
import { StatusBar } from 'react-native';


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
  const theme = useTheme()
  return (
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
        />
        <PasswordInput
          iconName={'lock'}
          placeholder='Senha'
          placeholderTextColor={theme.colors.text_details}
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
  );
}