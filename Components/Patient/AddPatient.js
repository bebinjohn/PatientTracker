import React from 'react'
import {View,Text,TextInput,TouchableOpacity,ScrollView} from 'react-native'
import {styles} from '../Home/Styles/addpatientstyle'
import Input from '../Home/input'
import { Radio, Center, NativeBaseProvider,value } from "native-base"
import { style } from 'styled-system'
export default function AddPatient() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.details}>
            <Text style={styles.Heading}>Enter Patient Details</Text>
            <Input type="Name"/>
            <Input type="Gender"/>
            <Input type="Age" id="number"/>
            <Input type="Phone number" id="number"/>
            <Input type="DOB"/>
            <Input type="Address"/>
            <Input type="E-mail address"/>
            {/* <Input type="Disease"/> */}
            <Input type="Glucose levels"/>
            <Input type="Blood Group"/>
            <Input type="Registration date and time"/>
        <View style={styles.Input}>

            <Text style={styles.Text}>Have you previously attended our hospital</Text>
           
            <Radio.Group
      name="myRadioGroup"
      accessibilityLabel="favorite number"
      value={value}
      onChange={(nextValue) => {
        setValue(nextValue)
      }}
    >
      <Radio value="one" my={1}>
        Yes
      </Radio>
      <Radio value="two" my={1}>
        No
      </Radio>
    </Radio.Group>
    </View>
  

            <Input type="Appointment"/>
            <TouchableOpacity onPress={()=>checkUser()}><View style={styles.Button}><Text style={styles.Text}>Submit form</Text></View></TouchableOpacity>
            
            </View>
        </ScrollView>
    )
}

