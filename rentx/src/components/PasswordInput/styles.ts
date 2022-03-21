import styled, { css } from 'styled-components/native';

import { TextInput } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';



interface Props {
  isFocused: boolean;
};

export const Container = styled.View`
flex-direction: row;
margin-bottom:8px;
`;

export const IconContainer = styled.View<Props>`
height:56px;
width:55px;
align-items:center;
justify-content:center;

margin-right:2px;

background-color:${({ theme }) => theme.colors.background_secondary};
${({ isFocused, theme }) => isFocused && css`
  border-bottom-width: 2px;
  border-bottom-color: ${theme.colors.main};
  border-radius: 2px;
`};
`;

export const InputText = styled(TextInput) <Props>`
flex:1;
padding:0 23px;

background-color:${({ theme }) => theme.colors.background_secondary};

color: ${({ theme }) => theme.colors.text};
font-family:${({ theme }) => theme.fonts.primary_400};
font-size:${RFValue(15)}px;
${({ isFocused, theme }) => isFocused && css`
  border-bottom-width: 2px;
  border-bottom-color: ${theme.colors.main};
  border-radius: 2px;
`};
`;