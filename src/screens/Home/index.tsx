/* eslint-disable react-hooks/exhaustive-deps */
import {ScrollView, View} from 'react-native';
import React, {Dispatch, useEffect, useRef, useState} from 'react';
import styles from './styles';
import MapView from 'react-native-maps';
import {Maps, UPDATE_PLACE_DATA} from 'constants/index';
import {ListLocation, SearchInput} from 'components';
import {getUserInfo} from 'store/actions';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {GlobalType} from 'types/GlobalType';
import {LocationType, UserDataType} from 'types/UserDataType';
import Config from 'react-native-config';
import {getPlaceDetails, getPlaceList} from 'store/actions/PlaceAction';
import {PredictionsType} from 'types/PlaceType';
import {SearchInputRefType} from 'components/molecules/SearchInput/types';

const Home = () => {
  const userData = useSelector<GlobalType, UserDataType>(
    state => state.user.userData,
    shallowEqual,
  );
  const [searchLocation, setSearchLocation] = useState<string>('');
  const [location, setLocation] = useState<PredictionsType | null>(null);
  const [locationDetails, setLocationDetails] = useState<LocationType>(
    userData.location,
  );
  const searchInputRef = useRef<SearchInputRefType>();

  const placeList = useSelector<GlobalType, PredictionsType[]>(
    state => state.place.predictions,
    shallowEqual,
  );

  const dispatch: Dispatch<any> = useDispatch();

  const dataPlace = {
    key: Config.API_KEY,
    language: 'en',
    types: 'establishment',
    radius: 5000,
    location: `${userData.location.lat},${userData.location.lng}`,
    input: searchLocation,
  };

  useEffect(() => {
    dispatch(getUserInfo());
  }, []);

  useEffect(() => {
    setLocationDetails(userData.location);
  }, [userData]);

  useEffect(() => {
    dispatch(getPlaceList(dataPlace));
  }, [searchLocation]);

  const onPressLocation = (item: PredictionsType) => {
    const dataPlaceId = {
      key: Config.API_KEY,
      place_id: item.place_id,
    };

    getPlaceDetails(dataPlaceId).then((result: any) => {
      setLocationDetails(result.location);
    });

    searchInputRef.current?.blur();
    setLocation(item);
    setSearchLocation('');
    dispatch({
      type: UPDATE_PLACE_DATA,
      payload: [],
    });
  };

  return (
    <View style={styles.container}>
      <MapView
        zoomControlEnabled
        loadingEnabled
        style={styles.map}
        region={{
          latitude: locationDetails.lat,
          longitude: locationDetails.lng,
          latitudeDelta: Maps.latitudeDelta,
          longitudeDelta: Maps.longitudeDelta,
        }}
      />
      <View style={styles.containerSearch}>
        <SearchInput
          ref={searchInputRef}
          value={searchLocation}
          onChangeText={setSearchLocation}
          placeholder={location?.description}
        />
        <ScrollView
          style={styles.containerItem}
          keyboardShouldPersistTaps="handled">
          {placeList.map((item: PredictionsType, index: number) => (
            <ListLocation
              key={index}
              title={item.structured_formatting.main_text}
              description={item.structured_formatting.secondary_text}
              onPress={() => onPressLocation(item)}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;
