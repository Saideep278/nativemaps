import { StyleSheet, TouchableOpacity, Text, View, KeyboardAvoidingView, Alert } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/core'
import { auth } from '../firebase'
import { TextInput } from 'react-native'
import { getDatabase, ref, get, set, push, update, child } from "firebase/database";



const HomeScreen = () => {
  const [gname, setGname] = useState('')
  const navigation = useNavigation()
  const db = getDatabase();

  const handleJoinGroup = () => {
    const dbRef = ref(getDatabase());
    let res = {}
    get(child(dbRef, `groups/${gname}/`)).then((snapshot) => {
      if (snapshot.exists()) {
        res = snapshot.val().groupMembers
        let updres = [...res,auth.currentUser?.uid]

        update(ref(db,'groups/'+gname),{
          groupName:gname,
          groupMembers: updres
        }).then(()=>{
          Alert.alert('Success', 'Joined in a group in Firebase.');
        })
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
    


  }


  const handleCreateGroup = () => {
    try {
      set(ref(db, '/groups/' + gname), {
        groupName: gname,
        groupMembers: [auth.currentUser?.uid]
      }).then(() => {
        Alert.alert('Success', 'Group data saved to Firebase.');
      })
    } catch (error) {
      console.log(error);
      Alert.alert('Error', 'An error occurred while saving user data.');
    }

  }

 
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login")
      })
      .catch(error => alert(error.message))
  }

  const handleViewGroups = () => {
    const dbRef = ref(getDatabase());
    let res={}
    try {
      get(child(dbRef, `groups/`)).then((snapshot) => {
        if (snapshot.exists()) {
          res = snapshot.val()
          navigation.replace("Groups",{gname:res})
          
          
          }
        }
      )
    } 
    catch(error) {
      console.log(error);
      Alert.alert('Error', 'An error occurred while saving user data.');
    }
    
  }

  return (
    <View style={styles.container}>
      <View>
        <Text>Email: {auth.currentUser?.email}</Text>
        <TouchableOpacity
          onPress={handleViewGroups}
          style={styles.button}
        >
        <Text style={styles.buttonText}>View Groups</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          onPress={handleSignOut}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Sign out</Text>
        </TouchableOpacity>
      </View>
      <View style={{ padding: 30 }} >

        <KeyboardAvoidingView behavior='padding'  >
          <View>
            <TextInput placeholder='Group Name'
              style={styles.input}
              value={gname}
              onChangeText={text => setGname(text)}
            />
          </View>
        </KeyboardAvoidingView>
        <TouchableOpacity onPress={handleCreateGroup} style={styles.button} >
          <Text style={styles.buttonText} >Create a group</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleJoinGroup} style={styles.button} >
          <Text style={styles.buttonText} >Join a group</Text>
        </TouchableOpacity>

      </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    backgroundColor: '#0782F9',
    width: '60%',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
})

//auth.currentUser?.uid

//<TouchableOpacity onPress={handleCreateGroup} style={styles.button} >
//<Text style={styles.buttonText} >Create a group</Text>
//</TouchableOpacity>
//https://native-578d3-default-rtdb.asia-southeast1.firebasedatabase.app/


/*



/* update(ref(db,'groups/'+gname),{
  groupName:gname,
  groupMembers:[]
}).then(()=>{
  Alert.alert('Success', 'Joined in a group in Firebase.');
}) */

/*
get(child(dbRef, `groups/${gname}`)).then((snapshot) => {
      if (snapshot.exists()) {
        const res = snapshot.val()
        console.log(res.Team1);
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });



*/