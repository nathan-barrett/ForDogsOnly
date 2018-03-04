import { StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Welcome from '../screens/Welcome';
import Register from '../screens/Register';
import CreateProfile from '../screens/CreateProfile';
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
        headerBackTitle: () => null,
      },
    },
  },
  {
    headerMode: 'screen',
  },
);

const RegistrationStack = StackNavigator({
  Register: {
    screen: Register,
    navigationOptions: {
      headerTitle: 'Register',
      headerBackTitle: () => null,
    },
  },
  CreateProfile: {
    screen: CreateProfile,
    navigationOptions: {
      headerTitle: 'Register Profile',
      headerBackTitle: () => null,
    },
  },
});

export default StackNavigator(
  {
    Welcome: {
      screen: WelcomeStack,
    },
    Register: {
      screen: RegistrationStack,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
    cardsStyle: { paddingTop: StatusBar.currentHeight },
    navigationOptions: {
      headerStyle: styles.header,
    },
  },
);
