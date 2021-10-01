import React from 'react'
import {View,Button} from 'react-native'
import Login from './Login'
import Signup from './signup'
export default function Home({navigation}) {
    return (
       <View style={{margin:80}}>
          <Login/>
          <Signup/>
          <Button onPress={()=>navigation.navigate('Patient')} title="Go to patients"/>
       </View>
    )
}
