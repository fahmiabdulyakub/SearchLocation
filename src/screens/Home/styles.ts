import {StyleSheet} from 'react-native';
import {Colors} from 'themes';
import {hp, wp} from 'utils/StyleUtil';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  map: {
    width: wp(100),
    height: hp(100),
  },
  containerSearch: {
    position: 'absolute',
    marginTop: hp(3),
    marginLeft: wp(5),
    height: hp(63),
  },
  containerItem: {
    marginTop: hp(2),
  },
});

export default styles;
