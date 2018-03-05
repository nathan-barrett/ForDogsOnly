import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const imageWidth = Dimensions.get('window').width / 3;

export default EStyleSheet.create({
  profilePhoto: {
    width: imageWidth,
    height: imageWidth,
    borderRadius: 60,
    marginTop: 20,
  },
});
