import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const AdressPickup = ({placeholderText,fetchAddress}) => {
    const onPressAddress = (data,details)=>{
        fetchAddress()
    }

  return (
    <View style={styles.container} >
      <GooglePlacesAutocomplete
      fetchDetails={true}
      placeholder={placeholderText}
      onPress={onPressAddress}
      query={{
        key: 'AIzaSyC_nHe-AcJKIPYBjmUK9dPtlhPQ-35Xess',
        language: 'en',
      }}
    />
    </View>
  )
}

export default AdressPickup

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
})