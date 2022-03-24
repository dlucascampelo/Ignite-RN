import React from 'react';
import LottieView from 'lottie-react-native';

import loadAnimation from '../../assets/load_animation.json'

import {
  Container
} from './styles';

export function LoadAnimated() {
  return (
    <Container>
      <LottieView
        source={loadAnimation}
        style={{ height: 200 }}
        resizeMode='contain'
        autoPlay
        loop
      />

    </Container>
  );
}