import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'


import { HistoryCard } from '../../components/HistoryCard'
import {
  Container,
  Header,
  Title,
  Content
} from './styles'
import { categories } from '../../utils/categories'


interface TransactionsData {
  type: 'positive' | 'negative',
  name: string;
  amount: string;
  category: string;
  date: string;
}
interface CategoryData {
  key: string
  name: string,
  total: string,
  color: string;
}

export function Resume() {
  const [totalPerCategory, setTotalPerCategory] = useState<CategoryData[]>([])
  async function LoadData() {
    const dataKey = '@gofinances:transactions'

    const response = await AsyncStorage.getItem(dataKey);
    const responseFormatted = response ? JSON.parse(response) : [];

    const expenses = responseFormatted.
      filter((expenses: TransactionsData) => expenses.type === 'negative')

    const totalByCategory: CategoryData[] = []
    categories.forEach(category => {
      let categorySum = 0;

      expenses.forEach((expenses: TransactionsData) => {
        if (expenses.category === category.key) {
          categorySum += Number(expenses.amount);
        }
      });

      if (categorySum > 0) {
        const total = categorySum.toLocaleString('pt-BR',
          {
            style: 'currency',
            currency: 'BRL'
          })

        totalByCategory.push({
          key: category.key,
          name: category.name,
          color: category.color,
          total: total.replace('R$', 'R$ '),
        })
      }
    })
    setTotalPerCategory(totalByCategory)
  }
  useEffect(() => {
    LoadData()
  }, [])
  return (

    <Container>
      <Header>
        <Title>Resumo por categoria</Title>
      </Header>

      <Content >
        {
          totalPerCategory.map(item => (
            <HistoryCard
              key={item.key}
              title={item.name}
              amount={item.total}
              color={item.color}
            />
          ))
        }
      </Content>

    </Container>
  )
}