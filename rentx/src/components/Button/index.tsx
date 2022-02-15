import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';

import {
  Container,
  Title
} from './styles';

interface Props extends TouchableOpacityProps {
  title: string;
  color?: string;
}

export function Button({ title, color, ...rest }: Props) {

  return (
    <Container {...rest} color={color}>
      <Title>{title}</Title>
    </Container>
  );
}