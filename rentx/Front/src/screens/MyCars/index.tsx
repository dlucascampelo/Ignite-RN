import React, { useEffect, useState } from 'react';
import { FlatList, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons'

import api from '../../services/api';
import { CarDTO } from '../../dtos/CarDTO';

import { BackBtn } from '../../components/BackBtn';
import { CarCard } from '../../components/CarCard';

import {
  Container,
  Header,
  Title,
  Subtitle,
  Content,
  Appointments,
  AppointmentsTitle,
  AppointmentsQuantity,
  CarWrapper,
  CarFooter,
  CarFooterTitle,
  CarFooterPeriod,
  CarFooterDate,
} from './styles';
import { useTheme } from 'styled-components';
import { LoadAnimated } from '../../components/LoadAnimated';

interface CarProps {
  car: CarDTO;
  id: string;
  user_id: string;
  startDate: string;
  endDate: string;
}

export function MyCars() {
  const [cars, setCars] = useState<CarProps[]>([]);
  const [loading, setLoading] = useState(true);
  const theme = useTheme()
  const { navigate, goBack } = useNavigation();

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get(`schedules_byuser?user_id=1`)
        setCars(response.data)
      }
      catch (error) {
        console.log(error)
      }
      finally {
        setLoading(false)
      }
    }
    fetchCars()
  }, [])

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
        <Subtitle>Conforto segurança e praticidade</Subtitle>
      </Header>

      {loading ? <LoadAnimated />
        :
        <Content>
          <Appointments>
            <AppointmentsTitle>Agendametos feitos</AppointmentsTitle>
            <AppointmentsQuantity>{cars.length}</AppointmentsQuantity>
          </Appointments>

          <FlatList
            data={cars}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) =>
              <CarWrapper>
                <CarCard data={item.car} />
                <CarFooter>

                  <CarFooterTitle>Período</CarFooterTitle>

                  <CarFooterPeriod>
                    <CarFooterDate>{item.startDate}</CarFooterDate>
                    <AntDesign
                      name="arrowright"
                      size={20}
                      color={theme.colors.title}
                      style={{ marginHorizontal: 10 }}
                    />
                    <CarFooterDate>{item.endDate}</CarFooterDate>
                  </CarFooterPeriod>
                </CarFooter>

              </CarWrapper>
            }
          />
        </Content>
      }
    </Container>
  );
}