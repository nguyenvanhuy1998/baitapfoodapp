import {Text, View, FlatList, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {foodsData} from '../../../../utils/dummyData';
import styles from './styles';
const Categories = ({categories, onSelectedCategory}) => {
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const handleCategory = item => {
    setSelectedCategory(item);
    let foodList = foodsData.filter(a => a.categories.includes(item.id));
    if (onSelectedCategory) {
      onSelectedCategory(foodList);
    }
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
