import React from 'react';
import {View, StyleSheet} from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailsScreens from '../screens/DetailsScreens';

import AdsHomeScreen from '../screens/HomeScreen';

//AdBanner(Header, 'MainActivity', '1626f6eb-2767-40c4-9d7d-09edf76ffdda')
//() => AdBanner(HomeScreen, 'MainActivity', '1626f6eb-2767-40c4-9d7d-09edf76ffdda')
const Stack = createNativeStackNavigator();

//const api_key = '1626f6eb-2767-40c4-9d7d-09edf76ffdda'

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={AdsHomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreens} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({})

export default AppNavigation;
