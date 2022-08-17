import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ItemList = (item) => {
  return <View style={styles.item}>
    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste at perferendis expedita rem quas debitis impedit. Aliquam dolorum et molestiae.</Text>
  </View>;
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default ItemList;
