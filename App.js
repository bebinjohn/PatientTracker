
import React from 'react';
import Home from './Components/Home/Home';
import { NativeBaseProvider } from 'native-base';
import Patient from './Components/Patient/Patients';
import AllDetails from './Components/AllDetails/AllDetails';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NativeBaseProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}} name="Home"  component={Home} />
        <Stack.Screen  options={{headerShown:false}}name="Patient"  component={Patient} />
        <Stack.Screen  name="Details" component={AllDetails}/>
      </Stack.Navigator>
    </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;