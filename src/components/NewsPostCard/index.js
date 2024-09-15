import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
const DeviceWidth = Dimensions.get('screen').width;
const DeviceHeight = Dimensions.get('screen').height;
// import { ShareIcon } from '../../assets/svg';

import {
  HandThumbUpIcon,
  HandThumbDownIcon,
  ClockIcon,
  ChatBubbleLeftEllipsisIcon,
  EllipsisVerticalIcon,
  ShareIcon,
  LinkIcon,
} from 'react-native-heroicons/outline';
import styles from './styles';
import {colors, usedImages} from '../../utils/constants';
// import { ShareIconOriginal } from '../../assets/svg';
import ShareIconOriginal from '../../assets/svg/share-original.svg';
import {useNavigation} from '@react-navigation/native';
import { OpenUrl } from '../../utils/functions';
// import  ShareIcon  from '../../assets/svg/share-icon.svg';
// import Svg from '../../assets/svg';
// import CommentsList from './CommentsList';
// import LocationSearch from './LocationSearch';
const NewsPostCard = ({News, pageIndex, modalVisible, setModalVisible}) => {
  const navigation = useNavigation();
  // console.log("currentPage",currentPage);
  // console.log("totalPages",totalPages);

  const [isLiked, setisLiked] = useState(false);
  const [LikeCount, setLikeCount] = useState(0);
  const [isDisliked, setisDisliked] = useState(false);
  const [DisLikeCount, setDisLikeCount] = useState(0);
  const [CommentsCount, setCommentsCount] = useState(0);

  // const [modalVisible, setModalVisible] = useState(false);
  const [LocationModal, setLocationModal] = useState(false);

  const OnLikePress = () => {
    if (isDisliked) {
      setDisLikeCount(DisLikeCount - 1);
      setisDisliked(false);
      setisLiked(true);
      setLikeCount(LikeCount + 1);
    } else if (!isLiked) {
      setisLiked(true);
      setLikeCount(LikeCount + 1);
    }
  };

  const OnDisLikePress = () => {
    if (isLiked) {
      setLikeCount(LikeCount - 1);
      setisLiked(false);
      setDisLikeCount(DisLikeCount + 1);
      setisDisliked(true);
    } else if (!isDisliked) {
      setDisLikeCount(DisLikeCount + 1);
      setisDisliked(true);
    }
  };

  return (
    <Pressable
      style={styles.container}
      onPress={() => setModalVisible(!modalVisible)}
      key={pageIndex}>
      <Image
        source={{
          uri: News.post_image,
        }}
        style={styles.image}
      />
      <View style={styles.body}>
        <View style={styles.news}>
          <Text style={styles.heding}>{News.heding}</Text>
          <Text style={styles.decription}>{News.content}</Text>
          {News?.website_url !== '' && (
            <TouchableOpacity style={styles.link} onPress={()=>OpenUrl(News?.website_url)}>
              <LinkIcon size={15} color={colors.blue} />
              <Text style={styles.websiteLink}>Click here</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
      <View style={styles.newsFooter}>
        <View style={styles.FooterLeft}>
          <View style={styles.userImageContainer}>
            <Image
              style={styles.reporterImage}
              source={{uri: News?.reporter_image}}
            />
          </View>

          <View style={styles.reporterBody}>
            <Text style={styles.reporterName}>{News?.reporter_name}</Text>
            <Text style={styles.newsTime}>{News?.created_date}</Text>
          </View>
        </View>
        <View style={styles.FooterRight}>
          <TouchableOpacity style={styles.bottomRightButton}>
            <Image
              source={require('../../assets/images/whatsapp-icon.png')}
              style={styles.whatsappImage}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomRightButton}>
            <Image
              source={require('../../assets/images/share-icons.png')}
              style={styles.shareImage}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomRightButton}>
            <Image
              source={require('../../assets/images/report-con.png')}
              style={styles.shareImage}
            />
          </TouchableOpacity>
        </View>
      </View>
      {/* news footer */}
    </Pressable>
  );
};

export default NewsPostCard;
