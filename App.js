import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
import SearchScreen from "./src/screens/SearchScrean"
import BusinessShowScreen from "./src/screens/BusinessShowScreen"
const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    BusinessShow: BusinessShowScreen
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Foodie",
      headerStyle: { backgroundColor: "red" },
      headerTitleStyle: {
        color: "#ffffff",
        fontSize: 25,
        fontFamily: "AppleSDGothicNeo-Bold"
      }
    }
  }
)
export default createAppContainer(navigator)
