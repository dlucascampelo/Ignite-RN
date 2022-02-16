import { FlatList, FlatListProps } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { CarDTO } from '../../dtos/CarDTO';

export const Container = styled.View`
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