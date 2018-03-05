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
  bioName: {
    fontSize: 28,
    fontWeight: '600',
    paddingTop: 10,
  },
  bioBreed: {
    fontSize: 14,
  },
  bioDesc: {
    textAlign: 'center',
    paddingTop: 10,
  },
});
