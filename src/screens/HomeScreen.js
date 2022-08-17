import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Button} from 'react-native';
import {AdBanner} from 'nmm-rnsdk';


const HomeScreen = (navigation) => {
  const toDetailsHandler = () => {
    navigation.navigate('Details')
  }
  return (
    <View
      style={styles.home}>
      <TouchableOpacity activeOpacity={0.7} onPress={toDetailsHandler}>
        <View style={styles.post}>
          <Text style={styles.text}>Details Screen</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  home: {
    width: '100%',
    flex: 1,
    padding: 10
  },
  post: {
    padding: 10,
    backgroundColor: '#fafafa',
    borderRadius: 10,
    width: '100%',
    height: 50,
    borderWidth: 2,
    borderColor: 'purple'
  },  
  text: {
    // color: '#fff',
    fontSize: 20
  },
});

const activity = 'MainActivity';
const api_key = '1626f6eb-2767-40c4-9d7d-09edf76ffdda';
const AdsHomeScreen = ({navigation}) => AdBanner(() => HomeScreen(navigation), activity, api_key);

export default AdsHomeScreen;
