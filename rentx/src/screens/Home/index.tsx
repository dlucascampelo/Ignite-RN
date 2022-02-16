import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize'

import Logo from '../../assets/logo.svg'

import api from '../../services/api'
import { CarDTO } from '../../dtos/CarDTO';

import { CarCard } from '../../components/CarCard';

import {
  Container,
  Header,
  HeaderContent,
  TotalCars,
  CarList,

} from './styles';
import { Load } from '../../components/Load';
export function Home() {
  const { navigate } = useNavigation();
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState(true);

  function handleCarDetails(car: CarDTO) {
    navigate('CarDetails', { car })
  }

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get('/cars')
        setCars(response.data)

      } catch (error) {
        console.log(error)

      } finally {
        setLoading(false)
      }
    }

    fetchCars()
  }, [])


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
          <TotalCars>Total de 12 carros</TotalCars>
        </HeaderContent>
      </Header>

      {loading ? <Load />
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