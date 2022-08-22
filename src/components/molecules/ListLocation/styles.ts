import {StyleSheet} from 'react-native';
import {Colors} from 'themes';
import {wp} from 'utils/StyleUtil';

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: Colors.white,
  },
  iconMap: {
    alignSelf: 'center',
    marginHorizontal: wp(2),
  },
});

export default styles;
