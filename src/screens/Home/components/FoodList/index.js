import {Text, View, FlatList, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {icons} from '../../../../constants';
import styles from './styles';
import {Router} from '../../../../navigation/router';
const FoodList = ({foodList, categories}) => {
  const navigation = useNavigation();
  function getCategoryNameById(id) {
    let category = categories.filter(a => a.id === id);
    if (category.length > 0) return category[0].name;
    return '';
  }
  const handleRestaurant = item => {
    navigation.navigate(Router.FoodDetail, {item});
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.container_item}
        onPress={() => handleRestaurant(item)}>
        <View style={styles.container_item_image}>
          <Image
            source={item.photo}
            resizeMode="cover"
            style={styles.container_item_image__photo}
          />
          <View style={styles.container_item_duration}>
            <Text style={styles.container_item_duration__duration}>
              {item.duration}
            </Text>
          </View>
        </View>
        <Text style={styles.container_item__name}>{item.name}</Text>
        <View style={styles.container_item_feedBack}>
          <Image source={icons.star} style={styles.iconStar} />
          <Text style={styles.rating}>{item.rating}</Text>
          <View style={styles.container_item_categories}>
            {item.categories.map(categoryId => {
              return (
                <View style={styles.flexRow} key={categoryId}>
                  <Text style={styles.rating}>
                    {getCategoryNameById(categoryId)}
                  </Text>
                  <Text style={styles.dots}> . </Text>
                </View>
              );
            })}

            {[1, 2, 3].map(priceRating => (
              <Text
                key={priceRating}
                style={styles.dollars(priceRating, item.priceRating)}>
                $
              </Text>
            ))}
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      alwaysBounceVertical={false}
      data={foodList}
      keyExtractor={item => `${item.id}`}
      renderItem={renderItem}
      contentContainerStyle={styles.container_flatList}
    />
  );
};

export default FoodList;
