import { StyleSheet, Platform } from 'react-native'
export const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 30,
    paddingVertical: 70,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1f1e25',
    color: '#fff',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 10,
  },
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