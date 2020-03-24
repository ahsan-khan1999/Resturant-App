import React ,{useState , useEffect} from 'react'
import { Text , View ,StyleSheet , ScrollView} from 'react-native'
import Search  from '../Components/Search'
import useBusiness from '../hooks/useBusiness'
import ResultList from '../Components/ResultList'
// import { ScrollView } from 'react-native-gesture-handler'
const SearchBar = () =>{    
    const [term,setTerm] = useState('');
    const [searchApi, results,error] =useBusiness();

    const filterResultsByPrice = (price) =>{
        return results.filter(results => {
            return results.price === price;
        });
    };
    return (

        <View style={{flex:1}}>
            <Search term={term} onTermChange={(newTerm) => setTerm(newTerm)} onTermSubmit={() => searchApi(term)} />
            {error ? <Text>{error}</Text> : null}
            {/* <Text>We have found {results.length}</Text> */}
<ScrollView>
            <ResultList results={filterResultsByPrice('$')} title="Cost Effective" />
            <ResultList results={filterResultsByPrice('$$')} title="Bit Pricear" />
            <ResultList results={filterResultsByPrice('$$$')} title="Most Expensive" />
        </ScrollView>
        </View>


    );
}
export default SearchBar;

const style = StyleSheet.create({
   
});

// useEffect hook allows us to run some snippet of code when the component was first rendered