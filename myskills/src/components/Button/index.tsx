import React from 'react'
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'

interface ButtonProps extends TouchableOpacityProps {
  title: string
}

export const Button = ({ title, ...rest }: ButtonProps) => {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={.7}
      {...rest}
    >
      <Text style={styles.buttonTxt}>{title}</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#a370f7',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonTxt: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold'
  },
})