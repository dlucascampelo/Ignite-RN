import { FlatList, FlatListProps } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { CarDTO } from '../../dtos/CarDTO';


export const Container = styled(GestureHandlerRootView)`
  flex: 1;
  background-color:${({ theme }) => theme.colors.background_primary};
`;
export const Header = styled.View`
width: 100%;
height: 113px;

background-color: ${({ theme }) => theme.colors.header};

justify-content:flex-end;
padding:32px 24px;

margin-bottom: 16px;
`;
export const HeaderContent = styled.View`
  flex-direction:row;
  align-items: center;
  justify-content:space-between;
`;
export const CarList = styled(FlatList as new (props: FlatListProps<CarDTO>) => FlatList<CarDTO>)
  .attrs({
    contentContainerStyle: {
      padding: 24
    },
    showVerticalScrollIndicator: false
  })`
  
`;
export const TotalCars = styled.Text`
font-size: ${RFValue(15)}px;
font-family: ${({ theme }) => theme.fonts.primary_400};
color: ${({ theme }) => theme.colors.text};
`;

export const MyCarsButton = styled.TouchableOpacity`
width:60px;
height:60px;

align-items:center;
justify-content:center;
border-radius:30px;

position:absolute;

bottom:13px;
right:22px;

background-color: ${({ theme }) => theme.colors.main};
`;