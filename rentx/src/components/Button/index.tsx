import React from 'react';
import { TouchableOpacityProps, ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';

import {
  Container,
  Title
} from './styles';

interface Props extends TouchableOpacityProps {
  title: string;
  color?: string;
  disabled?: boolean;
  loading?: boolean
}
export function Button({ title, color, disabled = false, loading = false, ...rest }: Props) {
  const theme = useTheme()

  return (
    <Container
      {...rest}
      color={color}
      disabled={disabled || loading === true}
      style={{ opacity: (disabled === true || loading === true) ? .5 : 1 }}
    >
      {loading ? <ActivityIndicator color={theme.colors.header} /> : <Title>{title}</Title>}


    </Container>
  );
}