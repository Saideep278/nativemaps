import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getDatabase, ref, get, set, push, update, child } from "firebase/database";
import { useNavigation } from '@react-navigation/native';
import { Link } from '@react-navigation/native';



const GroupsScreen = ({ route }) => {
  const navigation = useNavigation()
  const groups = route.params.gname
  //accesing props

  let ggroups = Object.values(groups);

  const handleback = () => {
    navigation.replace("Home")
  }

  return (
    <View>

        <TouchableOpacity
          onPress={handleback}
          style={styles.button}
        >
        <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
      <Text>GroupsScreen  </Text>
      <View>
        {ggroups.map((item, index) => (
          <Link to={{ screen: 'ViewGroups', params: { tname: item.groupMembers } }}>
            <Text style={styles.buttonText} key={index}>{item.groupName}</Text>
          </Link>
        ))}
      </View>
    </View>
  )
}

export default GroupsScreen;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#0782F9',
    width: '30%',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    
    fontWeight: '700',
    fontSize: 16,
  },
});


/*


useEffect( ()=>{
        const dbRef = ref(getDatabase());
        get(child(dbRef, `groups/`)).then((snapshot) => {
            if (snapshot.exists()){
                const k = snapshot.val()
                console.log(k);
                setg(k)
                console.log(1111);
                console.log(gd);
                
            }
        })
     },[] )
*/