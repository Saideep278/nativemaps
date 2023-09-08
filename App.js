import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen.js'
import LoginScreen from './screens/LoginScreen.js';
import MapsScreen from './screens/MapsScreen.js';
import GroupsScreen from './screens/GroupsScreen.js';
import ViewGroup from './screens/ViewGroup.js';
import ChooseLocation from './screens/ChooseLocation.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options= {{headerShown: false }} name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen}  />
        <Stack.Screen name="Maps" component={MapsScreen} />
        <Stack.Screen name="Choose" component={ChooseLocation} />
        <Stack.Screen name="ViewGroups" component={ViewGroup} initialParams={{tname:''}} />
        <Stack.Screen name="Groups" component={GroupsScreen} initialParams={{gname:''}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
