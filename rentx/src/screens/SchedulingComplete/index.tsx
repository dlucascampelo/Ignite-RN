import React from 'react';
import { useWindowDimensions } from 'react-native'

import BrandIcon from '../../assets/logo_background_gray.svg';
import DoneIcon from '../../assets/done.svg';

import {
  Container,
  Content,
  Title,
  Message,
  Footer,
} from './styles';
import { ConfirmButton } from '../../components/ConfirmButton';

export function SchedulingComplete() {
  const { width } = useWindowDimensions()
  return (
    <Container>
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
        <ConfirmButton title="OK" />
      </Footer>
    </Container>
  );
}