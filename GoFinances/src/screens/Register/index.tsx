import React, { useState } from 'react'
import { Button } from '../../components/Form/Button'
import { Input } from '../../components/Form/Input'
import { TransactionCategory } from '../../components/Form/TransactionCategory'
import { TransactionTypeBtn } from '../../components/Form/TransactionTypeBtn'

import {
  Container,
  Header,
  Title,
  Form,
  Fields,
  TransactionsTypeBox
} from './styles'




export function Register() {
  const [transactionType, setTransactionType] = useState('')

  function handleTransactionsType(type: 'up' | 'down') {
    setTransactionType(type)
  }
  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>
      <Form>
        <Fields>
          <Input
            placeholder="Nome"
          />
          <Input
            placeholder="Preço"
          />
          <TransactionsTypeBox>
            <TransactionTypeBtn type="up" title="income" isActive={transactionType === 'up'} onPress={() => handleTransactionsType('up')} />
            <TransactionTypeBtn type="down" title="outcome" isActive={transactionType === 'down'} onPress={() => handleTransactionsType('down')} />
          </TransactionsTypeBox>
          <TransactionCategory title="Categoria" />
        </Fields>
        <Button title="Enviar" />
      </Form>
    </Container>
  )
}