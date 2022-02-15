import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize';

import speedIcon from '../../assets/speed.svg';
import accelerationIcon from '../../assets/acceleration.svg';
import forceIcon from '../../assets/force.svg';
import gasolineIcon from '../../assets/gasoline.svg';
import exchangeIcon from '../../assets/exchange.svg';
import peopleIcon from '../../assets/people.svg';

import { Accessory } from '../../components/Accessory';
import { BackBtn } from '../../components/BackBtn';
import { ImageSlider } from '../../components/ImageSlider';
import { Button } from '../../components/Button';

import {
  Container,
  Header,
  ImagesWrapper,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  RentalPeriod,
  CalendarIcon,
  Accessories,
  DateInfo,
  DateTitle,
  DateValue,
  RentalPrice,
  RentalPriceLabel,
  RentalPriceDetails,
  RentalPriceQuota,
  RentalPriceTotal,
  Footer,
} from './styles';
import { useTheme } from 'styled-components'

export function SchedulingDetails() {
  const theme = useTheme();
  const { navigate, goBack } = useNavigation();

  function handleConfirmRental() {
    navigate('SchedulingComplete')
  }
  return (
    <Container>

      <Header>
        <BackBtn onPress={() => goBack()} />
      </Header>

      <ImagesWrapper>
        <ImageSlider
          imagesUrl={['https://www.pngmart.com/files/1/Audi-RS5-Red-PNG.png']} />
      </ImagesWrapper>

      <Content>
        <Details>

          <Description>
            <Brand>Lamborghini</Brand>
            <Name>Huracan</Name>
          </Description>

          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 580</Price>
          </Rent>
        </Details>

        <Accessories>
          <Accessory name="380km/h" icon={speedIcon} />
          <Accessory name="3.2s" icon={accelerationIcon} />
          <Accessory name="800 HP" icon={forceIcon} />
          <Accessory name="Gasolina" icon={gasolineIcon} />
          <Accessory name="Auto" icon={exchangeIcon} />
          <Accessory name="2 Pessoas" icon={peopleIcon} />
        </Accessories>

        <RentalPeriod>
          <CalendarIcon>
            <Feather name="calendar" size={RFValue(24)} color={theme.colors.shape} />
          </CalendarIcon>

          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>18/06/2021</DateValue>
          </DateInfo>

          <Feather name="chevron-right" size={RFValue(10)} color={theme.colors.text} />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue>28/06/2021</DateValue>
          </DateInfo>

        </RentalPeriod>

        <RentalPrice>
          <RentalPriceLabel>TOTAL</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuota>R$ 580 x3 diárias</RentalPriceQuota>
            <RentalPriceTotal>R$ 2.900</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>

      </Content>

      <Footer>
        <Button title="Alugar agora" color={theme.colors.success} onPress={handleConfirmRental} />
      </Footer>
    </Container>
  );
}