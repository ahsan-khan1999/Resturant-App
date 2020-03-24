import 'react-native-gesture-handler'
import { createAppContainer  } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import SearchBar from './src/screens/SearchBar'
import Search from './src/Components/Search'
import ResutsShow from './src/screens/ResutsShow'
const navigator = createStackNavigator({
    Search:SearchBar,
    SearchB: Search,
    ShowResults:ResutsShow,

},{
  initialRouteName:'Search',
  defaultNavigationOptions:{
    title: 'Business Search'
  }

});
export default createAppContainer(navigator);

