import {StyleSheet} from 'react-native';
import {theme} from '../../../../constants';
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
export default styles;
