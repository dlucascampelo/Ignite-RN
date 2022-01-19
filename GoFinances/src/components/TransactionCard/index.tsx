import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { categories } from '../../utils/categories';
import {
  Container,
  Title,
  Amount,
  Footer,
  Category,
  CategoryName,
  Icon,
  Date,
  IconButton,
  IconClose,
  InfoWrapper,
  Divider
} from './styles'

export interface TransactionCardProps {
  type: 'positive' | 'negative',
  name: string;
  amount: string;
  category: string;
  date: string;
}
interface Props extends TouchableOpacityProps {
  data: TransactionCardProps
}
export function TransactionCard({ data, ...rest }: Props) {
  const [category] = categories.filter(item => item.key === data.category
  );

  return (
    <Container>
      <InfoWrapper>
        <Divider>
          <Title>{data.name}</Title>
          <Amount type={data.type}>
            {data.type === 'negative' && '- '}
            {data.amount}
          </Amount>
        </Divider>

        <IconButton
          {...rest}>
          <IconClose name={"trash"} />
        </IconButton>

      </InfoWrapper>

      <Footer>
        <Category>
          <Icon name={category.icon} />
          <CategoryName>{category.name}</CategoryName>
        </Category>
        <Date>{data.date}</Date>
      </Footer>
    </Container>
  )
}