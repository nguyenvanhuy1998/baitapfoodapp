import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
const COLORS = {
  // base colors
  primary: '#FC6D3F', // orange
  secondary: '#CDCDD2', // gray

  // colors
  black: '#1E1F20',
  white: '#FFFFFF',

  lightGray: '#F5F5F6',
  lightGray2: '#F6F6F7',
  lightGray3: '#EFEFF1',
  lightGray4: '#F8F8F9',
  transparent: 'transparent',
  darkgray: '#898C95',
};
const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 30,
  radius2: 21,
  radius3: 40,
  radius4: 32,
  padding: 10,
  padding2: 12,

  // font sizes
  largeTitle: 50,
  h1: 30,
  h2: 22,
  h3: 12,
  h4: 18,
  body1: 30,
  body2: 24,
  body3: 12,
  body4: 14,
  body5: 12,
  body6: 16,

  // app dimensions
  width,
  height,
};
const FONTS = {
  largeTitle: {
    fontFamily: 'Roboto-regular',
    fontSize: SIZES.largeTitle,
    lineHeight: 55,
  },
  h1: {fontFamily: 'Roboto-Black', fontSize: SIZES.h1, lineHeight: 36},
  h2: {fontFamily: 'Roboto-Bold', fontSize: SIZES.h2, lineHeight: 30},
  h3: {fontFamily: 'Roboto-Medium', fontSize: SIZES.h3},
  h4: {fontFamily: 'Roboto-Bold', fontSize: SIZES.h4, lineHeight: 22},
  h5: {fontFamily: 'Roboto', fontSize: SIZES.body5, fontWeight: '500'},

  body1: {fontFamily: 'Roboto-Regular', fontSize: SIZES.body1, lineHeight: 36},
  body2: {fontFamily: 'Roboto', fontSize: SIZES.body2, fontWeight: '500'},
  body3: {fontFamily: 'Roboto-Medium', fontSize: SIZES.body3},
  body4: {fontFamily: 'Roboto-Regular', fontSize: SIZES.body4, lineHeight: 22},
  body4_bold: {
    fontFamily: 'Roboto',
    fontSize: SIZES.body4,
    fontWeight: '500',
  },

  body5: {fontFamily: 'Roboto-Regular', fontSize: SIZES.body5, lineHeight: 22},
  body6: {fontFamily: 'Roboto', fontSize: SIZES.body6},
};
const theme = {COLORS, SIZES, FONTS};

export default theme;
