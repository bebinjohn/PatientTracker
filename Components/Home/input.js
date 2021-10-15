import React from 'react'
import {TextInput,View,Text} from 'react-native'
import {styles} from './Styles/input'
const Input=({type,id})=>{
    return(
        <View style={styles.InputContainer}>
            <View>
                <Text style={styles.Text}>{type}</Text>
            {type==="Password"?<TextInput secureTextEntry={true} style={styles.TextInput}/>
            :id==="number"? <TextInput keyboardType="numeric" style={styles.TextInput}/>:<TextInput style={styles.TextInput}/>}
            </View>
        </View>
       
    )
}

export default Input;