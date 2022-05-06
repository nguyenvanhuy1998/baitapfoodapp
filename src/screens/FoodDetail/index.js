import {StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {theme} from '../../constants';
import Header from './components/Header';
import Detail from './components/Detail';
import Cart from './components/Cart';
import {isIphoneX} from 'react-native-iphone-x-helper';
const FoodDetail = ({route}) => {
  const {item} = route.params;
  const [countFood, setCountFood] = useState(1);
  return (
    <SafeAreaView style={styles.container}>
      <Header name={item.name} />

      {isIphoneX() ? (
        <>
          <Detail
            setCountFood={setCountFood}
            countFood={countFood}
            image={item.photo}
            name={item.name}
            price={item.price}
            cal={item.cal}
          />
          <Cart countFood={countFood} price={item.price * countFood} />
        </>
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          alwaysBounceVertical={false}>
          <Detail
            setCountFood={setCountFood}
            countFood={countFood}
            image={item.photo}
            name={item.name}
            price={item.price}
            cal={item.cal}
          />
          <Cart countFood={countFood} price={item.price * countFood} />
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default FoodDetail;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.COLORS.lightGray4,
  },
});
