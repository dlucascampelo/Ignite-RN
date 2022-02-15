import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Accessory } from '../../components/Accessory';
import { BackBtn } from '../../components/BackBtn';
import { ImageSlider } from '../../components/ImageSlider';

import speedIcon from '../../assets/speed.svg';
import accelerationIcon from '../../assets/acceleration.svg';
import forceIcon from '../../assets/force.svg';
import gasolineIcon from '../../assets/gasoline.svg';
import exchangeIcon from '../../assets/exchange.svg';
import peopleIcon from '../../assets/people.svg';

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
  About,
  Accessories,
  Footer,
} from './styles';
import { Button } from '../../components/Button';

export function CarDetails() {
  const { navigate, goBack } = useNavigation();

  function handleCarDetails() {
    navigate('Scheduling')
  }
  function handleGoBack() {
    goBack();
  }
  return (
    <Container>

      <Header>
        <BackBtn onPress={handleGoBack} />
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

        <About>
          Este é automóvel desportivo. Surgiu do lendário touro de lide indultado na praça Real Maestranza de Sevilla. É um belíssimo carro para quem gosta de acelerar.
        </About>
      </Content>
      <Footer>
        <Button title="Escolher periodo de aluguel" onPress={handleCarDetails} />
      </Footer>
    </Container>
  );
}