import {StyleSheet} from 'react-native';
import {COLOR} from '../../app-config/colors';

export default StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    justifyContent: 'space-between',
    backgroundColor: COLOR.grey,
  },
  header: {
    position: 'relative',
    flex: 0.25,
    flexDirection: 'row',
    backgroundColor: COLOR.darkBlue,
  },
  main: {
    flex: 0.4,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  footer: {
    flex: 0.2,
    alignItems: 'center',
    borderTopWidth: 0.5,
    marginHorizontal: 10,
  },

  gradientLayerOne: {
    position: 'absolute',
    borderBottomRightRadius: 220,
    bottom: 0,
    right: 40,
    width: '100%',
    height: '100%',
    backgroundColor: COLOR.lightBlue,
  },
  gradientLayerSecond: {
    position: 'absolute',
    borderBottomRightRadius: 220,
    bottom: 40,
    right: 160,
    width: '100%',
    height: '100%',
    backgroundColor: COLOR.extraLightBlue,
  },

  inputContainer: {
    width: '90%',
  },
  buttonContainer: {
    width: 300,
  },
  footerHeading: {
    alignItems: 'center',
    bottom: 12,
    width: 'auto',
  },
  footerControls: {
    width: 300,
    top: 30,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  button: {
    backgroundColor: '#C0E862',
  },

  headerText: {
    position: 'absolute',
    top: 60,
    fontSize: 30,
    color: COLOR.white,
    paddingLeft: 10,
  },
  textFooter: {
    paddingHorizontal: 10,
    backgroundColor: COLOR.grey,
  },

  spinner: {
    position: 'absolute',
    top: '50%',
    left: '45%',
  },
  fakeView: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity: 0.5,
    backgroundColor: COLOR.black,
  },
});
