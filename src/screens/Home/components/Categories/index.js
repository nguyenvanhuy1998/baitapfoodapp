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
  const [selectedCategory, setSelectedCategory] = React.useState(null);

  const handleCategory = item => {
    setSelectedCategory(item);
  };
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={[
          styles.container_item(selectedCategory?.id === item?.id),
          styles.shadow,
        ]}
        onPress={() => handleCategory(item)}>
        <View
          style={styles.container_item_icon(selectedCategory?.id === item.id)}>
          <Image
            source={item.icon}
            resizeMode="contain"
            style={styles.sizeIcon}
          />
        </View>
        <Text
          style={styles.container_item__name(selectedCategory?.id === item.id)}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.container_mainCategories}>
        <Text style={styles.container__title}>Main</Text>
        <Text style={styles.container__title}>Categories</Text>
      </View>

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
  container: {},
  container_mainCategories: {
    paddingLeft: theme.SIZES.base * 2,
    paddingTop: theme.SIZES.base * 3,
  },
  container__title: {
    ...theme.FONTS.h1,
  },
  container__content: {
    paddingHorizontal: theme.SIZES.base * 2,
    paddingVertical: theme.SIZES.base * 3,
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
  container_item(isSelected) {
    return {
      padding: theme.SIZES.base,
      paddingBottom: theme.SIZES.base * 2,
      backgroundColor: isSelected ? theme.COLORS.primary : theme.COLORS.white,
      borderRadius: theme.SIZES.radius,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: theme.SIZES.base * 2,
    };
  },
  container_item_icon(isSelected) {
    return {
      width: 48,
      height: 48,
      borderRadius: 24,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: isSelected ? theme.COLORS.white : theme.COLORS.lightGray,
    };
  },
  sizeIcon: {
    width: 24,
    height: 24,
  },
  container_item__name(isSelected) {
    return {
      marginTop: theme.SIZES.base * 2,
      color: isSelected ? theme.COLORS.white : theme.COLORS.black,
      ...theme.FONTS.body5,
    };
  },
});
