import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import styles from './styles';
import {XMarkIcon} from 'react-native-heroicons/outline';
import {colors} from '../../utils/constants';
import {useSelector} from 'react-redux';

const ReportNews = ({modalVisible, setModalVisible, reportThisNews}) => {
  //   const {modalVisible, setModalVisible,reportThisNews} = props;
  const ReportsList = useSelector(state => state.common.reportsList);
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Report Article</Text>
            <Pressable
              style={styles.closeBtn}
              onPress={() => setModalVisible(!modalVisible)}>
              <XMarkIcon size={18} color={colors.black} />
            </Pressable>
          </View>
          {ReportsList.map(item => (
            <Pressable
              style={[styles.reportButton]}
              onPress={() => {
                setModalVisible(!modalVisible), reportThisNews(item?.report_id);
              }}>
              <Text style={styles.reportText}>{item.name}</Text>
            </Pressable>
          ))}
        </View>
      </View>
    </Modal>
  );
};

export default ReportNews;
