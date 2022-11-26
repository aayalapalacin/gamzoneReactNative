import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/home";
import ReviewsDetails from "../screens/reviewsDetails";
const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      title: "GameZone",
    },
  },
  ReviewsDetails: {
    screen: ReviewsDetails,
    navigationOptions: {
      title: "Review Details",
    },
  },
};
const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: "#eee",
    },
    headerTintColor: "#444",
  },
});

export default HomeStack;
