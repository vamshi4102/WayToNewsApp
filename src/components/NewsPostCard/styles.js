import {StyleSheet, Dimensions} from 'react-native';
import {colors, fonts, fontSize} from '../../utils/constants';
const DeviceWidth = Dimensions.get('screen').width;
const DeviceHeight = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    width: DeviceWidth,
    height: DeviceHeight * 0.4,
    resizeMode: 'cover',
  },
  body: {
    height: DeviceHeight * 0.6,
    width: DeviceWidth,
  },
  news: {
    width: DeviceWidth * 0.85,
    alignSelf: 'center',
    paddingVertical: 15,
  },
  heding: {
    fontSize: 18,
    color: 'blue',
    fontFamily: 'Ramabhadra-Regular',
  },
  decription: {
    color: 'gray',
    fontSize: 15,
    marginVertical: 10,
    fontFamily: 'Mallanna-Regular',
  },
  // news footer starts here
  newsFooter: {
    width: '100%',
    // backgroundColor:'red',
    position: 'absolute',
    bottom: 0,
    left: 0,
    paddingHorizontal: 24,
    paddingVertical: 10,
    overlayColor: 'yellow',
    borderTopColor: colors.textColor,
    borderTopWidth: 0.5,
  },
  FooterLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  reporterImage: {
    width: 40,
    height: 40,
    borderRadius: 45,
  },
  reporterBody: {
    marginLeft: 10,
  },
  reporterName: {
    fontSize: fontSize.fontBody,
    fontFamily: fonts.OpenSans500,
    color: colors.black,
  },
  newsTime: {
    fontSize: fontSize.fontSmall,
    fontFamily: fonts.OpenSans400,
    color: colors.textColor,
  },
  FooterRight: {},
  //   ------footer
  footer: {
    justifyContent: 'flex-end',
    width: DeviceWidth * 0.85,
    position: 'absolute',
    // height:DeviceHeight*0.2,
    bottom: 25,
    left: DeviceWidth * 0.075,
    right: 0,
    paddingVertical: 5,
  },
  top: {
    flexDirection: 'row',
    paddingVertical: 5,
  },
  bottom: {
    borderTopColor: '#ccc',
    borderTopWidth: 1,
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  left_btns: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  count: {
    marginHorizontal: 5,
  },
  action_btn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  right_btns: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
