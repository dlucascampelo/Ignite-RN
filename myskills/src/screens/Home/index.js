import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, FlatList } from 'react-native'
import { Button } from '../../components/Button'
import { SkillCard } from '../../components/SkillCard'
import { styles } from './styles'

export function Home() {
  const [newSkill, setNewSkill] = useState('')
  const [mySkills, setMySkills] = useState([])
  const [gretting, setGreeting] = useState([])

  function handleAddNewSkill() {
    setMySkills(oldState => [...oldState, newSkill])
  }
  useEffect(() => {
    const currentHour = new Date().getHours()
    if (currentHour < 12) {
      setGreeting("Good Morning")
    }
    else if (currentHour > 12 && currentHour < 18) {
      setGreeting('Good afternoon')

    }
    else {
      setGreeting('Good evening')
    }
  }, [])
  return (
    <View style={styles.container}>
      <Text style={styles.title}> {gretting}, Dev =)</Text>
      <TextInput
        style={styles.input}
        placeholder="New Skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />
      <Button onPress={handleAddNewSkill} />
      <Text style={[styles.title, { marginVertical: 50 }]}>MySkills</Text>
      <FlatList
        data={mySkills}
        keyExtractor={item => item}
        renderItem={({ item }) => (<SkillCard skill={item} />)}
      />
    </View >
  )
}