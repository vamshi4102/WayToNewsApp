import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React, {useRef, useState} from 'react';
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
import {OpenUrl} from '../../utils/functions';
import ViewShot from 'react-native-view-shot';
import Share from 'react-native-share';
import {captureRef} from 'react-native-view-shot';
import RNFS from 'react-native-fs';
import { showErrorToast } from '../../utils/constants/app-alerts';
// import  ShareIcon  from '../../assets/svg/share-icon.svg';
// import Svg from '../../assets/svg';
// import CommentsList from './CommentsList';
// import LocationSearch from './LocationSearch';
const NewsPostCard = ({
  News,
  pageIndex,
  modalVisible,
  setModalVisible,
  showReports,
  setshowReports,
  reportingPost,
  setReportingPost,
}) => {
  const navigation = useNavigation();
  const viewShotRef = useRef(null);
  // console.log("currentPage",currentPage);
  // console.log("totalPages",totalPages);

  const [isWhatsappShown, setisWhatsappShown] = useState(true);
  const [showDownload, setshowDownload] = useState(false);

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
  const captureAndShare = async postId => {
    setshowDownload(true);
    setTimeout(async () => {
      try {
        // Capture the view and get the image URI
        const uri = await captureRef(viewShotRef, {
          format: 'png',
          quality: 0.8,
        });

        // Save the image temporarily for sharing
        const path = `${RNFS.DocumentDirectoryPath}/${postId}.png`;
        await RNFS.moveFile(uri, path);

        // Share the image with a message
        await Share.open({
          url: `file://${path}`,
          message: 'Check out this cool screenshot!',
        });
        setshowDownload(false);
      } catch (error) {
        setshowDownload(false);
        console.error('Error capturing and sharing screenshot: ', error);
      }
    }, 1500);
  };

  const shareOnWhatsapp = async (viewShotRef, postId) => {
    try {
      const {isInstalled} = await Share.isPackageInstalled('com.whatsapp');
      if (isInstalled) {
        console.log('WhatsApp is installed');
        setisWhatsappShown(true);
        try {
          const uri = await captureRef(viewShotRef, {
            format: 'png',
            quality: 0.8,
          });

          // Save the image temporarily in the app's document directory
          const path = `${RNFS.DocumentDirectoryPath}/${postId}.png`;
          await RNFS.moveFile(uri, path);
          const shareOptions = {
            url: `file://${path}`,
            social: Share.Social.WHATSAPP,
            message: 'Check out this screenshot!',
          };
          await Share.shareSingle(shareOptions);
        } catch (error) {
          console.error('Error sharing on WhatsApp:', error);
        }
      } else {
        console.log('WhatsApp is not installed');
        setisWhatsappShown(false);
      }
    } catch (error) {
      console.error('Error checking WhatsApp installation:', error);
    }
  };

  const showReportType = (id) => { 
    setshowReports(!showReports);
    setReportingPost(id);
   }

  return (
    <ViewShot
      ref={viewShotRef}
      options={{format: 'png', quality: 0.9}}
      style={{flex: 1}}>
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
        {showDownload && (
          <View style={styles.downloadSection}>
            <Image
              source={require('../../assets/images/app-logo-transparent.png')}
              style={styles.brandLogo}
            />
            <Image
              source={require('../../assets/images/app-from-playstore.png')}
              style={styles.downlodLogo}
            />
          </View>
        )}
        <View style={styles.body}>
          <View style={styles.news}>
            <Text style={styles.heding}>{News.heding}</Text>
            <Text style={styles.decription}>{News.content}</Text>
            {News?.website_url !== '' && (
              <TouchableOpacity
                style={styles.link}
                onPress={() => OpenUrl(News?.website_url)}>
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
            {isWhatsappShown && (
              <TouchableOpacity
                style={styles.bottomRightButton}
                onPress={() => shareOnWhatsapp()}>
                <Image
                  source={require('../../assets/images/whatsapp-icon.png')}
                  style={styles.whatsappImage}
                />
              </TouchableOpacity>
            )}
            <TouchableOpacity
              style={styles.bottomRightButton}
              onPress={() => captureAndShare(News?.post_url)}>
              <Image
                source={require('../../assets/images/share-icons.png')}
                style={styles.shareImage}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.bottomRightButton}
              onPress={() => showReportType(News?.post_url)}>
              <Image
                source={require('../../assets/images/report-con.png')}
                style={styles.shareImage}
              />
            </TouchableOpacity>
          </View>
        </View>
        {/* news footer */}
      </Pressable>
    </ViewShot>
  );
};

export default NewsPostCard;
