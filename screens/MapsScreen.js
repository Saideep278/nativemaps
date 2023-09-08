import { StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'
import MapView, { Marker } from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions'

const MapsScreen = () => {
    const [state, setState] = useState({
        pickup: {
            latitude: 18.1018,
            longitude: 78.8520,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
        },
        dest: {
            latitude: 17.3850,
            longitude: 78.4867,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
        }
    })
    const mapRef = useRef()
    const { pickup, dest } = state
    return (
        <View style={styles.container}>
            <View style={{flex:1}} >
            <MapView
                ref={mapRef}
                style={StyleSheet.absoluteFill}
                initialRegion={pickup} >
                <Marker
                    coordinate={pickup} />
                <Marker
                    coordinate={dest}
                />
                <MapViewDirections
                    origin={pickup}
                    destination={dest}
                    apikey={"AIzaSyC_nHe-AcJKIPYBjmUK9dPtlhPQ-35Xess"}
                    stokeWidth={3}
                    stokeColor="hotpink"
                    optimizewaypoints={true}
                    onReady={result => {
                        mapRef.current.fitToCoordinates(result.coordinates, {
                            edgePadding: {
                                right: 30,bottom: 300, left: 30, top: 100
                            }
                        })
                    }}
                />
            </MapView>
            </View>
            <View style={{ padding:30 }} >
                <Text>Welcome to Maps</Text>
            </View>

        </View>
    )
}



export default MapsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})