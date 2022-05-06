import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import styles from './styles';
import Header from './components/Header';
const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
    </SafeAreaView>
  );
};

export default Home;
