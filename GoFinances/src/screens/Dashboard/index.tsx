import React from 'react'
import { HighlightCard } from '../../components/HighlightCard'
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
  HighlightCards
} from './styles'

export function Dashboard() {

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
    </Container >
  )
}