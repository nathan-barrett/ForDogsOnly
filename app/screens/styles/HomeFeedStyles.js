import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

export default EStyleSheet.create({
  container: {
    zIndex: 2,
    width: screenWidth,
    backgroundColor: 'transparent',
    paddingVertical: 24,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
