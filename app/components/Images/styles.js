import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const imageWidth = Dimensions.get('window').width;

export default EStyleSheet.create({
  profilePhoto: {
    width: imageWidth / 3,
    height: imageWidth / 3,
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
});
