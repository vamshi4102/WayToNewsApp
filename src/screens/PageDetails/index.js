import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import {useNavigation, useRoute} from '@react-navigation/native';
import {fonts} from '../../utils/constants';
import apiUrls from '../../utils/constants/api-urls';
import {getAPI} from '../../utils/constants/api-action-types';
import {emptyPageContent} from '../../assets/data/NewsData';
import {OpenUrl} from '../../utils/functions';

const PageDetails = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {page, pageName} = route?.params;

  const [isUpdate, setIsUpdate] = useState(false);
  const [loading, setLoading] = useState(true);
  const [pageContent, setpageContent] = useState([]);

  useEffect(() => {
    navigation.setOptions({
      title: pageName,
      headerTitleStyle: {
        fontSize: 16,
        fontFamily: fonts.OpenSans600,
      },
    });
  }, [navigation]);

  useEffect(() => {
    getPage();
  }, []);

  const getPage = async () => {
    setLoading(true);
    await getAPI(`${apiUrls.pageUrl}?pageName=${page}`, {})
      .then(response => {
        const res = response.data;
        console.log('responseresponse--page', response.data);
        setLoading(false);
        if (response.data === 'none') {
          setIsUpdate(false);
          setpageContent(emptyPageContent);
        } else {
          setIsUpdate(true);
          setpageContent(response.data);
        }
      })
      .catch(error => {
        console.error('Error fetching user:', error);
      });
  };

  return (
    <SafeAreaView style={styles.safeView}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.body}>
          <Text style={styles.heding}>{pageContent?.heding}</Text>
          <Text style={styles.subHeding}>{pageContent?.sub_heding}</Text>
          <Text style={styles.content}>{pageContent?.content}</Text>
        </View>
        {page === 'contact-us' && (
          <View
            style={styles.contactButtons}
            onPress={() => OpenUrl(apiUrls.categoryUrl)}>
            <TouchableOpacity style={styles.contactUs}>
              <Text style={styles.contactUsBtn}>Contact Us</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.contactUs}
              onPress={() => OpenUrl(apiUrls.feedbackFormUrl)}>
              <Text style={styles.contactUsBtn}>Give Feedback</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default PageDetails;
