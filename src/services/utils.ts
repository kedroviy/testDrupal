import AsyncStorage from '@react-native-async-storage/async-storage';

const storeAccessToken = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.log(e);
  }
};

const getAccessToken = async key => {
  try {
    if (key !== null) {
      return await AsyncStorage.getItem(key);
    }
  } catch (e) {
    console.log(e);
  }
};

const getDataFromStorage = key => {
  try {
    if (key !== null) {
      return AsyncStorage.getItem(key);
    }
  } catch (error) {
    console.log(error);
  }
};

export {storeAccessToken, getAccessToken, getDataFromStorage};
