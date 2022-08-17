/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  StyleSheet,
  LogBox,
  ScrollView
} from 'react-native';
// import {AdMobInterstitial} from 'react-native-admob'

import Header from './src/components/Header';

LogBox.ignoreLogs(['new NativeEventEmitter']); // Ignore log notification by message
LogBox.ignoreAllLogs();

import {AdBanner} from 'nmm-rnsdk'
import AppNavigation from './src/navigation/AppNavigation';
import { SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
  return (
    <AppNavigation />
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#1D1E29',
  },
});

export default App;
