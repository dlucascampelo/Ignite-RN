import styled from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';
import { TouchableOpacity } from 'react-native';

export const Container = styled(TouchableOpacity)`
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