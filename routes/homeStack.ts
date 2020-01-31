import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer }from 'react-navigation';
import SignIn from '../components/SignIn/SignIn'
import Dashboard from '../components/Dashboard/Dashboard'


const screens = {
  SignIn: {
    screen: SignIn
  },
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
      gestureEnabled: false,
      headerLeft: null
    },
  },
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);