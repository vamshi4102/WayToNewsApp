import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ChevronRightIcon} from 'react-native-heroicons/outline';
import {colors, fonts} from '../../utils/constants';
const SettingsCard = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.title}>{title}</Text>
      <ChevronRightIcon size={20} color={colors.black} />
    </TouchableOpacity>
  );
};

export default SettingsCard;

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    backgroundColor: colors.white,
  },
  title: {
    fontFamily: fonts.OpenSans400,
    color: colors.black,
  },
});
