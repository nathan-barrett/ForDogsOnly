import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const screenHeight = Dimensions.get('window').height;
// const screenWidth = Dimensions.get('window').height;

export default EStyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#cfd8dc',
    justifyContent: 'center',
  },
  startContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#cfd8dc',
    justifyContent: 'flex-start',
    paddingHorizontal: 15,
  },

  parentContainer: {
    height: screenHeight,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 1,
    backgroundColor: '#cfd8dc',
    paddingHorizontal: 15,
  },
  ScrollContainer: {
    alignItems: 'center',
  },
  profileTop: {
    backgroundColor: 'white',
    top: -20,
    height: 20,
    position: 'absolute',
    width: '100%',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
});
