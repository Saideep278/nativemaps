import { StyleSheet, Text, TextInput,TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

const ViewGroup = ({route}) => {
    const navigation = useNavigation() 

    const mem = route.params.tname
    const viewmaps = ()=>{
        navigation.replace("Choose")
    }

    
  return (
    <View>
      <Text>GroupMembers</Text>
        {mem.map((item, index) => (
            <Text key={index}>{item}</Text>
        ))}
        <View>
        
        <Text style={styles.input} >Where are you going ?</Text>
        <View>
        <TouchableOpacity onPress={viewmaps} style={styles.button} >
            <Text style={styles.buttonText} >Choose Location</Text>
          </TouchableOpacity>
        </View>

        </View>
    </View>
  )
}

export default ViewGroup


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    inputContainer: {
      width: '80%'
    },
    input: {
      backgroundColor: 'white',
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 10,
      marginTop: 15,
      
      marginBottom:15,
      borderRadius:80,
      width:'100%',
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
      marginTop: 5,
      borderColor: '#0782F9',
      borderWidth: 2,
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