import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = () => {
  return (
    <View style={{height: 475}}>
      <Text style={{fontSize: 30, fontWeight: 'bold', textAlign: 'center', color: '#fff', marginBottom: 10}}>React Native APP</Text>
    </View>
  );
}

const styles = StyleSheet.create({})

export default Header;
