import React from 'react';
import {View, StyleSheet} from 'react-native';
import {AdFlatlist} from 'nmm-rnsdk'
import ItemList from '../components/ItemList';

const DetailsScreens = () => {

  const data = [
    {id: 1, name: '1'},
    {id: 2, name: '2'},
    {id: 3, name: '3'},
    {id: 4, name: '4'},
    {id: 5, name: '5'},
    {id: 6, name: '6'},
    {id: 7, name: '7'},
    {id: 8, name: '8'},
    {id: 9, name: '9'},
    {id: 10, name: '10'},
    {id: 12, name: '12'},
    {id: 13, name: '13'},
    {id: 14, name: '14'},
    {id: 15, name: '15'},
    {id: 16, name: '16'},
    {id: 17, name: '17'},
    {id: 18, name: '18'},
    {id: 19, name: '19'},
    {id: 20, name: '20'},
    {id: 21, name: '21'},
    {id: 22, name: '22'},
    {id: 23, name: '23'},
    {id: 24, name: '24'},
    {id: 25, name: '25'},
    {id: 26, name: '26'},
    {id: 27, name: '27'},
    {id: 28, name: '28'},
    {id: 29, name: '29'},
    {id: 30, name: '30'},
    {id: 31, name: '31'},
    {id: 32, name: '32'},
    {id: 33, name: '33'},
    {id: 34, name: '33'},
    {id: 35, name: '33'},
    {id: 36, name: '33'},
    {id: 37, name: '33'},
    {id: 38, name: '33'},
    {id: 39, name: '33'},
    {id: 40, name: '33'},
    {id: 41, name: '33'},
  ]
  
  return (
    <View>
      <AdFlatlist
        data={data}
        keyProp={'id'}
        adUnitId="105"
        apiKey="1626f6eb-2767-40c4-9d7d-09edf76ffdda"
        renderItem={ItemList}
      />
    </View>
  );
}

const styles = StyleSheet.create({})

export default DetailsScreens;
