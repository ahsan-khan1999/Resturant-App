import React from 'react'
import {Text ,View ,StyleSheet ,FlatList ,TouchableOpacity} from 'react-native'
import ResultDetails from '../Components/ResultDetails'
import { withNavigation} from 'react-navigation'
const ResultList = ({title , results , navigation}) => {

    if(!results.length){
        return null;
    }

    return (
        <View style={style.container}>
            <Text style={style.title}>{title}</Text>    
            {/* <Text>Result are : {results.length}</Text> */}
            <FlatList 
            horizontal
            showsHorizontalScrollIndicator={false}
            data={results}
            keyExtractor={ results => results.id}
            renderItem={({item}) => 
               { return (
                   <TouchableOpacity onPress={() => navigation.navigate('ShowResults',{id : item.id })}>
                       <ResultDetails result={item} /> 
                    </TouchableOpacity>
               ) 
               
            }}
            />
        </View>
    )
}

const style = StyleSheet.create({
    title:{
        fontWeight:'bold',
        fontSize:17,
        marginBottom:5,
        marginLeft:15
    },
    container : {
        marginBottom:10
    },  
});
export default withNavigation(ResultList);