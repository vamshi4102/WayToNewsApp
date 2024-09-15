import {Linking} from 'react-native';

export const OpenUrl = async getUrl => {
  const url = getUrl;
  const supported = await Linking.canOpenURL(url);
  await Linking.openURL(url);
};
