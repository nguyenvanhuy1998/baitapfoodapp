import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {icons, theme} from '../../../../constants';
const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.container_btnIcon}>
        <Image
          source={icons.nearby}
          resizeMode="contain"
          style={styles.container_btnIcon__icon}
        />
      </TouchableOpacity>
      <View style={styles.container_title}>
        <View style={styles.container_title_location}>
          <Text style={styles.container_title_location_name}>
            745 Lincoin PI
          </Text>
        </View>
      </View>
      <TouchableOpacity style={styles.container_btnIcon_right}>
        <Image
          source={icons.basket}
          resizeMode="contain"
          style={styles.container_btnIcon__icon}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 42,
  },
  container_btnIcon: {
    paddingLeft: theme.SIZES.base * 2,
    justifyContent: 'center',
  },
  container_btnIcon__icon: {
    width: 24,
    height: 24,
  },
  container_title: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container_title_location: {
    width: '60%',
    height: '100%',
    backgroundColor: theme.COLORS.lightGray3,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: theme.SIZES.radius2,
  },
  container_title_location_name: {
    ...theme.FONTS.h5,
  },
  container_btnIcon_right: {
    paddingRight: theme.SIZES.base * 2,
    justifyContent: 'center',
  },
});
