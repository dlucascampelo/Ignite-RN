import React, { useState, useEffect, useCallback } from 'react'
import { ActivityIndicator } from 'react-native'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { addMonths, subMonths, format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { VictoryPie } from 'victory-native'

import { HistoryCard } from '../../components/HistoryCard'
import { useTheme } from 'styled-components'
import {
  Container,
  Header,
  Title,
  Content,
  ChartContainer,
  MonthSelect,
  MonthSelectBtn,
  MonthSelectIcon,
  Month,
  LoadContainer,
} from './styles'
import { categories } from '../../utils/categories'
import { RFValue } from 'react-native-responsive-fontsize'
import { useFocusEffect } from '@react-navigation/native'


interface TransactionsData {
  type: 'positive' | 'negative',
  name: string;
  amount: string;
  category: string;
  date: string;
}
interface CategoryData {
  key: string;
  name: string;
  total: number;
  totalFormatted: string;
  color: string;
  percent: string;
}

export function Resume() {
  const [isLoading, setIsLoading] = useState(false)
  const [totalPerCategory, setTotalPerCategory] = useState<CategoryData[]>([]);
  const [dateSelect, setDateSelect] = useState(new Date())

  const theme = useTheme();

  function handleDateChange(action: 'next' | 'prev') {
    if (action === 'next') {
      setDateSelect(addMonths(dateSelect, 1))
    }
    else {
      setDateSelect(subMonths(dateSelect, 1))
    }
  }

  async function LoadData() {
    setIsLoading(true)
    const dataKey = '@gofinances:transactions'
    const response = await AsyncStorage.getItem(dataKey);
    const responseFormatted = response ? JSON.parse(response) : [];

    const expenses = responseFormatted.
      filter((expenses: TransactionsData) => expenses.type === 'negative' &&
        new Date(expenses.date).getMonth() === dateSelect.getMonth() &&
        new Date(expenses.date).getFullYear() === dateSelect.getFullYear()
      )

    const expensesTotal = expenses.reduce((a: number, expenses: TransactionsData) => {
      return a + Number(expenses.amount)
    }, 0);

    const totalByCategory: CategoryData[] = []
    categories.forEach(category => {
      let categorySum = 0;

      expenses.forEach((expenses: TransactionsData) => {
        if (expenses.category === category.key) {
          categorySum += Number(expenses.amount);
        }
      });

      if (categorySum > 0) {
        const totalFormatted = categorySum.toLocaleString('pt-BR',
          {
            style: 'currency',
            currency: 'BRL'
          })
        const percent = `${(categorySum / expensesTotal * 100).toFixed(0)}%`

        totalByCategory.push({
          key: category.key,
          name: category.name,
          color: category.color,
          total: categorySum,
          totalFormatted: totalFormatted.replace('R$', 'R$ '),
          percent,
        })
      }
    })
    setTotalPerCategory(totalByCategory)
    setIsLoading(false)
  }

  useFocusEffect(useCallback(() => {
    LoadData();
  }, [dateSelect]))
  return (

    <Container>

      <Header>
        <Title>Resumo por categoria</Title>
      </Header>

      {isLoading
        ?
        <LoadContainer>
          <ActivityIndicator
            color={theme.colors.primary}
            size="large"
          />
        </LoadContainer>
        :

        <Content
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 24, paddingBottom: useBottomTabBarHeight() }}
        >

          <MonthSelect>

            <MonthSelectBtn onPress={() => handleDateChange('prev')}>
              <MonthSelectIcon name="chevron-left" />
            </MonthSelectBtn>

            <Month>{format(dateSelect, 'MMMM, yyyy', { locale: ptBR })}</Month>

            <MonthSelectBtn onPress={() => handleDateChange('next')}>
              <MonthSelectIcon name="chevron-right" />
            </MonthSelectBtn>
          </MonthSelect>


          <ChartContainer>
            <VictoryPie
              data={totalPerCategory}
              x="percent"
              y="total"
              colorScale={totalPerCategory.map(category => category.color)}
              style={{
                labels: {
                  fontSize: RFValue(18),
                  fontWeight: 'bold',
                  fill: theme.colors.shape
                }
              }}
              labelRadius={50}
            />
          </ChartContainer>

          {
            totalPerCategory.map(item => (
              <HistoryCard
                key={item.key}
                title={item.name}
                amount={item.totalFormatted}
                color={item.color}
              />
            ))
          }
        </Content>
      }
    </Container >
  )
}