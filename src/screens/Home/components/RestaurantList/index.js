import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {icons, theme} from '../../../../constants';
import {useNavigation} from '@react-navigation/native';

const RestaurantList = ({restaurants = [], categories = []}) => {
  const navigation = useNavigation();
  function getCategoryNameById(id) {
    let category = categories.filter(a => a.id == id);
    if (category.length > 0) return category[0].name;
    return '';
  }
  const handleRestaurant = item =>
    navigation.navigate('Restaurant', {
      item,
    });
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
      data={restaurants}
      keyExtractor={item => `${item.id}`}
      renderItem={renderItem}
      contentContainerStyle={styles.container_flatList}
    />
  );
};

export default RestaurantList;

const styles = StyleSheet.create({
  container_flatList: {
    paddingHorizontal: theme.SIZES.base * 2,
    paddingBottom: theme.SIZES.base * 3,
  },
  container_item: {
    marginBottom: theme.SIZES.base * 2,
  },
  container_item_image: {
    marginBottom: theme.SIZES.base,
  },
  container_item_image__photo: {
    width: '100%',
    height: 160,
    borderRadius: theme.SIZES.radius4,
  },
  container_item_duration: {
    position: 'absolute',
    bottom: 0,
    height: 54,
    width: theme.SIZES.width * 0.3,
    backgroundColor: theme.COLORS.white,
    borderTopRightRadius: theme.SIZES.radius4,
    borderBottomLeftRadius: theme.SIZES.radius4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container_item_duration__duration: {
    ...theme.FONTS.body4_bold,
  },
  container_item__name: {
    ...theme.FONTS.body2,
  },
  container_item_feedBack: {
    marginTop: theme.SIZES.base,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconStar: {
    height: 16,
    width: 16,
    tintColor: theme.COLORS.primary,
    marginRight: 8,
  },
  rating: {
    ...theme.FONTS.body3,
  },
  container_item_categories: {
    flexDirection: 'row',
    marginLeft: 8,
    alignItems: 'center',
  },
  flexRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  dots: {
    ...theme.FONTS.h3,
    color: theme.COLORS.darkgray,
  },
  dollars(priceRating, item) {
    return {
      ...theme.FONTS.body3,
      color: priceRating <= item ? theme.COLORS.black : theme.COLORS.darkgray,
    };
  },
});
