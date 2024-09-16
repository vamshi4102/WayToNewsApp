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
import {
  getNewsList,
  getReportsList,
  postThisNewsReport,
} from '../../utils/redux/actions/common-actions';
import {useIsFocused} from '@react-navigation/native';
import ReportNews from '../../components/ReportNews';
import { getFromSecureStorage } from '../../utils/constants/app-storage';
const NewsScreen = () => {
  const [currentPage, setcurrentPage] = useState(1);
  const dispatch = useDispatch();
  const CurrentCategoryId = useSelector(
    state => state.common.currentCategoryId,
  );

  const NewsList = useSelector(state => state.common.newsList);

  const isFocused = useIsFocused();
  const [bottomMenu, setBottomMenu] = useState(true);
  const [showReports, setshowReports] = useState(false);
  const [reportingPost, setReportingPost] = useState('');
  const [newsNow, setnewsNow] = useState(EnglishNews);
  const [reportPostId, setreportPostId] = useState('');

  const onPageChnaged = (index, totalPages, totalLength) => {
    if (totalPages > currentPage) {
      console.warn('if');
    } else {
      console.warn('else');
    }
    // dispatch(getNewsList(currentPage, CurrentCategoryId));
    // console.warn("e",index);

    // console.log('changes', NewsList[0]?.total_pages);
    // dispatch(getNewsList(currentPage+1, CurrentCategoryId, NewsList));
    // if(NewsList[0]?.total_pages <= currentPage){
    //   setcurrentPage((prev)=>prev+1);
    // }
    // else{
    //   console.log("else-",index);
    //   console.log('else-changes', NewsList[0]?.total_pages);
    //   return;
    // }
    // console.log('totalPages', totalPages);
    // if (index === totalPages - 1) {
    //   setcurrentPage(currentPage+1);
    //   // setnewsNow(newsNow.concat(EnglishNews));
    // }
  };

  useEffect(() => {
    console.warn('page--', currentPage);
    dispatch(getNewsList(currentPage, CurrentCategoryId, NewsList));
    dispatch(getReportsList());
  }, []);

  const reportThisNews = async(id) => {
    console.log('report_id', id);

    let getUserId = null;
    getUserId = await getFromSecureStorage('UserId');
    const payload = {
      reportNews:"from-app",
      userId:getUserId,
      newsId:reportPostId,
      reportId:id
    }
    dispatch(postThisNewsReport(payload));
    // console.log('post--id', reportPostId);
  };

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
              onPageChnaged(index, NewsList.total_pages, NewsList.length)
            }>
            {NewsList.map((item, index) => (
              <NewsPostCard
                News={item}
                pageIndex={index}
                modalVisible={bottomMenu}
                setModalVisible={setBottomMenu}
                showReports={showReports}
                setshowReports={setshowReports}
                reportingPost={reportPostId}
                setReportingPost={setreportPostId}
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
      <ReportNews
        modalVisible={showReports}
        setModalVisible={setshowReports}
        reportThisNews={reportThisNews}
      />
    </SafeAreaView>
  );
};

export default NewsScreen;
