import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {ShareIcon,ExclamationTriangleIcon,HeartIcon} from 'react-native-heroicons/outline';
const CommentCard = () => {
  return (
    <View style={styles.card}>
      <View style={styles.left}>
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-SYs7TwaEVuCWS-MPjQTeFwIC_C8IJPznnowFYwh-twB-ADdpXk_SN5YGDjvWxBXihQs&usqp=CAU',
          }}
          style={styles.user_image}
        />
      </View>
      <View style={styles.right}>
        <View style={styles.comment_box}>
          <Text style={styles.name}>Vamshi krishna</Text>
          <Text style={styles.comment}>
            ఆత్మీయ ప్రయత్నంతో ప్రఖ్యాతి పొందింది. పరిస్థితి ప్రతిస్పందన మరియు
            సమాజ సేవా కార్యక్రమాలు
          </Text>
        </View>
        <View style={styles.actions}>
          <View style={styles.actions_left}>
            <Text>25m ago</Text>
            <TouchableOpacity style={styles.action_btn}>
              <ShareIcon color={'gray'} size={25} />
              <Text style={styles.count}>{0}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.actions_right}>
          
          <TouchableOpacity style={styles.action_btn}>
              <ExclamationTriangleIcon color={'gray'} size={25} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.action_btn}>
              <HeartIcon color={'gray'} size={25} />
              <Text style={styles.count}>{0}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CommentCard;

const styles = StyleSheet.create({
  card: {
    // backgroundColor: 'red',
    padding: 10,
    width: '100%',
    flexDirection: 'row',
  },
  left: {},
  user_image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  right: {
    flex: 1,
    marginLeft: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  comment_box:{
    backgroundColor: '#f3f3f3',
    padding: 10,
    borderRadius: 5,
  },
  comment: {},
  actions:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:10
  },
  count: {
    marginHorizontal: 5,
  },
  action_btn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 15,
  },
  actions_left:{
    flexDirection: 'row',
    alignItems:'center'
  },
  actions_right:{
    flexDirection: 'row',
    alignItems:'center'
  }
});
