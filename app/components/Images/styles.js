import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const imageWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default EStyleSheet.create({
  profilePhoto: {
    width: imageWidth / 3,
    height: screenHeight / 3,
    borderRadius: 60,
    marginTop: 30,
    marginBottom: 5,
    alignSelf: 'center',

  },
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
});
