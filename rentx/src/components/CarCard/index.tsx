import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { CarDTO } from '../../dtos/CarDTO';

import GasIcon from '../../assets/gasoline.svg'
import {
  Container,
  Details,
  Brand,
  Name,
  About,
  Rent,
  Period,
  Price,
  FuelType,
  CarImage,
} from './styles';
import { getAccessoryIcon } from '../../utils/getAccessoryIcon';



interface Props extends TouchableOpacityProps {
  data: CarDTO;
}

export function CarCard({ data, ...rest }: Props) {
  const MotorIcon = getAccessoryIcon(data.fuel_type);
  return (
    <Container {...rest}>
      <Details>
        <Brand>{data.brand}</Brand>
        <Name>{data.name}</Name>

        <About>
          <Rent>
            <Period>{`Ao dia ${data.rent.period}`}</Period>
            <Price>{`R$ ${data.rent.price}`}</Price>
          </Rent>

          <FuelType>
            <MotorIcon />
          </FuelType>
        </About>
      </Details>

      <CarImage source={{ uri: data.thumbnail }} resizeMode='contain' />
    </Container>
  );
}