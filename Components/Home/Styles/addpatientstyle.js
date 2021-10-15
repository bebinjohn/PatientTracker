import {StyleSheet} from 'react-native'
export const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#EF4C7D",
        padding:10,
        paddingBottom:150,
        borderTopLeftRadius:5,
        borderTopRightRadius:5,

    },
    Heading:{
        color:"rgba(255, 255, 255, 0.75)",
        textAlign:"center",
        fontSize:22,
        fontFamily:"Roboto",
        borderRadius:5,
        height:60,
        justifyContent:"center",
        alignItems:"center",
        marginTop:10,
        

    },
    details:{
        marginBottom:10,
        backgroundColor:"rgba(0,0,0,0.6)",
        padding:20,
        top:70,
        borderRadius:21,

    },
    Button:{
       backgroundColor:"#EF4C7DDE",
       borderRadius:12,
       height:63,
       justifyContent:"center",
       alignItems:"center",
       marginTop:25,
    },
    Text:{
            color:"white",
            fontFamily:"Roboto",
            fontWeight:"bold",
            fontSize:17,
    },
    Input:{
        backgroundColor:"rgba(255, 255, 255, 0.25)",
        borderColor:"rgba(255, 255, 255, 0.2)",
        borderRadius:10,
        padding:10,
        marginTop:10,
        color:"white",
    }
    
})
