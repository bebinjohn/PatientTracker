import {StyleSheet} from 'react-native'

export const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#EF4C7D"
    },
    Home:{
        justifyContent:"center",
        alignItems:"center",
        flex:1
    },
    Heading:{
        fontFamily:'Roboto',
        fontWeight:"bold",
        color:"white",
        fontSize:30
    },
    SubHeading:{
        fontFamily:'Roboto',
        fontWeight:"bold",
        color:"white",
        fontSize:12,
    },
    Button:{
        backgroundColor:"#1976D2",
       padding:10,
       borderRadius:25,
       marginTop:8
    },
    Text:{
            color:"white",
            fontFamily:"Roboto",
            fontWeight:"bold"
    }
})