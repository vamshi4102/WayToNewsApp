import {View, Text} from 'react-native';
import React from 'react';
import NewsScreen from './src/screens/News';
import SettingsScreen from './src/screens/Settings';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import { colors, fonts, fontSize } from './src/utils/constants';

const Stack = createStackNavigator();
const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown:true,
          headerTitleStyle:{
            fontFamily:fonts.OpenSans500,
            fontSize:fontSize.fontSubHeding
          },
          headerStyle:{
            borderBottomWidth:1,
            borderBottomColor:'#f3f3f3',
            elevation:0,
            shadowOpacity:0
          }
        }}>
          <Stack.Screen name="Home" component={NewsScreen} options={{headerShown:false}} />
          <Stack.Screen name="Settings" component={SettingsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
