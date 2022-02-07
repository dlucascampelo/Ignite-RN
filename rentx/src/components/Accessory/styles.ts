import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  width: 109px;
  height: 92px;
  padding:16px;
  margin-bottom:8px;

  justify-content:center;
  align-items:center;

  background-color:${({ theme }) => theme.colors.background_primary};
  border-radius:5px;
`;
export const Name = styled.Text`
font-family:${({ theme }) => theme.fonts.primary_500};
color:${({ theme }) => theme.colors.text};
font-size:${RFValue(13)}px
`;
