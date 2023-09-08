import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import AdressPickup from '../components/AdressPickup'
import { useNavigation } from '@react-navigation/native'


const ChooseLocation = ({}) => {
  const navigation = useNavigation()
  const onDone = ()=>{
    navigation.goBack()
  }
  const fetchAddressCords = () => {
    
  }
  return (
    <View style={styles.container} > 

      <AdressPickup placeholderText={'Pick Up'} fetchAddress = {fetchAddressCords}  />
      <AdressPickup placeholderText={'Destination'} />

      <TouchableOpacity onPress={onDone} style={[styles.button,styles.buttonOutline]} >
            <Text style={styles.buttonOutlineText} >Done</Text>
          </TouchableOpacity>

    </View>
  )
}

export default ChooseLocation

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    width: '80%'
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#0782F9',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonOutline: {
    backgroundColor: 'white',

    borderColor: '#0782F9',

  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOutlineText: {
    color: '#0782F9',
    fontWeight: '700',
    fontSize: 16,
  },
})
