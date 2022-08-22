import {ScrollView, View} from 'react-native';
import React, {Dispatch, useEffect, useState} from 'react';
import styles from './styles';
import MapView from 'react-native-maps';
import {Maps} from 'constants/index';
import {ListLocation, SearchInput} from 'components';
import {getUserInfo} from 'store/actions';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {GlobalType} from 'types/GlobalType';
import {UserDataType} from 'types/UserDataType';

const Home = () => {
  const [location, setLocation] = useState('');
  const userData = useSelector<GlobalType, UserDataType>(
    state => state.user.userData,
    shallowEqual,
  );

  const dispatch: Dispatch<any> = useDispatch();

  useEffect(() => {
    dispatch(getUserInfo());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={{
          latitude: userData.location.lat,
          longitude: userData.location.lng,
          latitudeDelta: Maps.latitudeDelta,
          longitudeDelta: Maps.longitudeDelta,
        }}
      />
      <View style={styles.containerSearch}>
        <SearchInput value={location} onChangeText={setLocation} />
        <ScrollView style={styles.containerItem}>
          <ListLocation title="Masjid Arrohim" description="Jl. Dahlia no 3" />
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;
