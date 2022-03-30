import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';


import Logo from '../../assets/logo.svg';

import api from '../../services/api';
import { CarDTO } from '../../dtos/CarDTO';

import { CarCard } from '../../components/CarCard';
import { LoadAnimated } from '../../components/LoadAnimated';


import {
  Container,
  Header,
  HeaderContent,
  TotalCars,
  CarList,

} from './styles';
export function Home() {
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState(true);

  const { navigate } = useNavigation();

  function handleCarDetails(car: CarDTO) {
    navigate('CarDetails', { car })
  };

  useEffect(() => {
    let isMounted = true;
    async function fetchCars() {
      try {
        const response = await api.get('/cars')
        if (isMounted) {
          setCars(response.data)
        };
      } catch (error) {
        console.log(error)

      } finally {
        if (isMounted) {
          setLoading(false)
        };
      }
    }
    fetchCars();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <Container>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />

      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />

          {
            !loading &&
            <TotalCars>Total de {cars.length} {cars.length >= 2 || cars.length === 0 ? 'carros' : 'carro'}</TotalCars>
          }

        </HeaderContent>
      </Header>

      {loading ? <LoadAnimated />
        :
        <CarList
          data={cars}
          keyExtractor={item => item.id}
          renderItem={({ item }) =>
            <CarCard data={item} onPress={() => handleCarDetails(item)} />}
        />
      }
    </Container>
  );
}

