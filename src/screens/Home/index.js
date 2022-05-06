import {SafeAreaView} from 'react-native';
import React from 'react';
import styles from './styles';
import Header from './components/Header';
import Categories from './components/Categories';
import {categoryData} from '../../utils/dummyData';
const Home = () => {
  const [categories, setCategories] = React.useState(categoryData);

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Categories categories={categories} />
    </SafeAreaView>
  );
};

export default Home;
