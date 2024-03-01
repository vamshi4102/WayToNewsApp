import {View, Text, FlatList} from 'react-native';
import React from 'react';
import NewsPost from '../../components/NewsPost';
import {NewsData} from '../../assets/data/NewsData';

const NewsScreen = () => {
  return (
    <>
      {/* <NewsPost /> */}
      <FlatList data={NewsData} renderItem={({item}) => <NewsPost News={item} />} pagingEnabled={true} />
    </>
  );
};

export default NewsScreen;
