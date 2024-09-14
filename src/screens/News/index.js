import {View, Text, FlatList, SafeAreaView, StatusBar, Button} from 'react-native';
import React, { useLayoutEffect, useState } from 'react';
import {NewsData,EnglishNews} from '../../assets/data/NewsData';
import Swiper from 'react-native-swiper';
import styles from './styles';
import NewsPostCard from '../../components/NewsPostCard';
import ButtonMenu from '../../components/BottomMenu';
const NewsScreen = () => {
  const [newsNow, setnewsNow] = useState(EnglishNews)
  const [bottomMenu, setBottomMenu] = useState(true);
  const onPageChnaged = (index, totalPages) => {
    console.log('changes', index);
    console.log('totalPages', totalPages);
    if (index === totalPages - 3) {
      setnewsNow(newsNow.concat(EnglishNews))
    }
  };

  return (
    <SafeAreaView style={{flex:1}}>
      <StatusBar barStyle={"light-content"} backgroundColor={"black"} />
      <Swiper
        showsButtons={false}
        horizontal={false}
        showsPagination={false}
        bounces={true}
        loop={false}
        onIndexChanged={index => onPageChnaged(index, newsNow?.length)}>
        {newsNow.map((item, index) => (
          <NewsPostCard
            News={item}
            pageIndex={index}
            modalVisible={bottomMenu}
            setModalVisible={setBottomMenu}
          />
        ))}
      </Swiper>
      <ButtonMenu 
        modalVisible={bottomMenu}
        setModalVisible={setBottomMenu}
      />
    </SafeAreaView>
  );
};

export default NewsScreen;
