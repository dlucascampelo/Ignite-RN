import React from 'react';
import { StatusBar, useWindowDimensions } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import BrandIcon from '../../assets/logo_background_gray.svg';
import DoneIcon from '../../assets/done.svg';

import { ConfirmButton } from '../../components/ConfirmButton';

import {
  Container,
  Content,
  Title,
  Message,
  Footer,
} from './styles';

export function SchedulingComplete() {
  const { width } = useWindowDimensions()
  const { navigate } = useNavigation();

  function handleComplete() {
    navigate('Home')
  }
  return (
    <Container>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      <BrandIcon width={width} />
      <Content>
        <DoneIcon width={80} height={80} />
        <Title>Carro alugado!</Title>

        <Message>
          Agora você só precisa ir {'\n'}
          até a concessionária da RENTX{'\n'}
          peagr o seu automóvel.
        </Message>
      </Content>
      <Footer>
        <ConfirmButton title="OK" onPress={handleComplete} />
      </Footer>
    </Container>
  );
}