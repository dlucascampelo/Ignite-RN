import styled from 'styled-components/native';
import theme from '../../global/styles/theme';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';


export const Container = styled.View`
flex:1;
`;

export const Header = styled.View`
width: 100%;
height: 70%;

background-color:${({ theme }) => theme.colors.primary};

justify-content:flex-end;
align-items:center;
`;

export const TitleWrapper = styled.View`
align-items:center;
`;
export const Title = styled.Text`
font-family:${({ theme }) => theme.fonts.medium};
font-size:${RFValue(30)}px;
color:${({ theme }) => theme.colors.shape};
text-align:center;

margin-top:45px
 `;
export const SignInTitle = styled.Text`

font-family:${({ theme }) => theme.fonts.regular};
font-size:${RFValue(16)}px;
color:${({ theme }) => theme.colors.shape};
text-align:center;

margin-top:80px;
margin-bottom:67px;
 `;

export const Footer = styled.View`
width: 100%;
height: 30%;

background-color:${({ theme }) => theme.colors.secondary};

align-items:center;
`;

export const SignInContainer = styled.View`
margin-top: ${RFPercentage(-4)}px;
padding:0px 32px;

justify-content:space-between;
`;