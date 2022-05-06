import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {theme} from '../../../../constants';
const Categories = ({categories}) => {
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity style={[styles.container_item, styles.shadow]}>
        <View style={styles.container_item_icon}>
          <Image
            source={item.icon}
            resizeMode="contain"
            style={styles.sizeIcon}
          />
        </View>
        <Text style={styles.container_item__name}>{item.name}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.container__title}>Main</Text>
      <Text style={styles.container__title}>Categories</Text>
      <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => `${item.id}`}
        renderItem={renderItem}
        contentContainerStyle={styles.container__content}
      />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    padding: theme.SIZES.base * 2,
  },
  container__title: {
    ...theme.FONTS.h1,
  },
  container__content: {
    paddingVertical: theme.SIZES.base * 2,
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
  container_item: {
    padding: theme.SIZES.base,
    paddingBottom: theme.SIZES.base * 2,
    backgroundColor: theme.COLORS.white,
    borderRadius: theme.SIZES.radius,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: theme.SIZES.base,
  },
  container_item_icon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.COLORS.lightGray,
  },
  sizeIcon: {
    width: 24,
    height: 24,
  },
  container_item__name: {
    marginTop: theme.SIZES.base,
    color: theme.COLORS.black,
    ...theme.FONTS.body5,
  },
});
