import React from 'react';
import { StatusBar, useWindowDimensions } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native';

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

interface Params {
  title: string;
  message: string;
  nextRouteName: string;
}

export function ActionCompleted() {
  const { width } = useWindowDimensions()
  const { navigate } = useNavigation();

  const route = useRoute();
  const { title, message, nextRouteName } = route.params as Params;

  function handleComplete() {
    navigate(nextRouteName)
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
        <Title>{title}</Title>

        <Message>{message}</Message>
      </Content>
      <Footer>
        <ConfirmButton title="OK" onPress={handleComplete} />
      </Footer>
    </Container>
  );
}

