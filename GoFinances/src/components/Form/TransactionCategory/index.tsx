import React from 'react';
import { Container, Category, Icon } from './styles';

interface Props {
  title: string;
  onPress: () => void
}

export function TransactionCategory({ title, onPress }: Props) {
  return (
    <Container onPress={onPress}>
      <Category>{title}</Category>
      <Icon name="chevron-down"></Icon>
    </Container>
  )
}