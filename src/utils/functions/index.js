import {Linking} from 'react-native';

export const OpenUrl = async getUrl => {
  const url = getUrl;
  const supported = await Linking.canOpenURL(url);
  await Linking.openURL(url);
};
export const generateRandomString = () => {
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789'; // Allowed characters
  let randomString = '';

  for (let i = 0; i < 5; i++) {
    // Generate 5 blocks of 4 characters
    let block = '';
    for (let j = 0; j < 4; j++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      block += characters[randomIndex];
    }
    randomString += block;
    if (i < 4) randomString += '-'; // Add dash between blocks, not after the last block
  }

  return randomString;
};
