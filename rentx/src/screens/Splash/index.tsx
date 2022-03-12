import React from 'react';
import { Button, StyleSheet } from 'react-native'
import Animated, { useSharedValue } from 'react-native-reanimated'

import {
  Container
} from './styles';

export function Splash() {


  return (
    <Container>
      <Animated.View style={styles.box} />
      <Button title="Test" onPress={() => { }} />
    </Container>
  );
}
const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'red'
  }
})