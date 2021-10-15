import React from "react"
import { Popover,Button} from "native-base"
import {View,Text,TouchableOpacity} from 'react-native'
import {style} from './DetailsStyle'
const PopOver=()=>{

return (

<Popover
        trigger={(triggerProps) => {
          return (
              <TouchableOpacity {...triggerProps}>
              <View  style={style.optionContainer}>
                  <Text style={style.Dots}>...</Text>
              </View>
              </TouchableOpacity>
          )
        }}
      >
        <Popover.Content  style={{alignItems:"center",padding:8}} accessibilityLabel="Delete Customerd" w="120">
          <Popover.Arrow />
         <TouchableOpacity style={{borderBottomColor:"rgba(0,0,0,0.1)",borderBottomWidth:1,width:100,alignItems:'center',padding:5}}>
             <Text>Update</Text>
         </TouchableOpacity>
         <TouchableOpacity style={{borderBottomColor:"rgba(0,0,0,0.1)",borderBottomWidth:1,width:100,alignItems:'center',padding:5}}>
             <Text>Delete</Text>
         </TouchableOpacity>
        </Popover.Content>
      </Popover>
)

    }
    export default PopOver;