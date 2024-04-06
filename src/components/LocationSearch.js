import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Switch,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {ArrowLeftIcon, ArrowUpRightIcon} from 'react-native-heroicons/outline';
import LocationCard from './LocationCard';
const LocationSearch = props => {
  const [PincodeInput, setPincodeInput] = useState('');
  const [Locations, setLocations] = useState([]);

  const GetLocations = async pincode => {
    const ApiUrl = `https://api.postalpincode.in/pincode/${pincode}`;
    fetch(ApiUrl)
      .then(response => response.json())
      .then(ReturnData => {
        setLocations(ReturnData[0].PostOffice);
      })
      .catch(function (error) {
        console.log('error', error);
      });
  };
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
              <Text style={styles.news_title} numberOfLines={1}>
                మీ ప్రాంతాన్ని ఎంచుకోండి {PincodeInput}
              </Text>
            </View>
          </View>
          {/* <LocationCard /> */}
          <View style={styles.input_box}>
            <TextInput
              style={styles.input}
              placeholder="Pincode"
              defaultValue={PincodeInput}
              onChangeText={value => setPincodeInput(value)}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={() => GetLocations(PincodeInput)}>
              <ArrowUpRightIcon color={'white'} size={25} />
            </TouchableOpacity>
          </View>
          <View style={{width: '100%'}}>
            <FlatList
              data={Locations}
              renderItem={({item}) => <LocationCard data={item} />}
            />
          </View>
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
    height: '90%',
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
    // maxWidth: '80%',
  },
  top_right: {},
  input_box: {
    flexDirection: 'row',
    marginHorizontal: 15,
    marginVertical: 10,
  },
  input: {
    flex: 1,
    height: 50,
    backgroundColor: '#f3f3f3',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  button: {
    width: 50,
    height: 50,
    borderRadius: 5,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 15,
  },
});

export default LocationSearch;
