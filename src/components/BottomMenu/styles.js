import {StyleSheet} from 'react-native';
import {colors, fonts, fontSize} from '../../utils/constants';

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 0,
    paddingHorizontal: 20,
    paddingVertical:10,
    width: '100%',
    justifyContent: 'center',
    // zIndex:1,
  },
  remainingSpace: {
    // backgroundColor:'red',
    flex: 1,
    width: '100%',
  },
  topSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    height: 50,
    width: 150,
    marginLeft: -0,
  },
  bottomRightButton: {
    padding: 7,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#f3f3f3',
    zIndex:150
  },
  bottomSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  scrollView: {
    gap: 10,
  },
  category: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: colors.primaryColor,
    borderRadius: 25,
    zIndex:1
  },
  ActiveCategory: {
    backgroundColor: colors.brandColor,
  },
  categoryText: {
    color: colors.textColor,
    fontFamily: fonts.OpenSans500,
    fontSize:fontSize.fontBody
  },
  ActiveCategoryText: {
    color: colors.white,
  },
  heading:{
    color: colors.black,
    fontFamily: fonts.OpenSans500,
    fontSize:fontSize.fontBody,
    paddingRight:5
  }
});

export default styles;
