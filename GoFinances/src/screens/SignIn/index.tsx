import React from 'react'
import { Alert } from 'react-native'
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

export function SignIn() {
  const { signInWithGoogle } = useAuth();

  async function handleSignInWithGoogle() {
    try {
      await signInWithGoogle();

    } catch (error) {
      console.log(error)
      Alert.alert('Erro ao logar com Google.')
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
          <SignInSocialBtn title="Entrar com Apple" svg={AppleIcon} />

        </SignInContainer>
      </Footer>
    </Container>
  )
}
