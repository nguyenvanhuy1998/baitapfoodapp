import {Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {icons} from '../../../../constants';
import styles from './styles';
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
