import React from 'react'
import { Text , View , StyleSheet ,TextInput} from 'react-native'
// import { Input } from 'native-base';

import Icon from 'react-native-vector-icons/Ionicons'
export default Search = ({term,onTermChange,onTermSubmit}) => {
    return (
        <View style={style.in}>
            <Icon name='ios-search'style={style.iconStyle} />
            <TextInput style={style.textInput   }
            value={term}
            onChangeText = {newTerm => onTermChange(newTerm)}
            onEndEditing={onTermSubmit}
            placeholder="Search"
            />


        </View>
    );
};
const style = StyleSheet.create({
    in:{
        backgroundColor: '#ffb000',
        height:50,
        borderRadius:3,
        marginHorizontal:15,
        marginTop:10,
        flexDirection:'row',
        marginBottom:10

        // flex:1,
    },
    textInput:{
        borderWidth:0,
        flex:1,
        borderColor:'black',
        fontSize:20,
    },
    iconStyle:{
        fontSize:40,
        alignSelf:'center',
        marginHorizontal:8,
    },

});
// export default Search;