import React from 'react'
import { HighlightCard } from '../../components/HighlightCard'
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard'


import {
  Container,
  Header,
  UserInfo,
  User,
  UserWrapper,
  Photo,
  UserGreeting,
  UserName,
  Icon,
  HighlightCards,
  Transactions,
  Title,
  TransactionsList
} from './styles'

export interface DataListProps extends TransactionCardProps {
  id: string;
}

export function Dashboard() {
  const data: DataListProps[] = [
    {
      id: '1',
      type: 'positive',
      title: 'Desenvolvilento de site',
      amount: 'R$ 12.000,00',
      date: '13/04/2020',
      category: {
        name: 'Vendas',
        icon: 'dollar-sign'
      }
    },
    {
      id: '2',
      type: 'negative',
      title: 'Aluguel',
      amount: 'R$ 2.000,00',
      date: '25/04/2020',
      category: {
        name: 'Casa',
        icon: 'shopping-bag'
      }
    }, {
      id: '3',
      type: 'negative',
      title: 'Pizza',
      amount: 'R$ 60,00',
      date: '13/04/2020',
      category: {
        name: 'Alimentação',
        icon: 'coffee'
      }
    }]
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/49032660?v=4' }} />
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Lucas</UserName>
            </User>
          </UserInfo>
          <Icon name="power" />
        </UserWrapper>
      </Header>

      <HighlightCards>
        <HighlightCard
          title="Saídas"
          amount="R$1.259,00"
          lastTransaction="Ultima saída dia 03 de abril"
          type="up"
        />
        <HighlightCard
          title="Saídas"
          amount="R$1.259,00"
          lastTransaction="Ultima saída dia 03 de abril"
          type="down"
        />
        <HighlightCard
          title="Total"
          amount="R$16.141,00"
          lastTransaction="01 à 16 de abril"
          type="total"
        />
      </HighlightCards>

      <Transactions>
        <Title>Listagem</Title>

        <TransactionsList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}

        />

      </Transactions>
    </Container >
  )
}