import React ,{ useState , useEffect}from 'react'
import {Text , View, StyleSheet,FlatList,Image} from 'react-native'
import yelp from '../api/yelp'
import { SliderBox } from 'react-native-image-slider-box' 

export default ResutsShow = ({navigation}) => {
    const [result,setResult] = useState(null);
    const id = navigation.getParam('id');

    const getIDResults = async (id) => {
        const respone = await yelp.get(`/${id}`);
        setResult(respone.data);
    };
    useEffect(() =>{
        getIDResults(id);
    } ,[]);

    if(!result){
        return null;
    }

    return (
        <View>
            <Text>{result.name}</Text>
            {/* <FlatList 
            data={result.photos}
            keyExtractor={(photo) => photo}
            renderItem={({item}) => {
                return <Image style={style.image} source={{ uri : item}} />
            }}
            /> */}
            <SliderBox style={style.image}
                images = {result.photos} 
            />
                


        </View>
    )
}

const style= StyleSheet.create({
    image:{
        flex:1,
        height:300,
        width:300,
        marginBottom:10
    },  


});