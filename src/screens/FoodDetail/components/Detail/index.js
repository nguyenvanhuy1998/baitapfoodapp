import {StyleSheet, View, Image, TouchableOpacity, Text} from 'react-native';
import React, {useState} from 'react';
import {theme, icons} from '../../../../constants';

const Detail = ({
  image,
  name = 'Tomato Pasta',
  price = 12.35,
  cal = 465.12,
  countFood,
  setCountFood,
}) => {
  const handleDecrease = () => {
    if (countFood <= 1) {
      return;
    }
    setCountFood(countFood - 1);
  };
  const handleIncrease = () => {
    setCountFood(countFood + 1);
  };
  return (
    <View style={styles.container}>
      <View style={styles.container_image}>
        <Image source={image} resizeMode="cover" style={styles.image} />
      </View>
      <View style={[styles.container_add, styles.shadow]}>
        <TouchableOpacity style={styles.viewButton} onPress={handleDecrease}>
          <Text style={[styles.count, styles.colorCount(countFood)]}>-</Text>
        </TouchableOpacity>
        <Text style={styles.count}>{countFood}</Text>
        <TouchableOpacity style={styles.viewButton} onPress={handleIncrease}>
          <Text style={styles.count}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container_name}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.name}> - </Text>
        <Text style={styles.name}>{`$ ${price}`}</Text>
      </View>
      <Text style={styles.description}>
        Italian pasta with tomatoes, provencal herbs and basil
      </Text>
      <View style={styles.container_cal}>
        <Image source={icons.fire} style={styles.fire} />
        <Text style={styles.cal}>{cal} cal</Text>
      </View>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: theme.SIZES.base * 3,
  },
  container_image: {
    marginHorizontal: theme.SIZES.base * 2,
  },
  image: {
    borderRadius: theme.SIZES.base * 2,
    width: '100%',
    height: 248,
  },
  container_add: {
    flexDirection: 'row',
    alignSelf: 'center',
    backgroundColor: theme.COLORS.white,
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 40,
    width: '32%',
    paddingHorizontal: theme.SIZES.base * 2,
    borderRadius: 20,
    marginTop: -20,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
  count: {
    ...theme.FONTS.body4_bold,
  },
  viewButton: {
    width: 16,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container_name: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: theme.SIZES.base * 3,
    marginBottom: theme.SIZES.base * 2,
  },
  name: {
    ...theme.FONTS.body4,
    fontWeight: 'bold',
  },
  description: {
    ...theme.FONTS.body4,
    fontWeight: '400',
    textAlign: 'center',
    marginBottom: theme.SIZES.base * 3,
  },
  fire: {
    width: 16,
    height: 16,
    resizeMode: 'contain',
  },
  container_cal: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  cal: {
    ...theme.FONTS.body4,
    fontWeight: '400',
    marginLeft: theme.SIZES.base,
    color: theme.COLORS.darkgray,
  },
  colorCount(countFood) {
    return {
      color: countFood === 1 ? theme.COLORS.darkgray : theme.COLORS.black,
    };
  },
});
