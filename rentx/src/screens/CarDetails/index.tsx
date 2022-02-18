import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { getAccessoryIcon } from '../../utils/getAccessoryIcon';

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
  About,
  Accessories,
  Footer,
} from './styles';
import { CarDTO } from '../../dtos/CarDTO';

interface Params {
  car: CarDTO;
}

export function CarDetails() {
  const { navigate, goBack } = useNavigation();
  const route = useRoute();

  const { car } = route.params as Params;
  function handleCarDetails() {
    navigate('Scheduling', { car })
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
          imagesUrl={car.photos} />
      </ImagesWrapper>

      <Content>
        <Details>

          <Description>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </Description>

          <Rent>
            <Period>{car.rent.period}</Period>
            <Price>R$ {car.rent.price}</Price>
          </Rent>
        </Details>
        <Accessories>
          {
            car.accessories.map(accessory => (
              <Accessory
                key={accessory.type}
                name={accessory.name}
                icon={getAccessoryIcon(accessory.type)} />
            ))
          }

        </Accessories>

        <About>{car.about}</About>
      </Content>
      <Footer>
        <Button title="Escolher periodo de aluguel" onPress={handleCarDetails} />
      </Footer>
    </Container>
  );
}