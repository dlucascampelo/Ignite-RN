import React, { useCallback, useEffect, useState } from 'react'
import { ActivityIndicator, Alert } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFocusEffect } from '@react-navigation/native'
import { useTheme } from 'styled-components'
import { useAuth } from '../../hooks/auth'

import { HighlightCard } from '../../components/HighlightCard'
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard'

import {
  Container,
  LoadContainer,
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
  TransactionsList,
  LogoutButton,

} from './styles'

export interface DataListProps extends TransactionCardProps {
  id: string;
}

interface HighlightProps {
  amount: string;
  lastTransaction: string;
}

interface HighlightData {
  entries: HighlightProps;
  expenses: HighlightProps;
  total: HighlightProps;
}
export function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [transactions, setTransactions] = useState<DataListProps[]>([])
  const [highlightData, setHighlightData] = useState<HighlightData>({} as HighlightData)

  const theme = useTheme();
  const { signOut, user } = useAuth()
  const dataKey = `@gofinances:transactions_user:${user.id}`

  function getLastTransactionDate(collection: DataListProps[], type: 'positive' | 'negative') {

    const collectionFilter = collection.filter(transaction => transaction.type === type)
    if (collectionFilter.length === 0) {
      return 0;
    };

    const lastTransaction = new Date(Math.max.apply(Math, collectionFilter
      .map(transaction => new Date(transaction.date).getTime())))
    return `${lastTransaction.getDate()} de ${lastTransaction.toLocaleString('pt-BR', { month: 'long' })}`

  }

  async function loadTransactionsData() {
    const response = await AsyncStorage.getItem(dataKey)
    const transactions = response ? JSON.parse(response) : []

    let entriesTotal = 0;
    let expensesTotal = 0;

    const transactionsFormatted: DataListProps[] = transactions
      .map((item: DataListProps) => {

        if (item.type === 'positive') {
          entriesTotal += Number(item.amount)
        }
        else {
          expensesTotal += Number(item.amount)
        }
        const amount = Number(item.amount).toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        });
        const date = Intl.DateTimeFormat('pt-br', {
          day: '2-digit',
          month: '2-digit',
          year: '2-digit',
        }).format(new Date(item.date));

        return {
          id: item.id,
          name: item.name,
          amount: amount.replace('R$', 'R$ '),
          type: item.type,
          category: item.category,
          date,
        };
      });
    setTransactions(transactionsFormatted);
    const lastTransactionEntries = getLastTransactionDate(transactions, 'positive')
    const lastTransactionExpenses = getLastTransactionDate(transactions, 'negative')
    const totalInterval = lastTransactionExpenses === 0
      ? "Ainda não há transações"
      : `01 a ${lastTransactionExpenses}`

    const total = entriesTotal - expensesTotal;
    setHighlightData({
      entries: {
        amount: entriesTotal.toLocaleString('pt-BR',
          {
            style: 'currency',
            currency: 'BRL'
          }),
        lastTransaction: lastTransactionEntries === 0
          ? "Ainda não há transações"
          : `Última entrada dia ${lastTransactionEntries}`,
      },
      expenses: {
        amount: expensesTotal.toLocaleString('pt-BR',
          {
            style: 'currency',
            currency: 'BRL'
          }),
        lastTransaction: lastTransactionExpenses === 0
          ? "Ainda não há transações"
          : `Última entrada dia ${lastTransactionExpenses}`,
      },
      total: {
        amount: total.toLocaleString('pt-BR',
          {
            style: 'currency',
            currency: 'BRL'
          }),
        lastTransaction: totalInterval
      }
    });
    setIsLoading(false)
  }
  async function handleRemoveSkill(transactionId: string) {

    const response = await AsyncStorage.getItem(dataKey);
    const storagedTransactions = response ? JSON.parse(response) : [];

    const filteredTransactions = storagedTransactions
      .filter((transaction: DataListProps) => transaction.id !== transactionId);

    setTransactions(filteredTransactions);
    await AsyncStorage.setItem(dataKey, JSON.stringify(filteredTransactions));

    loadTransactionsData()
  }
  function alert(name: string, id: string,) {
    Alert.alert(`Você deseja deletar ${String(name)}`,
      "",
      [
        { text: 'Cancelar', },
        { text: 'Deletar', onPress: () => handleRemoveSkill(id) },
      ],
      { cancelable: false }
    )
  }
  function signOutAlert() {
    Alert.alert(`Tem certeza que deseja sair do GoFinances?`,
      "",
      [
        { text: 'Cancelar', },
        { text: 'Confirmar', onPress: signOut },
      ],
      { cancelable: false }

    )
  }

  useFocusEffect(useCallback(() => {
    loadTransactionsData();

  }, []))
  return (
    <Container>

      {isLoading ?
        <LoadContainer>
          <ActivityIndicator
            color={theme.colors.primary}
            size="large"
          />
        </LoadContainer>
        :
        <>
          <Header>
            <UserWrapper>

              <UserInfo>
                <Photo source={{ uri: user.photo }} />
                <User>
                  <UserGreeting>Olá,</UserGreeting>
                  <UserName>{user.name}</UserName>
                </User>
              </UserInfo>

              <LogoutButton onPress={signOutAlert}>
                <Icon name="power" />
              </LogoutButton>

            </UserWrapper>
          </Header>

          <HighlightCards>
            <HighlightCard
              title="Entradas"
              amount={highlightData.entries.amount}
              lastTransaction={highlightData.entries.lastTransaction}
              type="up"
            />
            <HighlightCard
              title="Saídas"
              amount={highlightData.expenses.amount}
              lastTransaction={highlightData.expenses.lastTransaction}
              type="down"
            />
            <HighlightCard
              title="Total"
              amount={highlightData.total.amount}
              lastTransaction={highlightData.total.lastTransaction}
              type="total"
            />
          </HighlightCards>

          <Transactions>
            <Title>Listagem</Title>
            <TransactionsList
              data={transactions}
              keyExtractor={item => item.id}
              renderItem={({ item }) => <TransactionCard
                onPress={() => alert(item.name, item.id)}
                data={item} />}

            />

          </Transactions>
        </>
      }
    </Container >
  )
}