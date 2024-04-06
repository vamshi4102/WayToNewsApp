import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Switch,
} from 'react-native';
import {ArrowLeftIcon} from 'react-native-heroicons/outline';
import CommentCard from './CommentCard';
const CommentsList = props => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.modalVisible}
      onRequestClose={() => {
        props.setModalVisible(!props.modalVisible);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          {/* top section */}
          <View style={styles.top_section}>
            <View style={styles.top_left}>
              <Pressable
                onPress={() => props.setModalVisible(!props.modalVisible)}>
                <ArrowLeftIcon color={'black'} />
              </Pressable>
              <Text style={styles.news_title} numberOfLines={1} >
                {props.title}
              </Text>
            </View>
            <View style={styles.top_right}>
              <Text>Notification</Text>
              <Switch
                trackColor={{false: '#767577', true: '#81b0ff'}}
                thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
          </View>
          {/* comments */}
          <CommentCard />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    height: '80%',
    width: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  //   ------ top section
  top_section: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 0.3,
    borderBlockColor: 'gray',
  },
  top_left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  news_title: {
    marginLeft: 10,
    fontSize: 16,
    maxWidth:'80%'
  },
  top_right: {},
});

export default CommentsList;
