import { StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Welcome from '../screens/Welcome';
import Register from '../screens/Register';
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

export default StackNavigator(
  {
    Welcome: {
      screen: WelcomeStack,
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
