import React from 'react';
import {List} from 'react-native-paper';
import {Colors} from 'themes';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import {PropsType} from './types';

const ListLocation = ({title, description, onPress}: PropsType) => {
  return (
    <List.Item
      title={title}
      description={description}
      left={() => (
        <Icon
          name="map-marker-circle"
          size={35}
          style={styles.iconMap}
          color={Colors.dark_gray}
        />
      )}
      style={styles.listItem}
      theme={{colors: {text: Colors.black}}}
      rippleColor={Colors.dark_gray}
      onPress={onPress}
    />
  );
};

export default ListLocation;
