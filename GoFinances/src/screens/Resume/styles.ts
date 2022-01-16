import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'

export const Container = styled.View`
flex:1;
background-color:${({ theme }) => theme.colors.background};
`;
export const LoadContainer = styled.View`
flex:1;
justify-content:center;
align-items:center;
`
export const Header = styled.View`
background-color:${({ theme }) => theme.colors.primary};
width:100%;
height:${RFValue(113)}px;
align-items:center;
justify-content:flex-end;
padding-bottom:19px
`;

export const Title = styled.Text`
color:${({ theme }) => theme.colors.shape};
font-family:${({ theme }) => theme.fonts.regular};
font-size:${RFValue(18)}px;
`;

export const Content = styled.ScrollView`

`;
export const ChartContainer = styled.View`
width:100%;
align-items:center;
`;
export const MonthSelect = styled.View`
width:100%;

flex-direction:row;
justify-content:space-around;
align-items:center;

margin-top:24px;
`;
export const MonthSelectBtn = styled.TouchableOpacity.attrs({
  activeOpacity: 0.2
})``;

export const MonthSelectIcon = styled(Feather)`
font-size:${RFValue(24)}px;

`;
export const Month = styled.Text`
font-family:${({ theme }) => theme.fonts.regular};
font-size:${RFValue(20)}px;
`;