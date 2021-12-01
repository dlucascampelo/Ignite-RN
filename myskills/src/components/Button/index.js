import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

export const Button = ({ onPress }) => {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={.7}
      onPress={onPress}
    >
      <Text style={styles.buttonTxt}>Add</Text>
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