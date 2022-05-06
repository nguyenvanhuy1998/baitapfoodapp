import {StyleSheet} from 'react-native';
import {theme} from '../../../../constants';

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
export default styles;
