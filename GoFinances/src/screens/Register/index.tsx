import React, { useState } from 'react'
import { Modal } from 'react-native'

import { Button } from '../../components/Form/Button'
import { Input } from '../../components/Form/Input'
import { TransactionCategory } from '../../components/Form/TransactionCategory'
import { TransactionTypeBtn } from '../../components/Form/TransactionTypeBtn'
import { CategorySelect } from '../CategorySelect'

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
  const [categoryModalOpen, setCategoryModalOpen] = useState(false)
  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria',
  })

  function handleTransactionsType(type: 'up' | 'down') {
    setTransactionType(type)
  }
  function handleOpenCategoryModal() {
    setCategoryModalOpen(true)
  }
  function handleCloseCategoryModal() {
    setCategoryModalOpen(false)
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

          <TransactionCategory title={category.name}
            onPress={handleOpenCategoryModal}
          />

        </Fields>
        <Button title="Enviar" />
      </Form>
      <Modal visible={categoryModalOpen}>
        <CategorySelect
          category={category}
          setCategory={setCategory}
          closeSelectCategory={handleCloseCategoryModal}
        />
      </Modal>
    </Container>
  )
}