import EStyleSheet from 'react-native-extended-stylesheet';
import { StyleSheet } from 'react-native';

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
  detailContainer: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  breedRow: {
    width: '38%',
    paddingHorizontal: 5,

  },
  sizeRow: {
    width: '24%',
    borderLeftWidth: StyleSheet.hairlineWidth,
    borderRightWidth: StyleSheet.hairlineWidth,
    borderColor: 'grey',
    marginHorizontal: 5,
    paddingLeft: 20,
  },
  ageRow: {
    width: '38%',
    marginHorizontal: 5,
    paddingHorizontal: 5,
    alignSelf: 'center',
  },
  detailHeader: {
    fontWeight: 'bold',
    fontSize: 14,
  },

  detailText: {
    color: 'grey',
    paddingTop: 5,
    fontWeight: '600',
    paddingBottom: 1,
  },
  descriptionContainer: {
    paddingHorizontal: 8,
    marginTop: 30,
  },
  descriptionText: {
    color: 'grey',
  },
});
