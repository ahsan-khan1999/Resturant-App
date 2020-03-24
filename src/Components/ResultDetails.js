import React from 'react'
import {Text , View , StyleSheet , Image} from 'react-native'
export default ResultDetails = ({result}) => {
    return (
        <View style={style.container}>
            <Image style={style.image} source={{uri:result.image_url}} />
            <Text style={style.name} >{result.name}</Text>     
            <Text>{result.rating} stars , {result.review_count} Reviews</Text>
        </View>
    )
}
const style = StyleSheet.create({
    container:{
        marginLeft:15,
    },  
    
    image:{
        height:120,
        width:250,
        borderRadius:4,
    },
    name:{
        fontSize:15,
        fontWeight:'bold',
        marginTop:2,
    },
});
