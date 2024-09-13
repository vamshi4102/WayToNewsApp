import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../utils/constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  flatlist: {
    gap: 1,
    backgroundColor: '#f3f3f3',
    marginHorizontal: 24,
    marginTop: 50,
  },
  socials: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 15,
  },
  socialButton: {},
  socialIcon: {
    width: 30,
    height: 30,
  },
  footer: {
    backgroundColor: colors.white,
    // paddingTop: 15,
  },
  heading: {
    fontFamily: fonts.OpenSans400,
    color: colors.black,
    paddingTop: 15,
  },
  border: {
    height: 1,
    backgroundColor: '#f3f3f3',
  },
});

export default styles;
