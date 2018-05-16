import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default EStyleSheet.create({
  imagePost: {
    alignSelf: 'center',
    width: 340,
    height: 300,
    marginVertical: 10,
  },
  welcomeContainer: {
    opacity: 0.5,
    flex: 1,
    alignItems: 'center',
  },
  wrapper: {
    overflow: 'visible',
  },
  slide: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: screenWidth,
    height: screenHeight,
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
