import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, FlatList } from 'react-native'
import { Button } from '../../components/Button'
import { SkillCard } from '../../components/SkillCard'
import { styles } from './styles'

interface SkillProps {
  id: string;
  name: string;
}

export function Home() {
  const [newSkill, setNewSkill] = useState('')
  const [mySkills, setMySkills] = useState<SkillProps[]>([])
  const [gretting, setGreeting] = useState('')

  function handleAddNewSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill
    }
    setMySkills(oldState => [...oldState, data])
  }

  function handleRemoveSkill(id: string) {
    setMySkills(oldState => oldState.filter(
      skill => skill.id !== id
    ))
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
      <Button title="Add" onPress={handleAddNewSkill} />
      <Text style={[styles.title, { marginVertical: 50 }]}>MySkills</Text>
      <FlatList
        data={mySkills}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <SkillCard
            onPress={() => handleRemoveSkill(item.id)}
            skill={item.name} />)}
      />
    </View >
  )
}