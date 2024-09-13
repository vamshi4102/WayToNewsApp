import {View, Text, SafeAreaView, StatusBar, FlatList, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import SettingsCard from './settingCard';
import {settingsPages} from '../../assets/data/settingsPages';
import {colors} from '../../utils/constants';
import styles from './styles';

const SettingsScreen = () => {
  const navigateToPage = path => {
    console.warn(path);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor={'black'} />
      <FlatList
        data={settingsPages}
        contentContainerStyle={styles.flatlist}
        renderItem={({item}) => (
          <SettingsCard
            title={item?.title}
            onPress={() => navigateToPage(item?.path)}
          />
        )}
        ListFooterComponent={
          <View style={styles.footer}>
            <SettingsCard
              title={'Our Website'}
              onPress={() => navigateToPage(item?.path)}
            />
            <View style={styles.border} />
            <SettingsCard
              title={'Play store app'}
              onPress={() => navigateToPage(item?.path)}
            />
            <Text style={styles.heading}>Follow Us on social media</Text>
            <View style={styles.socials}>
              <TouchableOpacity style={styles.socialButton}>
                <Image source={require("../../assets/images/instagram.png")} style={styles.socialIcon} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialButton}>
                <Image source={require("../../assets/images/youtube.png")} style={styles.socialIcon} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialButton}>
                <Image source={require("../../assets/images/telegram.png")} style={styles.socialIcon} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialButton}>
                <Image source={require("../../assets/images/facebook.png")} style={styles.socialIcon} />
              </TouchableOpacity>
            </View>
          </View>
        }
      />
    </SafeAreaView>
  );
};

export default SettingsScreen;
