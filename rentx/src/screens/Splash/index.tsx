import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolate,
  Extrapolate,
  runOnJS
}
  from 'react-native-reanimated'

import BrandSvg from '../../assets/brand.svg'
import LogoSvg from '../../assets/logo.svg'
import {
  Container
} from './styles';

export function Splash() {
  const { navigate } = useNavigation();
  const splashAnimation = useSharedValue(0);

  const brandStyle = useAnimatedStyle(() => {
    return {
      // ---Animation with logo overlapping brand---

      opacity: interpolate(splashAnimation.value,
        [0, 25, 50],
        [1, .3, 0],
      )

      // //Animation with images changing place
      // opacity: interpolate(splashAnimation.value, [0, 50], [1, 0]),
      // transform: [
      //   {
      //     translateX: interpolate(splashAnimation.value,
      //       [0, 50],
      //       [0, -50],
      //       Extrapolate.CLAMP
      //     )
      //   }
      // ],
    }
  });

  const logoStyle = useAnimatedStyle(() => {
    return {
      // ---Animation with logo overlapping brand---

      opacity: interpolate(splashAnimation.value,
        [0, 25, 50],
        [0, .3, 1],
      )

      //Animation  with images changing place
      // opacity: interpolate(splashAnimation.value, [0, 25, 50], [0, .3, 1,]),
      // transform: [
      //   {
      //     translateX: interpolate(splashAnimation.value,
      //       [0, 50],
      //       [-50, 0],
      //       Extrapolate.CLAMP
      //     )
      //   }
      // ],
    }
  });

  function startApp() {
    navigate('Home')
  }
  useEffect(() => {
    splashAnimation.value = withTiming(50, { duration: 2000 },
      () => {
        'worklet'
        runOnJS(startApp)();
      }
    );
  }, [])
  return (
    <Container>
      <Animated.View style={brandStyle}>
        <BrandSvg width={80} height={50} />
      </Animated.View>

      <Animated.View style={logoStyle}>
        <LogoSvg width={180} height={20} />
      </Animated.View>
    </Container>
  );
}
