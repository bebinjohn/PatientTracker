import React from 'react'
import {View,Text, TouchableOpacity} from 'react-native'
import { Heading, VStack, Center, NativeBaseProvider, Card,Image } from "native-base"
import {style} from './patientstyles'
export default function ViewPatient({navigation}) {
    return (
        <View style={style.card}>
            {/* <Heading textAlign="center" mb="10">
        PATIENTS
        </Heading> */}
        <TouchableOpacity onPress={() => navigation.navigate('Details')}>
        <Card style={style.cards}>
      <Image  source={{uri: 'https://cdn4.vectorstock.com/i/1000x1000/60/88/doctor-icon-with-medical-tools-in-abstract-circle-vector-21566088.jpg'}}
      style={{width: 70, height: 70,top:20}}/>
        <Text style={style.container}>patient_name</Text>
        <Text style={style.status}>status</Text>
        <Text style={style.id}>patient_id</Text>
        <Text style={style.time}>visited_time</Text>
        </Card> 
        </TouchableOpacity>   
        <TouchableOpacity onPress={() => navigation.navigate('Details')}>
        <Card style={style.cards}  >
        <Image  source={{uri: 'https://img.lovepik.com/element/45000/4103.png_860.png'}}
      style={{width: 70, height: 70,top:20,}}/>
        <Text style={style.container}>patient_name</Text>
        <Text style={style.status}>status</Text>
        <Text style={style.id}>patient_id</Text>
        <Text style={style.time}>visited_time </Text>
        </Card> 
        </TouchableOpacity>   
        </View>
    )
}


