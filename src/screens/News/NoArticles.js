import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, fonts, fontSize} from '../../utils/constants';

const NoArticles = ({modalVisible, setModalVisible}) => {
  return (
    <Pressable
      style={styles.container}
      onPress={() => setModalVisible(!modalVisible)}>
      <Text style={styles.heding}>No articles found</Text>
      <Text style={styles.body}>
        We are unable to find articles related to this category, We will update
        soon
      </Text>
    </Pressable>
  );
};

export default NoArticles;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 25,
    textAlign: 'center',
  },
  heding: {
    fontSize: fontSize.fontSubHeding,
    fontFamily: fonts.OpenSans600,
    color: colors.black,
    textAlign: 'center',
  },
  body: {
    fontSize: fontSize.fontBody,
    fontFamily: fonts.OpenSans300,
    color: 'gray',
    textAlign: 'center',
  },
});
