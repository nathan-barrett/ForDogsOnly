import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const imageWidth = Dimensions.get('window').width / 1.2;

export default EStyleSheet.create({
  $largeImageSize: imageWidth / 2,
  $largeContainerSize: imageWidth,
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerImage: {
    alignItems: 'center',
    justifyContent: 'center',
    width: imageWidth,
    height: imageWidth,
  },
  logo: {
    // tintColor: '$primaryBlue',
    width: imageWidth,
    backgroundColor: 'rgba(52, 52, 52, 0.4)',
    height: 210,
    borderRadius: 15,
    alignItems: 'center',


    // marginBottom: 20,
  },
});
