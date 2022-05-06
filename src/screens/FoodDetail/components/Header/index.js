import {Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {icons} from '../../../../constants';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
const Header = ({name}) => {
  const {goBack} = useNavigation();
  const handleBack = () => {
    goBack();
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.container_btnIcon} onPress={handleBack}>
        <Image
          source={icons.back}
          resizeMode="contain"
          style={styles.container_btnIcon__icon}
        />
      </TouchableOpacity>
      <View style={styles.container_title}>
        <View style={styles.container_title_location}>
          <Text style={styles.container_title_location_name}>{name}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.container_btnIcon_right}>
        <Image
          source={icons.list}
          resizeMode="contain"
          style={styles.container_btnIcon__icon}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
