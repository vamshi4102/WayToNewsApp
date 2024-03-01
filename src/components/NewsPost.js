import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
const DeviceWidth = Dimensions.get('screen').width;
const DeviceHeight = Dimensions.get('screen').height;

import {
  HandThumbUpIcon,
  HandThumbDownIcon,
  ClockIcon,
  ChatBubbleLeftEllipsisIcon,
  EllipsisVerticalIcon,
  ShareIcon,
} from 'react-native-heroicons/outline';
const NewsPost = ({News}) => {

    const [isLiked, setisLiked] = useState(false)
    const [LikeCount, setLikeCount] = useState(0)
    const [isDisliked, setisDisliked] = useState(false)
    const [DisLikeCount, setDisLikeCount] = useState(0)
    const [CommentsCount, setCommentsCount] = useState(0)

    const OnLikePress = () => {
        if(isDisliked){
            setDisLikeCount(DisLikeCount-1)
            setisDisliked(false)
            setisLiked(true)
            setLikeCount(LikeCount+1)
        }
        else if(!isLiked){
            setisLiked(true)
            setLikeCount(LikeCount+1)
        }
     }

     const OnDisLikePress = () => { 
        if(isLiked){
            setLikeCount(LikeCount-1)
            setisLiked(false)
            setDisLikeCount(DisLikeCount+1)
            setisDisliked(true)
        }
        else if(!isDisliked){
            setDisLikeCount(DisLikeCount+1)
            setisDisliked(true)
        }
      }
  return (
    <View style={styles.container}>
      {/* news image */}
      <Image
        source={{
          uri: News.imageUrl,
        }}
        style={styles.image}
      />
      {/* news heading */}
      <View style={styles.body}>
      <View style={styles.news}>
        <Text style={styles.heding}>{News.heading}</Text>
        {/* news description */}
        <Text style={styles.decription}>
          {News.description}
        </Text>
      </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.top}>
          <ClockIcon color={'gray'} />
          <Text>18 min ago</Text>
        </View>
        <View style={styles.bottom}>
          <View style={styles.left_btns}>
            <TouchableOpacity style={styles.action_btn} onPress={OnLikePress}>
              <HandThumbUpIcon color={isLiked?'red':'gray'} size={30} />
              <Text style={styles.count}>{LikeCount}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.action_btn} onPress={OnDisLikePress}>
              <HandThumbDownIcon color={isDisliked?'green':'gray'} size={30} />
              <Text style={styles.count}>{DisLikeCount}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.action_btn}>
              <ChatBubbleLeftEllipsisIcon color={'gray'} size={30} />
              <Text style={styles.count}>{CommentsCount}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.right_btns}>
          <EllipsisVerticalIcon color={'gray'} size={30}/>
          <ShareIcon color={'blue'} size={30}/>
          </View>
        </View>
      </View>
      {/* news footer */}
    </View>
  );
};

export default NewsPost;

const styles = StyleSheet.create({
  container: {
    height: DeviceHeight,
    width: DeviceWidth,
    overflow:'hidden'
  },
  image: {
    width: DeviceWidth,
    height: DeviceHeight * 0.4,
    resizeMode:'cover'
  },
  body:{
    height: DeviceHeight*0.6,
    width: DeviceWidth,
  },
  news: {
    width: DeviceWidth * 0.85,
    alignSelf: 'center',
    paddingVertical: 15,
  },
  heding: {
    fontSize: 18,
    color: 'blue',
    fontFamily:'Ramabhadra-Regular'
  },
  decription: {
    color: 'gray',
    fontSize: 15,
    marginVertical: 10,
    fontFamily:'Mallanna-Regular'
  },
  //   ------footer
  footer: {
    justifyContent:'flex-end',
    width: DeviceWidth * 0.85,
    position: 'absolute',
    // height:DeviceHeight*0.2,
    bottom: 100,
    left: DeviceWidth * 0.075,
    right: 0,
    paddingVertical: 5,
  },
  top: {
    flexDirection: 'row',
    paddingVertical: 5,
  },
  bottom: {
    borderTopColor: '#ccc',
    borderTopWidth: 1,
    paddingVertical: 5,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  left_btns:{
    flexDirection:'row',
    alignItems:'center'
  },
  count:{
    marginHorizontal:5
  },
action_btn:{
    flexDirection:'row',
    alignItems:'center',
    marginRight:15
},
right_btns:{
    flexDirection:'row',
    alignItems:'center'
}
});
