import React from 'react';
import { StyleSheet } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { useTheme } from 'styled-components';

import { getAccessoryIcon } from '../../utils/getAccessoryIcon';
import { CarDTO } from '../../dtos/CarDTO';

import { Accessory } from '../../components/Accessory';
import { BackBtn } from '../../components/BackBtn';
import { ImageSlider } from '../../components/ImageSlider';
import { Button } from '../../components/Button';

import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  interpolate,
  Extrapolate
} from 'react-native-reanimated'

import {
  Container,
  Header,
  ImagesWrapper,
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

interface Params {
  car: CarDTO;
}

export function CarDetails() {
  const { navigate, goBack } = useNavigation();
  const theme = useTheme();
  const route = useRoute();
  const { car } = route.params as Params;

  const scrollY = useSharedValue(0)
  const scrollHandler = useAnimatedScrollHandler(e => {
    scrollY.value = e.contentOffset.y;
  })

  const headerStyleAnimation = useAnimatedStyle(() => {
    return {
      height: interpolate(
        scrollY.value,
        [0, 200], [200, 80],
        Extrapolate.CLAMP
      ),
    };
  });
  const sliderCarsStyleAnimation = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        scrollY.value,
        [0, 150], [1, 0],
        Extrapolate.CLAMP

      )
    }
  })

  function handleCarDetails() {
    navigate('Scheduling', { car })
  };
  function handleGoBack() {
    goBack();
  };
  return (
    <Container>

      <Animated.View
        style={[
          headerStyleAnimation,
          styles.header,
          { backgroundColor: theme.colors.background_secondary }

        ]}
      >
        <Header>
          <BackBtn onPress={handleGoBack} />
        </Header>


        <Animated.View style={sliderCarsStyleAnimation}>
          <ImagesWrapper>
            <ImageSlider
              imagesUrl={car.photos} />
          </ImagesWrapper>
        </Animated.View>

      </Animated.View>

      <Animated.ScrollView
        contentContainerStyle={{
          paddingHorizontal: 24,
          paddingTop: getStatusBarHeight() + 160,
          alignItems: 'center',
        }}
        showsVerticalScrollIndicator={false}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
      >
        <Details>

          <Description>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </Description>

          <Rent>
            <Period>{car.period}</Period>
            <Price>R$ {car.price}</Price>
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

        <About>
          {car.about}

        </About>
      </Animated.ScrollView>
      <Footer>
        <Button title="Escolher periodo de aluguel" onPress={handleCarDetails} />
      </Footer>
    </Container>
  );
}
const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    overflow: 'hidden',
    zIndex: 1,
  },

})