import {SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import Header from './components/Header';
import Categories from './components/Categories';
import {categoryData, foodsData} from '../../utils/dummyData';
import FoodList from './components/FoodList';
const Home = () => {
  const [categories, setCategories] = useState(categoryData);
  const [foodList, setFoodList] = useState(foodsData);
  const handleSelectedCategory = foodList => {
    setFoodList(foodList);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Categories
        categories={categories}
        onSelectedCategory={handleSelectedCategory}
      />
      <FoodList foodList={foodList} categories={categories} />
    </SafeAreaView>
  );
};

export default Home;
