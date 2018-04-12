import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  welcomeText: {
    color: '$white',
    textAlign: 'center',
    fontSize: 30,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 15,

  },
  name: {
    fontSize: 28,
    fontWeight: '800',
  },
  gender: {
    margin: 5,
  },
  bioBreed: {
    fontSize: 14,
  },
  bioDesc: {
    textAlign: 'center',
    paddingTop: 10,
  },
});
