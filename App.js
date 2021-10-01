
import React from 'react';
import Home from './Components/Home/Home';
import Patient from './Components/Patient/Patients';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}} name="Home"  component={Home} />
        <Stack.Screen  options={{headerShown:false}}name="Patient"  component={Patient} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;