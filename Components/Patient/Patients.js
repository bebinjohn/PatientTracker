import  React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import AddPatient from './AddPatient';
import ViewPatient from './ViewPatient';


const Drawer = createDrawerNavigator();

export default function App() {
  return (
 
      <Drawer.Navigator  initialRouteName="view patients">
        <Drawer.Screen  name="view patients" options={{title:"Patients"}} component={ViewPatient} />
        <Drawer.Screen name="Add Patients" component={AddPatient} />
      </Drawer.Navigator>
  );
}