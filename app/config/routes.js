import { StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Welcome from '../screens/Welcome';
import Register from '../screens/Register';
import CreateProfile from '../screens/CreateProfile';
import Profile from '../screens/Profile';
import HomeFeed from '../screens/HomeFeed';

import styles from './styles';

const WelcomeStack = StackNavigator(
  {
    Welcome: {
      screen: Welcome,
      navigationOptions: {
        header: () => null,
      },
    },
    Register: {
      screen: Register,
      navigationOptions: {
        headerTitle: 'Register',
        headerBackTitle: null,
        headerStyle: { backgroundColor: '#373737' },
        headerTintColor: 'white',
      },
    },
    CreateProfile: {
      screen: CreateProfile,
      navigationOptions: {
        headerTitle: 'Register Profile',
        headerStyle: { backgroundColor: '#373737' },
        headerTintColor: 'white',
      },
    },
  },
  {
    headerMode: 'screen',
  },
);

const ProfileStack = StackNavigator({
  Profile: {
    screen: Profile,
    navigationOptions: {
      header: () => null,
    },
  },
}:
{
  headerMode: 'screen',
});

const HomeFeedStack = StackNavigator(
  {
    HomeFeed: {
      screen: HomeFeed,
      navigationOptions: {
        headerTitle: 'Home',
        headerStyle: { backgroundColor: '#373737' },
        headerTintColor: 'white',
      },
    },
  },
  {
    headerMode: 'screen',
  },
);
export default StackNavigator(
  {
    Welcome: {
      screen: WelcomeStack,
    },
    Profile: {
      screen: ProfileStack,
    },
    HomeFeed: {
      screen: HomeFeedStack,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
    cardsStyle: { paddingTop: StatusBar.currentHeight },
  },
);
