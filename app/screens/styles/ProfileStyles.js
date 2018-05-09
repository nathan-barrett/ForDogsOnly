import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export default EStyleSheet.create({
  profileContainer: {
    flex: 1,
    alignItems: 'center',
  },
  bottom: {
    flex: 1,
    backgroundColor: 'white',
    width: '$screenWidth',
    // borderTopRightRadius: 25,
    // borderTopLeftRadius: 25,
  },
  messageButton: {
    alignItems: 'center',
  },
});
