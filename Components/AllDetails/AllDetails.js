import React from 'react'
import {style} from './DetailsStyle'
import {View,Text,Image} from 'react-native'

const AllDetails=()=>{
    return(
     <View style={style.container}>
            <View style={style.header}>
               <Image style={style.Image} source={require('../../assets/logo.png')}></Image>
               <Text style={style.heading}>PatientName</Text>
            </View>
        <View style={{marginTop:50}}>
            <View style={style.EachFullDetails}>
                <Text style={style.subheading}>Personal Details</Text>
                <View style={style.DetailsBack}>
                <View style={style.EachDetails}>
                    <Text>Name</Text>
                    <Text>Bebin</Text>
                </View>
                <View style={style.EachDetails}>
                    <Text>Name</Text>
                    <Text>Bebin</Text>
                </View>
            </View>
            </View>

            <View style={style.EachFullDetails}>
                <Text style={style.subheading}>Medical Details</Text>
                <View style={style.DetailsBack}>
                <View style={style.EachDetails}>
                    <Text>Name</Text>
                    <Text>Bebin</Text>
                </View>
                <View style={style.EachDetails}>
                    <Text>Name</Text>
                    <Text>Bebin</Text>
                </View>
            </View>
            </View>
        </View>
    </View>
    )
}

export default AllDetails;