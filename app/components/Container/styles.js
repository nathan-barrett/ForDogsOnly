import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '$primaryOrange',
    justifyContent: 'center',
  },
  startContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '$primaryOrange',
    justifyContent: 'flex-start',
    paddingHorizontal: 15,
  },
});
