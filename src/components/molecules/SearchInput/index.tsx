import React, {forwardRef, useImperativeHandle, useRef} from 'react';
import styles from './styles';
import {Searchbar} from 'react-native-paper';
import {Colors} from 'themes';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {PropsType, SearchInputRefType} from './types';
import {TextInput} from 'react-native';

const SearchInput = forwardRef<SearchInputRefType, PropsType>(
  ({value, onChangeText, placeholder}, ref) => {
    const searchBarRef = useRef<TextInput>(null);

    useImperativeHandle(
      ref,
      () => ({
        blur: () => {
          searchBarRef.current?.blur();
        },
      }),
      [],
    );

    return (
      <Searchbar
        ref={searchBarRef}
        placeholder={placeholder ?? 'Search Location'}
        style={styles.inputContainer}
        numberOfLines={1}
        multiline={false}
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
  },
);

export default SearchInput;
