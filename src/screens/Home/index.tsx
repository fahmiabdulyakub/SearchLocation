import {ScrollView, View} from 'react-native';
import React, {Dispatch, useEffect, useRef, useState} from 'react';
import styles from './styles';
import MapView from 'react-native-maps';
import {Maps, UPDATE_PLACE_DATA} from 'constants/index';
import {ListLocation, SearchInput} from 'components';
import {getUserInfo} from 'store/actions';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {GlobalType} from 'types/GlobalType';
import {UserDataType} from 'types/UserDataType';
import Config from 'react-native-config';
import {getPlaceList} from 'store/actions/PlaceAction';
import {PredictionsType} from 'types/PlaceType';
import {SearchInputRefType} from 'components/molecules/SearchInput/types';

const Home = () => {
  const [searchLocation, setSearchLocation] = useState<string>('');
  const [location, setLocation] = useState<PredictionsType | null>(null);
  const userData = useSelector<GlobalType, UserDataType>(
    state => state.user.userData,
    shallowEqual,
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(getPlaceList(dataPlace));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchLocation]);

  const onPressLocation = (item: PredictionsType) => {
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
        zoomEnabled
        style={styles.map}
        region={{
          latitude: userData.location.lat,
          longitude: userData.location.lng,
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
