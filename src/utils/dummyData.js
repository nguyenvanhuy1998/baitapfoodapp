import {icons, images} from '../constants';

export const categoryData = [
  {
    id: 1,
    name: 'Rice',
    icon: icons.rice_bowl,
  },
  {
    id: 2,
    name: 'Noodles',
    icon: icons.noodle,
  },
  {
    id: 3,
    name: 'Hot Dogs',
    icon: icons.hotdog,
  },
  {
    id: 4,
    name: 'Salads',
    icon: icons.salad,
  },
  {
    id: 5,
    name: 'Burgers',
    icon: icons.hamburger,
  },
  {
    id: 6,
    name: 'Pizza',
    icon: icons.pizza,
  },
  {
    id: 7,
    name: 'Snacks',
    icon: icons.fries,
  },
  {
    id: 8,
    name: 'Sushi',
    icon: icons.sushi,
  },
  {
    id: 9,
    name: 'Desserts',
    icon: icons.donut,
  },
  {
    id: 10,
    name: 'Drinks',
    icon: icons.drink,
  },
];
// price rating
export const affordable = 1;
export const fairPrice = 2;
export const expensive = 3;
export const foodsData = [
  {
    id: 1,
    name: 'Burger Street',
    rating: 4.7,
    categories: [5, 7],
    photo: images.burger_restaurant_1,
    duration: '30 - 45 min',
    priceRating: expensive,
  },
  {
    id: 2,
    name: 'Burgers Assembly',
    rating: 4.8,
    categories: [5, 7],
    photo: images.burger_restaurant_2,
    duration: '30 - 45 min',
    priceRating: fairPrice,
  },
  {
    id: 3,
    name: 'The Pizza Revolution',
    rating: 4.8,
    categories: [6, 2, 3],
    photo: images.pizza,
    duration: '30 - 45 min',
    priceRating: fairPrice,
  },
  {
    id: 4,
    name: 'The Art of Pizza',
    rating: 4.8,
    categories: [6, 1, 4],
    photo: images.pizza_restaurant,
    duration: '30 - 45 min',
    priceRating: fairPrice,
  },
];

export default {
  categoryData,
  foodsData,
};
