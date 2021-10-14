import React,{useState} from 'react'
import Input from './input'
import {View,Text, Button,TouchableOpacity} from 'react-native';
import {styles} from './Styles/Login'
export default function Auth({nav}) {

    const [state,setstate]=useState(true);

    const openAuth=()=>{
        setstate(prev=>!prev);
    }
    const checkUser=()=>{
        nav.navigate('Patient')
    }
    return (
       <View style={styles.container}>
           <View style={{marginBottom:10}}>
               
               <Text style={styles.Heading}>{state?"WELCOME BACK 😃":"HI THERE 👋🏻"}</Text>
               <Text style={styles.SubHeading}>{state?"Log In your Account":"Let’s Get you Started"}</Text>
           </View>
           <Input type="Email" />
           <Input type="Password" />
           {state?null: <Input type="Hospital Name" />}
          {state?null:<Input type="Hospital Address" />}
           <TouchableOpacity onPress={()=>checkUser()}><View style={styles.Button}><Text style={styles.Text}>Continue</Text></View></TouchableOpacity>
           <View style={styles.Newuser}><Text style={styles.head}>{state?"New User?":"Existing User?"}</Text><TouchableOpacity onPress={()=>openAuth()}><Text style={styles.head1}> {state?"Signup":"Login"}</Text></TouchableOpacity></View>
       </View>
    )
}
