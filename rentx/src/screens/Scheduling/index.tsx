import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'react-native';

import ArrowIcon from '../../assets/arrow.svg'

import { BackBtn } from '../../components/BackBtn';
import { Button } from '../../components/Button';
import { Calendar } from '../../components/Calendar';
import {
  Container,
  Header,
  Title,
  RentPeriod,
  DateInfo,
  DateTitle,
  DateValue,
  Content,
  Footer,
} from './styles';
import { useTheme } from 'styled-components'


export function Scheduling() {
  const theme = useTheme();
  const { navigate, goBack } = useNavigation();

  function handleConfirmRental() {
    navigate('SchedulingDetails')
  }

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <Header>
        <BackBtn color={theme.colors.shape} onPress={() => goBack()} />

        <Title>Escolha uma{'\n'}data de inicio e{'\n'}fim do aluguel</Title>

        <RentPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue selected={false}></DateValue>
          </DateInfo>

          <ArrowIcon />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue selected={false}></DateValue>
          </DateInfo>
        </RentPeriod>

      </Header>
      <Content>
        <Calendar />
      </Content>

      <Footer>
        <Button title="Confirmar" onPress={handleConfirmRental} />
      </Footer>
    </Container>
  );
}