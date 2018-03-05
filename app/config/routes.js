import { StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Welcome from '../screens/Welcome';
import Register from '../screens/Register';
import CreateProfile from '../screens/CreateProfile';
import Profile from '../screens/Profile';

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
      },
    },
    CreateProfile: {
      screen: CreateProfile,
      navigationOptions: {
        headerTitle: 'Register Profile',
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
});
export default StackNavigator(
  {
    Welcome: {
      screen: WelcomeStack,
    },
    Profile: {
      screen: ProfileStack,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
    cardsStyle: { paddingTop: StatusBar.currentHeight },
  },
);
