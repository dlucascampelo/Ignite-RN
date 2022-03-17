import styled from 'styled-components/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(GestureHandlerRootView)`
  padding:0 24px;

  background-color:${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
width:100%;
margin-top:${getStatusBarHeight() + 115}px;
`;

export const Title = styled.Text`
font-family: ${({ theme }) => theme.fonts.secondary_600};
font-size: ${RFValue(40)}px;
color:${({ theme }) => theme.colors.title};
`;

export const Subtitle = styled.Text`
font-family: ${({ theme }) => theme.fonts.primary_400};
font-size: ${RFValue(18)}px;
color:${({ theme }) => theme.colors.text};
line-height: ${RFValue(25)}px;

margin-top:16px;
`;

export const Form = styled.View`
width:100%;

margin:64px 0;
`;
export const Footer = styled.View`
`;