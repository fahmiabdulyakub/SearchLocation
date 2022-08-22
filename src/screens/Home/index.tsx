import {View} from 'react-native';
import React from 'react';
import styles from './styles';
import MapView from 'react-native-maps';
import {Maps} from 'constants/index';

const Home = () => {
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
    </View>
  );
};

export default Home;
