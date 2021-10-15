import React,{useState} from 'react'
import Input from './input'
import {signup,login,createUser} from '../../firebase/auth'
import {View,Text, Button,TouchableOpacity,Alert} from 'react-native';
import { Spinner } from 'native-base';
import {styles} from './Styles/Login'
export default function Auth({nav}) {

    const [state,setstate]=useState(true);
    const [spin,setspin]=useState(false)
    const [Credentials,setCredentials]=useState({Email:"",Password:"",hospitalName:"",Address:""})
    const openAuth=()=>{
        setstate(prev=>!prev);
    }
    const checkUser=()=>{
        // Login
        setspin(true)
        if(state){
            login(Credentials.Email.trim(),Credentials.Password.trim()).then(res=>{
                setspin(false)
                 nav.navigate('Patient');
            }).catch(err=> {
                setspin(false)
                Alert.alert("Login",`${err}`)
            })
        }
        //signup
        else{
            signup(Credentials.Email.trim(),Credentials.Password.trim()).then(res=>{
                setspin(false)
                nav.navigate('Patient')
                createUser(Credentials,res)
            }).catch(err=>{
                setspin(false)
                Alert.alert("SignUp",`${err}`)
            });
        }
    }


    return (
       <View style={styles.container}>
           <View style={{marginBottom:10}}>
               
               <Text style={styles.Heading}>{state?"WELCOME BACK 😃":"HI THERE 👋🏻"}</Text>
               <Text style={styles.SubHeading}>{state?"Log In your Account":"Let’s Get you Started"}</Text>
           </View>
           <Input setdata={setCredentials} data={Credentials} type="Email" name="Email" />
           <Input setdata={setCredentials} data={Credentials} type="Password" name="Password" />
           {state?null: <Input setdata={setCredentials} data={Credentials} type="Hospital Name" name="hospitalName" />}
          {state?null:<Input setdata={setCredentials} data={Credentials} type="Hospital Address" name="Address" />}
           <TouchableOpacity onPress={()=>checkUser()}><View style={styles.Button}>{spin?<Spinner size="lg"/>:<Text style={styles.Text}>Continue</Text>}</View></TouchableOpacity>
           <View style={styles.Newuser}><Text style={styles.head}>{state?"New User?":"Existing User?"}</Text><TouchableOpacity onPress={()=>openAuth()}><Text style={styles.head1}> {state?"Signup":"Login"}</Text></TouchableOpacity></View>
       </View>
    )
}
