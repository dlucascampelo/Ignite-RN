import React from 'react';
import { Container, Category, Icon } from './styles';

interface Props {
  title: string
}

export function TransactionCategory({ title }: Props) {
  return (
    <Container>
      <Category>{title}</Category>
      <Icon name="chevron-down"></Icon>
    </Container>
  )
}