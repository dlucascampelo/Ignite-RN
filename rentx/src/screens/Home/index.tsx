import React, { useState, useEffect } from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { RectButton, PanGestureHandler } from 'react-native-gesture-handler';

import { useNavigation } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';


import Logo from '../../assets/logo.svg';

import api from '../../services/api';
import { CarDTO } from '../../dtos/CarDTO';

import { CarCard } from '../../components/CarCard';
import { Load } from '../../components/Load';

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedGestureHandler,
  withSpring

} from 'react-native-reanimated';
const ButtonAnimated = Animated.createAnimatedComponent(RectButton);

import {
  Container,
  Header,
  HeaderContent,
  TotalCars,
  CarList,

} from './styles';
import { useTheme } from 'styled-components';
export function Home() {
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState(true);

  const { navigate } = useNavigation();
  const theme = useTheme();

  const positionX = useSharedValue(0);
  const positionY = useSharedValue(0);
  const myCarsButtonStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: positionX.value },
        { translateY: positionY.value },
      ]
    }
  });
  const onGestureEvent = useAnimatedGestureHandler({
    onStart(_, ctx: any) {
      ctx.newPositionX = positionX.value;
      ctx.newPositionY = positionY.value;

    },
    onActive(e, ctx: any) {
      positionX.value = ctx.newPositionX + e.translationX
      positionY.value = ctx.newPositionY + e.translationY

    },
    onEnd() {
      positionX.value = withSpring(0);
      positionY.value = withSpring(0);

    },
  });


  function handleCarDetails(car: CarDTO) {
    navigate('CarDetails', { car })
  };
  function handleOpenMyCars() {
    navigate('MyCars')
  };
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
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View
          style={[
            myCarsButtonStyle,
            {
              position: 'absolute',
              bottom: 22,
              right: 22,
            }
          ]}
        >
          <ButtonAnimated
            style={[styles.button, { backgroundColor: theme.colors.main }]}
            onPress={handleOpenMyCars}>
            <Ionicons name="ios-car-sport" size={32} color={theme.colors.shape} />
          </ButtonAnimated>
        </Animated.View>
      </PanGestureHandler>
    </Container>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  }
})