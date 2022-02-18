import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { format, parseISO } from 'date-fns';

import ArrowIcon from '../../assets/arrow.svg'

import { BackBtn } from '../../components/BackBtn';
import { Button } from '../../components/Button';
import { Calendar, DayProps, generateInterval, MarkedDateProps } from '../../components/Calendar';
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

interface RentalPeriod {
  start: number;
  startFormatted: string;
  end: number;
  endFormatted: string;
}

export function Scheduling() {
  const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>({} as DayProps)
  const [markedDates, setMarkedDates] = useState<MarkedDateProps>({} as MarkedDateProps)
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>({} as RentalPeriod)
  const theme = useTheme();
  const { navigate, goBack } = useNavigation();

  function handleConfirmRental() {
    navigate('SchedulingDetails')
  }
  function handleDateChange(date: DayProps) {
    let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
    let end = date;

    if (start.timestamp > end.timestamp) {
      start = end;
      end = start;
    }
    setLastSelectedDate(end);
    const interval = generateInterval(start, end);
    setMarkedDates(interval)

    const firstDate = Object.keys(interval)[0];
    const endDate = Object.keys(interval)[Object.keys(interval).length - 1];
    setRentalPeriod({
      start: start.timestamp,
      end: end.timestamp,
      startFormatted: format(parseISO(firstDate), 'dd/MM/yyyy'),
      endFormatted: format(parseISO(endDate), 'dd/MM/yyyy'),
    })


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
            <DateValue selected={false}>{rentalPeriod.startFormatted}</DateValue>
          </DateInfo>

          <ArrowIcon />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue selected={false}>{rentalPeriod.endFormatted}</DateValue>
          </DateInfo>
        </RentPeriod>

      </Header>
      <Content>
        <Calendar
          markedDates={markedDates}
          onDayPress={handleDateChange}
        />
      </Content>

      <Footer>
        <Button title="Confirmar" onPress={handleConfirmRental} />
      </Footer>
    </Container>
  );
}