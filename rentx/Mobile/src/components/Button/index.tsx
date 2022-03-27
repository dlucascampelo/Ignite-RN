import React from 'react';
import { ActivityIndicator, TouchableOpacityProps } from 'react-native';
import { useTheme } from 'styled-components';
import { RectButtonProps } from 'react-native-gesture-handler';
import {
  Container,
  Title
} from './styles';

interface Props extends TouchableOpacityProps {
  title: string;
  color?: string;
  loading?: boolean;
  light?: boolean;
}

export function Button({
  title,
  color,
  onPress,
  disabled = false,
  loading = false,
  light = false,
  ...rest
}: Props) {
  const theme = useTheme();

  return (
    <Container
      color={color ? color : theme.colors.main}
      disabled={disabled}
      style={{ opacity: (disabled === true || loading === true) ? .5 : 1 }}
      onPress={onPress}
    >
      {
        loading
          ? <ActivityIndicator color={theme.colors.shape} />
          : <Title light={light}>{title}</Title>
      }
    </Container>
  );
}
