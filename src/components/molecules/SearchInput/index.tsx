import React from 'react';
import styles from './styles';
import {Searchbar} from 'react-native-paper';
import {Colors} from 'themes';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {PropsType} from './types';

const SearchInput = ({value, onChangeText}: PropsType) => {
  return (
    <Searchbar
      placeholder="Search Location"
      style={styles.inputContainer}
      theme={{
        colors: {text: Colors.dark_gray, placeholder: Colors.gray},
      }}
      value={value}
      onChangeText={onChangeText}
      icon={() => <FontAwesome name="search" size={20} color={Colors.gray} />}
      clearIcon={() => (
        <FontAwesome name="remove" size={20} color={Colors.gray} />
      )}
    />
  );
};

export default SearchInput;
