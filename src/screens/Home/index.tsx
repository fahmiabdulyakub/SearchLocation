import {View} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import MapView from 'react-native-maps';
import {Maps} from 'constants/index';
import {SearchInput} from 'components';

const Home = () => {
  const [location, setLocation] = useState('');
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={{
          latitude: -6.175115064391812,
          longitude: 106.82708842419382,
          latitudeDelta: Maps.latitudeDelta,
          longitudeDelta: Maps.longitudeDelta,
        }}
      />
      <View style={styles.containerSearch}>
        <SearchInput value={location} onChangeText={setLocation} />
      </View>
    </View>
  );
};

export default Home;
