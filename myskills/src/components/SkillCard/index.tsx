import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

type Props = {
  skill: String
}
export function SkillCard({ skill }: Props) {
  return (
    <TouchableOpacity style={styles.btnSkill} >
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