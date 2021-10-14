import {StyleSheet} from 'react-native'

export const styles=StyleSheet.create({
    Button:{
        backgroundColor:"#EF4C7DDE",
       borderRadius:10,
       height:60,
       justifyContent:"center",
       alignItems:"center",
       marginTop:8
    },
    Text:{
            color:"white",
            fontFamily:"Roboto",
            fontWeight:"bold"
    },
    container:{
        backgroundColor:" rgba(0, 0, 0, 0.6)",
        padding:40,
        paddingBottom:150,
        borderTopLeftRadius:25,
        borderTopRightRadius:25
    },
    Heading:{
        color:"rgba(255, 255, 255, 0.75)",
        textAlign:"center",
        fontSize:10,
        fontFamily:"Roboto"
    },
    SubHeading:{
        color:"rgba(255, 255, 255, 0.75)",
        textAlign:"center",
        fontSize:22,
        fontFamily:"Roboto"
    },
    Newuser:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        marginTop:5
    },
    head:{
        color:"rgba(255, 255, 255, 0.75)",
        fontSize:12,
        fontFamily:"Roboto"
    },
    head1:{
        color:"rgba(255, 255, 255, 0.75)",
        fontSize:15,
        fontFamily:"Roboto",
        fontStyle:"italic"
    }
})