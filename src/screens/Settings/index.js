import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useEffect} from 'react';
import SettingsCard from './settingCard';
import {settingsPages} from '../../assets/data/settingsPages';
import {colors} from '../../utils/constants';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {OpenUrl} from '../../utils/functions';
import apiUrls from '../../utils/constants/api-urls';

const SettingsScreen = () => {
  const navigation = useNavigation();

  const navigateToPage = (path, title) => {
    console.warn(path);
    navigation.navigate('PageDetails', {page: path, pageName: title});
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
            onPress={() => navigateToPage(item?.path, item?.title)}
          />
        )}
        ListFooterComponent={
          <View style={styles.footer}>
            <SettingsCard
              title={'Our Website'}
              onPress={() => OpenUrl('https://newscard.co/')}
            />
            <View style={styles.border} />
            <SettingsCard
              title={'Play store app'}
              onPress={() => OpenUrl(apiUrls.appUrl)}
            />
            <Text style={styles.heading}>Follow Us on social media</Text>
            <View style={styles.socials}>
              <TouchableOpacity
                style={styles.socialButton}
                onPress={() => OpenUrl(apiUrls.instagramUrl)}>
                <Image
                  source={require('../../assets/images/instagram.png')}
                  style={styles.socialIcon}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.socialButton}
                onPress={() => OpenUrl(apiUrls.youtubeUrl)}>
                <Image
                  source={require('../../assets/images/youtube.png')}
                  style={styles.socialIcon}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.socialButton}
                onPress={() => OpenUrl(apiUrls.telegramUrl)}>
                <Image
                  source={require('../../assets/images/telegram.png')}
                  style={styles.socialIcon}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.socialButton}
                onPress={() => OpenUrl(apiUrls.twitterUrl)}>
                <Image
                  source={require('../../assets/images/x-logo-final.png')}
                  style={[styles.socialIcon, {borderRadius: 25}]}
                />
              </TouchableOpacity>
            </View>
          </View>
        }
      />
    </SafeAreaView>
  );
};

export default SettingsScreen;
