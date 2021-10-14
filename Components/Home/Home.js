import React ,{useState}from 'react'
import {View,Button,Text,TouchableOpacity,Animated} from 'react-native'
import Auth from './Auth'
import {styles} from './Styles/Home'
export default function Home({navigation}) {
   const value=useState(new Animated.Value(500))[0];
   const [show,setshow]=useState(false);
   const startAnimation=()=>{
      setshow(true);
      Animated.timing(value,{
         toValue:0,
         duration:1000,
         useNativeDriver:false
      }).start()
   }
    return (
       
       <View style={styles.container}>

            <View style={styles.Home}>
             <Text style={styles.Heading}>Hello Doctor</Text>
             <Text style={styles.SubHeading}>Physician’s Companion</Text>
             <TouchableOpacity onPress={()=>startAnimation()} style={!show?{display:"flex"}:{display:"none"}}><View style={styles.Button}><Text style={styles.Text}>Get Started</Text></View></TouchableOpacity>
          </View>
          <Animated.View style={!show?{transform:[{translateY:value}],display:"none"}:{transform:[{translateY:value}],display:"flex"}}>
          <Auth nav={navigation}/>
          </Animated.View>
         
         
       </View>
    )
}
