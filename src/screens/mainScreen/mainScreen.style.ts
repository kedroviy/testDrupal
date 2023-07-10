import {StyleSheet} from 'react-native';
import {COLOR} from '../../app-config/colors';

export default StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLOR.grey,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 80,
    width: '100%',
    backgroundColor: COLOR.moonstone,
    paddingHorizontal: 10,
  },
  userContainer: {
    width: '50%',
    height: 80,
  },
  userAvatar: {
    borderRadius: 25,
    width: 45,
    height: 45,
  },
  spinner: {
    position: 'absolute',
    top: '50%',
    left: '45%',
  },
});
