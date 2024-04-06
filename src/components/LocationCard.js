import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {MapPinIcon} from 'react-native-heroicons/outline';
const LocationCard = (props) => {
  return (
    <View style={styles.card}>
      <View style={styles.left}>
        <MapPinIcon color={'black'} size={25} />
      </View>
      <View style={styles.right}>
        <Text style={styles.village}>{props.data.Name}(V)</Text>
          <Text style={styles.others}> {props.data.Block} (M) {props.data.District}(D) - {props.data.Pincode}</Text>
      </View>
    </View>
  );
};

export default LocationCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    width: '100%',
    alignItems: 'center',
    borderBottomWidth:2,
    borderBlockColor:'#f3f3f3',
    paddingVertical:10
  },
  left: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f3f3f3',
    borderRadius: 25,
  },
  right: {
    flex: 1,
    marginLeft: 15,
  },
  village: {
    fontSize:18
  },
  others: {
    fontSize:16,
    color:'gray'
  },
});
