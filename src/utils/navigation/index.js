import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import createStackNavigator from '@react-navigation/stack/src/navigators/createStackNavigator';

import {colors, fonts, fontSize} from '../../utils/constants';

import NewsScreen from '../../screens/News';
import SettingsScreen from '../../screens/Settings';
import FullPageLoader from '../../components/pageLoader';
import FlashMessage from 'react-native-flash-message';
import { useSelector } from 'react-redux';
const Navigation = () => {
  const Stack = createStackNavigator();
  const ispageLoading = useSelector((state)=>state.common.isLoading);
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: true,
            headerTitleStyle: {
              fontFamily: fonts.OpenSans500,
              fontSize: fontSize.fontSubHeding,
            },
            headerStyle: {
              borderBottomWidth: 1,
              borderBottomColor: '#f3f3f3',
              elevation: 0,
              shadowOpacity: 0,
            },
          }}>
          <Stack.Screen
            name="Home"
            component={NewsScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Settings"
            component={SettingsScreen}
            options={{animationEnabled: true, presentation: 'modal'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <FullPageLoader
        visible={ispageLoading.visible}
        bigtext={ispageLoading.heading}
        text={ispageLoading.body}
      />
      <FlashMessage position="top" />
    </>
  );
};

export default Navigation;
