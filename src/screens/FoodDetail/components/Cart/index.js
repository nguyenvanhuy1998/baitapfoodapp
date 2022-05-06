import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {icons, theme} from '../../../../constants';

const Cart = ({countFood = 1, price = 46.98}) => {
  return (
    <View style={[styles.container, styles.shadow]}>
      <View style={styles.container_count}>
        <Text style={styles.count}>{countFood} Item in Cart</Text>
        <Text style={styles.count}>{`$${price}`}</Text>
      </View>
      <View style={styles.line} />
      <View
        style={[
          styles.flexRow,
          {justifyContent: 'space-between', marginBottom: theme.SIZES.base * 3},
        ]}>
        <View style={styles.flexRow}>
          <Image source={icons.location} style={styles.icon} />
          <Text style={styles.count}>745 Lincol PI</Text>
        </View>
        <View style={styles.flexRow}>
          <Image source={icons.master_card} style={styles.icon} />
          <Text style={styles.count}>****549</Text>
        </View>
      </View>
      <TouchableOpacity style={[styles.btnOrder, styles.shadow]}>
        <Text style={styles.order}>ORDERS</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    marginTop: theme.SIZES.base * 3,
    backgroundColor: theme.COLORS.white,
    paddingHorizontal: theme.SIZES.base * 2,
    borderTopLeftRadius: theme.SIZES.base * 4,
    borderTopRightRadius: theme.SIZES.base * 4,
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
  container_count: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: theme.SIZES.base * 4,
  },
  count: {
    ...theme.FONTS.body5,
    fontWeight: '500',
  },
  line: {
    height: 1,
    backgroundColor: theme.COLORS.lightGray4,
    marginBottom: theme.SIZES.base * 3,
  },
  icon: {
    width: 16,
    height: 16,
    resizeMode: 'cover',
    marginRight: theme.SIZES.base,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnOrder: {
    height: 40,
    backgroundColor: theme.COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.SIZES.base * 2,
    borderRadius: theme.SIZES.base * 2,
  },
  order: {
    ...theme.FONTS.body6,
    color: theme.COLORS.white,
    fontWeight: 'bold',
  },
});
