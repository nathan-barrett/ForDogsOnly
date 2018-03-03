import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  loginButton: {
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '$primaryBlue',
    width: 190,
    borderRadius: 8,
  },
  loginText: {
    fontWeight: '600',
    fontSize: 20,
    color: '$white',
    paddingHorizontal: 16,
  },
  container: {
    justifyContent: 'center',
  },
});
