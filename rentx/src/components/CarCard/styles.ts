import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
width:100%;
height:135px;

background-color:${({ theme }) => theme.colors.background_secondary};

flex-direction: row;
justify-content: space-between;
align-items:center;

padding: 24px;
margin-bottom:16px;
`;

export const Details = styled.View`
`;

export const Brand = styled.Text`
font-family:${({ theme }) => theme.fonts.secondary_500};
font-size: ${RFValue(10)}px;
color: ${({ theme }) => theme.colors.text_details};

text-transform: uppercase;

`;

export const Name = styled.Text`
font-family:${({ theme }) => theme.fonts.secondary_500};
color: ${({ theme }) => theme.colors.title};
font-size: ${RFValue(15)}px;
`;

export const About = styled.View`
flex-direction: row;
align-items:center;
margin-top: 16px;
`;

export const Rent = styled.View`
margin-right:24px;
`;

export const Period = styled.Text`
font-family:${({ theme }) => theme.fonts.secondary_500};
font-size: ${RFValue(10)}px;
color: ${({ theme }) => theme.colors.text_details};

text-transform: uppercase;
`;

export const Price = styled.Text`
font-family:${({ theme }) => theme.fonts.secondary_500};
font-size: ${RFValue(15)}px;
color: ${({ theme }) => theme.colors.main};
`;

export const FuelType = styled.View`
`;

export const CarImage = styled.Image`
width: 187px;
height: 120px;
`;
