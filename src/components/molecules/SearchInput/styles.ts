import {StyleSheet} from 'react-native';
import {Colors} from 'themes';
import {hp, wp} from 'utils/StyleUtil';

const styles = StyleSheet.create({
  inputContainer: {
    width: wp(90),
    height: hp(7),
    backgroundColor: Colors.white,
    color: Colors.dark_gray,
    borderRadius: 20,
  },
});

export default styles;
