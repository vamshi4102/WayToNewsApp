import {StyleSheet} from 'react-native';
import {colors, fonts, fontSize} from '../../utils/constants';

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 0,
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  headerTitle: {
    fontFamily: fonts.OpenSans600,
    color: colors.black,
    fontSize:fontSize.fontSubHeding
  },
  closeBtn: {
    padding:5,
    backgroundColor:colors.textColor
  },
  reportButton:{
    width:'100%',
    paddingVertical:5
  },
reportText:{
    fontFamily: fonts.OpenSans400,
    color: colors.black,
    fontSize:fontSize.fontBody
},
});

export default styles;
