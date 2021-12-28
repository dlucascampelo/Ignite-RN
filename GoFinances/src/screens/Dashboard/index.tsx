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

        <HighlightCard />
        <HighlightCard />
        <HighlightCard />

      </HighlightCards>
    </Container >
  )
}