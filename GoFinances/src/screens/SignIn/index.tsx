import React, { useState } from 'react'
import { ActivityIndicator, Alert } from 'react-native'
import {
  Container,
  Header,
  TitleWrapper,
  Title,
  SignInTitle,
  Footer,
  SignInContainer,
} from './styles'
import AppleIcon from '../../assets/apple.svg';
import GoogleIcon from '../../assets/google.svg';
import LogoIcon from '../../assets/logo.svg'

import { RFValue } from 'react-native-responsive-fontsize';
import { SignInSocialBtn } from '../../components/SignInSocialBtn';
import { useAuth } from '../../hooks/auth';
import { useTheme } from 'styled-components';

export function SignIn() {
  const { signInWithGoogle, signInWithApple } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const theme = useTheme()


  async function handleSignInWithGoogle() {
    try {
      setIsLoading(true);
      await signInWithGoogle();

    } catch (error) {
      console.log(error)
      Alert.alert('Erro ao logar com Google.')
      setIsLoading(false);
    }
  };

  async function handleSignInWithApple() {
    try {
      setIsLoading(true);
      await signInWithApple();

    } catch (error) {
      console.log(error)
      Alert.alert('Erro ao logar com Apple.')
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Header>

        <TitleWrapper>
          <LogoIcon width={RFValue(120)} height={RFValue(68)} />
          <Title>
            Controle suas  {'\n'}
            finanças de forma muito simples.
          </Title>
        </TitleWrapper>

        <SignInTitle>
          Faça seu login com {'\n'}
          uma das contas abaixo.
        </SignInTitle>
      </Header>
      <Footer>
        <SignInContainer>

          <SignInSocialBtn title="Entrar com Google" svg={GoogleIcon} onPress={handleSignInWithGoogle} />
          <SignInSocialBtn title="Entrar com Apple" svg={AppleIcon} onPress={handleSignInWithApple} />

        </SignInContainer>
        {isLoading ?
          <ActivityIndicator color={theme.colors.shape} size={30} style={{ marginTop: 18 }} />
          : <></>}
      </Footer>
    </Container>
  )
}
