import AsyncStorage from '@react-native-async-storage/async-storage';

const key = 'user';

const storeData = async (value) => {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (error) {
        console.log(error);
    }
}

const getData = async () => {
    try {
      const value = await AsyncStorage.getItem(key)
      if(value !== null) {
        return value;
      }
    } catch(error) {
        console.log(error);
    }
  }

export default {
    storeData,
    getData,

}