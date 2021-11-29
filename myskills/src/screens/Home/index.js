import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { styles } from './styles'

export function Home() {
  const [newSkill, setNewSkill] = useState('')
  const [mySkills, setMySkills] = useState([])


  function handleAddNewSkill() {

    setMySkills(oldState => [...oldState, newSkill])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World</Text>

      <TextInput
        style={styles.input}
        placeholder="New Skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />
      <TouchableOpacity
        style={styles.button}
        activeOpacity={.7}
        onPress={handleAddNewSkill}

      >
        <Text style={styles.buttonTxt}>Add</Text>
      </TouchableOpacity>

      <Text style={[styles.title, { marginVertical: 50 }]}>MySkills</Text>

      {
        mySkills.map(skill => (
          <TouchableOpacity key={skill} style={styles.btnSkill} >
            <Text style={styles.txtSkill}>
              {skill}
            </Text>
          </TouchableOpacity>
        ))
      }



    </View >
  )
}