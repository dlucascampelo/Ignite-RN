import React from 'react'
import { TouchableOpacity, TouchableOpacityProps, Text, StyleSheet } from 'react-native'

interface Props extends TouchableOpacityProps {
  skill: String
}
export function SkillCard({ skill, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.btnSkill}
      {...rest}
    >
      <Text style={styles.txtSkill}>
        {skill}
      </Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  btnSkill: {
    backgroundColor: '#1f1e25',
    padding: 10,
    borderRadius: 50,
    alignItems: 'center',
    marginVertical: 10,
  },
  txtSkill: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  },
})