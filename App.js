import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
import SearchScreen from "./src/screens/SearchScrean"

const navigator = createStackNavigator(
  {
    Search: SearchScreen
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Foodie",
      headerStyle: { backgroundColor: "red" },
      headerTitleStyle: {
        color: "#ffffff",
        fontSize: 25
      }
    }
  }
)
export default createAppContainer(navigator)
