import {View, Text, Modal, Pressable, Image, ScrollView,TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import {Cog6ToothIcon} from 'react-native-heroicons/outline';
import {colors} from '../../utils/constants';
import {newsCategories} from '../../assets/data/NewsData';
import {useNavigation} from '@react-navigation/native';
const ButtonMenu = props => {
  const {modalVisible, setModalVisible} = props;
  const [activetab, setactivetab] = useState(2);
  const navigation = useNavigation();

  const selectCategory = (id) => { 
    console.warn("id",id);
    setactivetab(id);
   }

   const navigateSettings = () => { 
    setModalVisible(false);
    navigation.navigate('Settings')
    }
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.topSection}>
            <Image
              source={require('../../assets/images/logo-full-image.png')}
              style={styles.logo}
            />
            <TouchableOpacity
              style={styles.bottomRightButton}
              onPress={() => navigateSettings()}>
              <Cog6ToothIcon size={20} color={colors.black} />
            </TouchableOpacity>
          </View>
          <View style={styles.bottomSection}>
            <Text style={styles.heading}>Categories</Text>
            <ScrollView
              horizontal
              contentContainerStyle={styles.scrollView}
              showsHorizontalScrollIndicator={false}>
              {newsCategories.map((item, index) => (
                <TouchableOpacity
                  key={item?.id}
                  style={[
                    styles.category,
                    item?.id === activetab && styles.ActiveCategory,
                  ]}
                  onPress={()=>selectCategory(item?.id)}
                  >
                  <Text
                    style={[
                      styles.categoryText,
                      item?.id === activetab && styles.ActiveCategoryText,
                    ]}>
                    {item?.name}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
        <Pressable
          style={styles.remainingSpace}
          onPress={() => setModalVisible(false)} />
      </View>
    </Modal>
  );
};

export default ButtonMenu;
