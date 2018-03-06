import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions, StyleSheet } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').width;


export default EStyleSheet.create({
  post: {
    width: screenWidth,
    height: screenHeight,
    flex: 1,

  },
});
