import {StyleSheet} from 'react-native';
import {COLOR} from '../../app-config/colors';

export default StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLOR.grey,
  },
  cardContainer: {
    flex: 0.8,
    width: '70%',
  },
});
