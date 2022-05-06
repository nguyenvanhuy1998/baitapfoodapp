import {SafeAreaView} from 'react-native';
import React from 'react';
import styles from './styles';
import Header from './components/Header';
import Categories from './components/Categories';
import {categoryData, restaurantData} from '../../utils/dummyData';
import RestaurantList from './components/RestaurantList';
const Home = () => {
  const [categories, setCategories] = React.useState(categoryData);
  const [restaurants, setRestaurants] = React.useState(restaurantData);

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Categories categories={categories} />
      <RestaurantList restaurants={restaurants} categories={categories} />
    </SafeAreaView>
  );
};

export default Home;
