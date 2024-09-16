import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../utils/constants';
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.brandColor,
  },
  brandLogo: {
    height: height * 0.10,
    width: height * 0.10 * 3,
  },
});
export default styles;
