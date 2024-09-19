import {View, Text, Image, StatusBar} from 'react-native';
import React from 'react';
import styles from './styles';
import { colors } from '../../utils/constants';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
        <StatusBar backgroundColor={colors.brandColor} barStyle={"light-content"} />
      <Image
        source={require('../../assets/images/logo-full-image.png')}
        style={styles.brandLogo}
      />
    </View>
  );
};

export default SplashScreen;
