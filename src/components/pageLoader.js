import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import React from 'react';

import {colors, fonts, fontSize} from '../../src/utils/constants';
const FullPageLoader = props => {
  //send following props
  // 1.visible
  // 2.bigText
  return (
    <>
      {props.visible ? (
        <View style={styles.con}>
          <ActivityIndicator size={'large'} color={colors.white} />
          <Text style={styles.bigtext}>
            {props.bigtext !== '' ? props.bigtext : ''}
          </Text>
          <Text style={styles.text}>{props.text !== '' ? props.text : ''}</Text>
        </View>
      ) : null}
    </>
  );
};

export default FullPageLoader;

const styles = StyleSheet.create({
  con: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.6)',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
  },
  bigtext: {
    fontFamily: fonts.OpenSans600,
    fontSize: 18,
    color: colors.white,
    marginTop: 10,
  },
  text: {
    fontFamily: fonts.OpenSans400,
    fontSize: 12,
    color: colors.white,
    marginTop: 0,
  },
});