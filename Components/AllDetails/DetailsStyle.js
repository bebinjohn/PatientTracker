import {StyleSheet} from 'react-native'


export const style=StyleSheet.create({
    container:{
        backgroundColor:"pink",
        flex:1,
        padding:10
    },
    Image:{
        width:100,
        height:100
    },
    header:{
        alignItems:"center"
    },
    heading:{
        fontFamily:"Roboto",
        fontSize:25,
        color:"black",
        letterSpacing:1,
        fontWeight:"bold"
    },
    DetailsBack:{
        backgroundColor:"white",
        borderRadius:8,
        shadowOffset:{width:1,height:1},
        shadowColor:'gray',
        shadowOpacity:0.3,
        shadowRadius:9,
        padding:10
    },
    EachDetails:{
        flexDirection:"row",
        paddingBottom:8,
        justifyContent:"space-between",
        borderBottomColor:"rgba(0,0,0,0.1)",
        borderBottomWidth:1,
        marginVertical:5
    },
    subheading:{
        fontSize:15,
        fontWeight:"bold",
        marginBottom:8
    },
    EachFullDetails:{
        marginTop:10
    },
    optionContainer:{
        backgroundColor:"gray",
        width:25,
        height:25,
        borderRadius:100/2,
        flex:1,
        justifyContent:"center",
        alignItems:'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 5
    },
    Dots:{
        color:"white",
        marginBottom:10,
        letterSpacing:1,
        fontWeight:"bold"
    }
})