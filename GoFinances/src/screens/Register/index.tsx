import React, { useState, useEffect } from 'react'
import { Keyboard, Modal, TouchableWithoutFeedback, Alert } from 'react-native'

import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { useForm } from 'react-hook-form'

import { Button } from '../../components/Form/Button'
import { InputForm } from '../../components/Form/InputForm'
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

interface FormData {
  name: string;
  amount: string;
}

const schema = Yup.object().shape({
  name: Yup
    .string()
    .required('Nome é obrigatório'),
  amount: Yup
    .number()
    .typeError('Informe um valor númerico')
    .positive('O Valor não pode ser negativo')
})

export function Register() {
  const dataKey = '@gofinances:transactions'
  const [transactionType, setTransactionType] = useState('');
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);
  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria',
  });

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  function handleTransactionsType(type: 'up' | 'down') {
    setTransactionType(type)
  };

  function handleOpenCategoryModal() {
    setCategoryModalOpen(true)
  };

  function handleCloseCategoryModal() {
    setCategoryModalOpen(false)
  };

  async function handleRegister(form: FormData) {

    if (!transactionType)
      return Alert.alert('Selecione o tipo da transação');

    if (category.key === 'category')
      return Alert.alert('Selecione a categoria')

    const data = {
      name: form.name,
      amount: form.amount,
      transactionType,
      category: category.key
    }
    try {
      await AsyncStorage.setItem(dataKey, JSON.stringify(data))

    } catch (error) {
      console.log(error);
      Alert.alert("Não foi possível salvar o registro da transação")
    }
  }

  useEffect(() => {
    async function loadData() {
      const data = await AsyncStorage.getItem(dataKey)
      console.log(JSON.parse(data!))
    }
    loadData()
  }, [])
  return (
    <TouchableWithoutFeedback
      onPress={Keyboard.dismiss}
    >
      <Container>
        <Header>
          <Title>Cadastro</Title>
        </Header>
        <Form>
          <Fields>
            <InputForm
              name="name"
              control={control}
              placeholder="Nome"
              autoCapitalize='sentences'
              autoCorrect={false}
              error={errors.name && errors.name.message}
            />
            <InputForm
              name="amount"
              control={control}
              placeholder="Valor"
              keyboardType='numeric'
              error={errors.amount && errors.amount.message}
            />
            <TransactionsTypeBox>
              <TransactionTypeBtn type="up" title="income" isActive={transactionType === 'up'} onPress={() => handleTransactionsType('up')} />
              <TransactionTypeBtn type="down" title="outcome" isActive={transactionType === 'down'} onPress={() => handleTransactionsType('down')} />
            </TransactionsTypeBox>

            <TransactionCategory title={category.name}
              onPress={handleOpenCategoryModal}
            />

          </Fields>
          <Button title="Enviar" onPress={handleSubmit(handleRegister)} />

        </Form>
        <Modal visible={categoryModalOpen}>
          <CategorySelect
            category={category}
            setCategory={setCategory}
            closeSelectCategory={handleCloseCategoryModal}
          />
        </Modal>
      </Container>
    </TouchableWithoutFeedback>
  )
}