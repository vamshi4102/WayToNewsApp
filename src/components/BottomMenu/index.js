import {
  View,
  Text,
  Modal,
  Pressable,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import {Cog6ToothIcon} from 'react-native-heroicons/outline';
import {colors} from '../../utils/constants';
import {newsCategories} from '../../assets/data/NewsData';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {getCategoriesList, getNewsList} from '../../utils/redux/actions/common-actions';
import {setCurrentCategoryId, setNewsList} from '../../utils/redux/reducer/commonSlice';
const ButtonMenu = props => {
  const {modalVisible, setModalVisible} = props;

  const dispatch = useDispatch();
  const CurrentCategoryId = useSelector(
    state => state.common.currentCategoryId,
  );
  const CategoriesList = useSelector(state => state.common.categoriesList);
  const NewsList = useSelector(state => state.common.newsList);

  const navigation = useNavigation();

  const selectCategory = id => {
    dispatch(setCurrentCategoryId(id));
    dispatch(setNewsList([]));
    dispatch(getNewsList(1, id, []));
  };

  const navigateSettings = () => {
    setModalVisible(false);
    navigation.navigate('Settings');
  };

  useEffect(() => {
    dispatch(getCategoriesList());
  }, []);

  const ispageLoading = useSelector((state)=>state.common.isLoading);
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={ispageLoading.visible?false:modalVisible}
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
              {CategoriesList.map((item, index) => (
                <TouchableOpacity
                  key={item?.category_id}
                  style={[
                    styles.category,
                    item?.category_id === CurrentCategoryId &&
                      styles.ActiveCategory,
                  ]}
                  onPress={() => selectCategory(item?.category_id)}>
                  <Text
                    style={[
                      styles.categoryText,
                      item?.category_id === CurrentCategoryId &&
                        styles.ActiveCategoryText,
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
          onPress={() => setModalVisible(false)}
        />
      </View>
    </Modal>
  );
};

export default ButtonMenu;
