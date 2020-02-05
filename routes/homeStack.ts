import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SignIn from '../components/SignIn/SignIn'
import Dashboard from '../components/Dashboard/Dashboard'
import { FeedDetails } from "../components/FeedDetails/FeedDetails"

const LoginStack = createStackNavigator({
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      title: "SignIn"
    }
  }
});

const DashboardStack = createStackNavigator({
  Dashboard: {
    screen: Dashboard
  },
  FeedDetails: {
    screen: FeedDetails
  }
});

const AppContainer = createSwitchNavigator({
  Login: LoginStack,
  Dashboard: DashboardStack
});

export const Router = createAppContainer(AppContainer);