import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const screenHeight = Dimensions.get('window').height;

export default EStyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '$primaryOrange',
    justifyContent: 'center',
  },
  startContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '$primaryOrange',
    justifyContent: 'flex-start',
    paddingHorizontal: 15,
  },

  parentContainer: {
    height: screenHeight,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 1,
    backgroundColor: '$primaryOrange',
    paddingHorizontal: 15,
  },
  ScrollContainer: {
    alignItems: 'center',
  },
});
