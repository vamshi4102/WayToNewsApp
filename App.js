import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import NewsScreen from './src/screens/News';
import SettingsScreen from './src/screens/Settings';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {colors, fonts, fontSize} from './src/utils/constants';
import {store} from './src/utils/redux/store';
import {Provider, useSelector} from 'react-redux';
import SplashScreen from './src/screens/SplashScreen';
import {
  getFromSecureStorage,
  saveToSecureStorage,
} from './src/utils/constants/app-storage';
import {generateRandomString} from './src/utils/functions';
import {showSuccessToast} from './src/utils/constants/app-alerts';
import FlashMessage from 'react-native-flash-message';
import FullPageLoader from "./src/components/pageLoader";
import Navigation from "./src/utils/navigation/";

const Stack = createStackNavigator();
const App = () => {
  const [isLoading, setisLoading] = useState(false);
  useEffect(() => {
    const getUserId = async () => {
      let userId = null;
      userId = await getFromSecureStorage('UserId');
      if (userId == null) {
        console.log('userId-if', userId);
        const getUserId = generateRandomString();
        await saveToSecureStorage('UserId', getUserId, true);
      } else {
        console.log('userId-else', userId);
      }
    };
    getUserId();
    setisLoading(true);
    setTimeout(() => {
      setisLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {isLoading ? (
        <SplashScreen />
      ) : (
        <Provider store={store}>
            <Navigation />
        </Provider>
      )}
    </>
  );
};

export default App;
