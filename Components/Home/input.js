import React from 'react'
import {TextInput,View,Text} from 'react-native'
import {styles} from './Styles/input'
const Input=({type,setdata,name,data})=>{

    const enterData=(text,name)=>{
            setdata({
                    ...data,
                    [name]:text
            })
    }
    return(
        <View style={styles.InputContainer}>
            <View>
                <Text style={styles.Text}>{type}</Text>
            {type=="Password"?<TextInput   onChangeText={text=>enterData(text,name)} secureTextEntry={true} style={styles.TextInput}/>:<TextInput onChangeText={text=>enterData(text,name)}  style={styles.TextInput}/>}
            </View>
        </View>
       
    )
}

export default Input;