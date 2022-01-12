import React, { useState } from 'react'
import { Keyboard, Modal, TouchableWithoutFeedback, Alert } from 'react-native'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import AsyncStorage from '@react-native-async-storage/async-storage'
import uuid from 'react-native-uuid';

import { useForm } from 'react-hook-form'
import { useNavigation } from '@react-navigation/native'

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
  const navigation = useNavigation()
  const [transactionType, setTransactionType] = useState('');
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);
  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria',
  });

  const {
    control,
    handleSubmit,
    reset,
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

    const newTransaction = {
      id: String(uuid.v4()),
      name: form.name,
      amount: form.amount,
      transactionType,
      category: category.key,
      date: new Date()
    };
    try {
      const dataKey = '@gofinances:transactions'

      const data = await AsyncStorage.getItem(dataKey);
      const currentData = data ? JSON.parse(data) : []

      const dataFormatted = [
        ...currentData,
        newTransaction
      ]
      await AsyncStorage.setItem(dataKey, JSON.stringify(dataFormatted));
      reset()
      setTransactionType('')
      setCategory({
        key: 'category',
        name: 'Categoria',
      })
      navigation.navigate('Dashboard')

    } catch (error) {
      console.log(error);
      Alert.alert("Não foi possível salvar o registro da transação");
    };
  };

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