import EncryptedStorage from 'react-native-encrypted-storage';

// secured storage data
export const saveToSecureStorage = async (key, value, isString) => {
  try {
    await EncryptedStorage.setItem(
      key,
      isString ? value : JSON.stringify(value),
    );
  } catch (error) {
    // There was an error on the native side
  }
};

// retriveing the value from secured storage
export const getFromSecureStorage = key => {
  return EncryptedStorage.getItem(key);
};

export const removeFromSecureStorage = async key => {
  await EncryptedStorage.removeItem(key);
};
