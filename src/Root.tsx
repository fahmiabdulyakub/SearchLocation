import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Colors from 'themes/Colors';
import {Home} from 'screens';
import {StackParams} from 'types/navigationType';
import {Provider as StoreProvider} from 'react-redux';
import store from 'store';

const Stack = createNativeStackNavigator<StackParams>();

export const Routes = () => {
  return (
    <StoreProvider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <SafeAreaView style={styles.SafeAreaView}>
            <StatusBar backgroundColor={Colors.white} barStyle="dark-content" />
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen
                name="Home"
                component={Home}
                options={{headerShown: false}}
              />
            </Stack.Navigator>
          </SafeAreaView>
        </NavigationContainer>
      </PaperProvider>
    </StoreProvider>
  );
};

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
  },
});
