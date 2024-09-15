import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  StatusBar,
  Button,
} from 'react-native';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import {NewsData, EnglishNews} from '../../assets/data/NewsData';
import Swiper from 'react-native-swiper';
import styles from './styles';
import NewsPostCard from '../../components/NewsPostCard';
import ButtonMenu from '../../components/BottomMenu';
import {useDispatch, useSelector} from 'react-redux';
import {getNewsList} from '../../utils/redux/actions/common-actions';
import {useIsFocused} from '@react-navigation/native';
const NewsScreen = () => {
  const [currentPage, setcurrentPage] = useState(1);
  const dispatch = useDispatch();
  const CurrentCategoryId = useSelector(
    state => state.common.currentCategoryId,
  );

  const NewsList = useSelector(state => state.common.newsList);

  const isFocused = useIsFocused();
  const [newsNow, setnewsNow] = useState(EnglishNews);
  const [bottomMenu, setBottomMenu] = useState(true);

  const onPageChnaged = (index, totalPages) => {
    // dispatch(getNewsList(currentPage, CurrentCategoryId));
    console.log('changes', index);
    if(NewsList[0]?.total_pages < currentPage){
      dispatch(getNewsList(currentPage+1, CurrentCategoryId, NewsList));
      setcurrentPage(currentPage+1)
    }
    return;
    // console.log('totalPages', totalPages);
    // if (index === totalPages - 1) {
    //   setcurrentPage(currentPage+1);
    //   // setnewsNow(newsNow.concat(EnglishNews));
    // }
  };


  useEffect(() => {
    dispatch(getNewsList(currentPage, CurrentCategoryId, NewsList));
  }, []);

  console.log("NewsList",NewsList);
  

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle={'light-content'} backgroundColor={'black'} />
      {NewsList.length ? (
        <>
          <Swiper
            showsButtons={false}
            horizontal={false}
            showsPagination={false}
            bounces={true}
            loop={false}
            onIndexChanged={index =>
              onPageChnaged(index, NewsList.length)
            }>
            {NewsList.map((item, index) => (
              <NewsPostCard
                News={item}
                pageIndex={index}
                modalVisible={bottomMenu}
                setModalVisible={setBottomMenu}
              />
            ))}
          </Swiper>
        </>
      ) : (
        <View>
          <Text>no list</Text>
        </View>
      )}
      <ButtonMenu modalVisible={bottomMenu} setModalVisible={setBottomMenu} />
    </SafeAreaView>
  );
};

export default NewsScreen;
