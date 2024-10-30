import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../utils/constants';

const styles = StyleSheet.create({
    safeView:{
        height:'100%',
        backgroundColor:colors.white
    },
  container: {
    // flex: 1,
    backgroundColor: colors.white,
  },
  body: {
    paddingHorizontal: 25,
    paddingVertical: 20,
    gap: 12,
  },
  heding: {
    fontSize: 16,
    fontFamily: fonts.OpenSans500,
    color: colors.black,
  },
  subHeding: {
    fontSize: 13,
    fontFamily: fonts.OpenSans300,
    color: colors.black,
  },
  content: {
    fontSize: 12,
    fontFamily: fonts.OpenSans300,
    color: 'gray',
  },
  contactButtons:{
    flexDirection:'row',
    gap:10,
    marginLeft:24
  },  
contactUs:{
  borderWidth:1,
  borderColor:"#4285F4",
  paddingHorizontal:20,
  paddingVertical:5,
  borderRadius:25
},
contactUsBtn:{
  fontFamily:fonts.OpenSans300,
  color:"#4285F4",
},
});

export default styles;
