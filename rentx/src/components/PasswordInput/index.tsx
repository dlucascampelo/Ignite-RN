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
  value?: string;
}

export function PasswordInput({ iconName, value, ...rest }: InputProps) {
  const theme = useTheme();

  const [hidePassword, setHidePassword] = useState(true)
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);


  function handleInputFocus() {
    setIsFocused(true)
  }

  function handleInputBlur() {
    setIsFocused(false)
    setIsFilled(!!value)

  }

  function handlePasswordVisibility() {
    setHidePassword(prevState => !prevState)
    hidePassword
  }
  return (
    <Container isFocused={isFocused}>
      <IconContainer >
        <Feather
          name={iconName}
          size={24}
          color={(isFocused || isFilled) ? theme.colors.main : theme.colors.text}
        />
      </IconContainer>

      <InputText {...rest}
        secureTextEntry={hidePassword}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}

      />

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