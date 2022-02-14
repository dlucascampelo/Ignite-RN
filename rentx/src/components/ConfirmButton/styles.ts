import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(RectButton)`
width:80px;
height:56px;

background-color:${({ theme }) => theme.colors.shape_dark};

align-items:center;
justify-content:center;

border-radius: 3px;
`;
export const Title = styled.Text`
font-family: ${({ theme }) => theme.fonts.primary_500};
font-size: ${RFValue(15)}px;
color:${({ theme }) => theme.colors.shape};
`;