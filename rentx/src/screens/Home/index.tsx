import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize'
import { Ionicons } from '@expo/vector-icons'
import Logo from '../../assets/logo.svg'

import api from '../../services/api'
import { CarDTO } from '../../dtos/CarDTO';

import { CarCard } from '../../components/CarCard';
import { Load } from '../../components/Load';

import {
  Container,
  Header,
  HeaderContent,
  TotalCars,
  CarList,
  MyCarsButton,

} from './styles';
import { useTheme } from 'styled-components';
export function Home() {
  const { navigate } = useNavigation();
  const theme = useTheme()
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState(true);

  function handleCarDetails(car: CarDTO) {
    navigate('CarDetails', { car })
  }
  function handleOpenMyCars() {
    navigate('MyCars')
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
          <TotalCars>Total de {cars.length} {cars.length >= 2 || cars.length === 0 ? 'carros' : 'carro'}</TotalCars>
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

      <MyCarsButton onPress={handleOpenMyCars}>
        <Ionicons name="ios-car-sport" size={32} color={theme.colors.shape} />
      </MyCarsButton>
    </Container>
  );
}