import React, { useState } from 'react';
import { TextInputProps } from 'react-native';

import { useTheme } from 'styled-components';
import { Feather } from '@expo/vector-icons'

import {
  Container,
  IconContainer,
  InputText,
} from './styles';
import { BorderlessButton } from 'react-native-gesture-handler';

interface InputProps extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>['name'];
}

export function PasswordInput({ iconName, ...rest }: InputProps) {
  const [hidePassword, setHidePassword] = useState(true)
  const theme = useTheme();

  function handlePasswordVisibility() {
    setHidePassword(prevState => !prevState)
    hidePassword
  }
  return (
    <Container>
      <IconContainer >
        <Feather
          name={iconName}
          size={24}
          color={theme.colors.text}
        />
      </IconContainer>

      <InputText {...rest} secureTextEntry={hidePassword} />

      <BorderlessButton onPress={handlePasswordVisibility} >
        <IconContainer >
          <Feather
            name={hidePassword ? 'eye' : 'eye-off'}
            size={24}
            color={theme.colors.text}
          />
        </IconContainer>
      </BorderlessButton>
    </Container>
  );
}