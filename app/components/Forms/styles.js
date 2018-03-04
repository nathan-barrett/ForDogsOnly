import EStylesheet from 'react-native-extended-stylesheet';
import { StyleSheet } from 'react-native';


export default EStylesheet.create({
  formBorder: {
    // borderWidth: 2,
    backgroundColor: '$white',
    width: '85%',
    height: '70%',
    marginTop: 50,
    justifyContent: 'space-around',

  },
  input: {
    flex: 1,
    height: 32,
    // marginLeft: 20,
    paddingHorizontal: 8,
    fontSize: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
