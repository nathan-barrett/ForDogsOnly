import { StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Welcome from '../screens/Welcome';
import Register from '../screens/Register';

const WelcomeStack = StackNavigator(
  {
    Welcome: {
      screen: Welcome,
      navigationOption: {
        header: () => null,
        headerTitle: 'Welcome',
      },
    },
    Register: {
      screen: Register,
      navigationOptions: {
        headerTitle: 'Register',
      },
    },
  },
  {
    headerMode: 'none',
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
  },
);
