import { Center } from 'native-base'
import {StyleSheet} from 'react-native'
import { ceil } from 'react-native-reanimated'
import { borderLeft, borderRadius, fontFamily, left, textAlign } from 'styled-system'


export const style=StyleSheet.create({
    card:{
        flex:1,
        backgroundColor:'rgba(255, 182, 193, 0.85)',
        elevation:3,
        shadowOffset:{width:1,height:1},
        shadowColor:'#333',
        shadowOpacity:0.3,
        shadowRadius:9,
        paddingLeft:10,
        paddingTop:30,
        paddingRight: 10,
    },
    container:{
        paddingLeft:130,
        paddingBottom:30,
        paddingTop: 8,
        fontFamily: 'sans-serif',
        fontWeight: 'normal',
        position: 'absolute',
        width: 299,
        height: 72,
        left: 32,
        top: 30,
        position: 'absolute',
        fontSize:20,
        paddingLeft:70
    
        

    
    },
    cards:{
        backgroundColor:'#fff',
        marginBottom:30,
        borderRadius:15,
       
    },
    Image:{
       /* position: 'absolute',
        paddingTop:300,*/
           
        
    },
    status:{
        paddingLeft:100,
        color:828282,
        
        
        
    },
    id:{
        position: 'absolute',
                left: 8,
                top: 2,
                paddingTop:10,
                

                
                
        
        
    },
    time:{
        alignSelf: 'flex-end',
        marginTop: 1,
        position:'absolute',
        paddingEnd:10,
        color:828282,
        paddingTop:10,
        fontSize:15,
        
        
    



    
        
    }
    
})