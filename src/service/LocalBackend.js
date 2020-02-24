import AsyncStorage from '@react-native-community/async-storage';

export async function setData(key, valor) {
    try {
        await AsyncStorage.setItem('@'+key, valor)
    } catch (e) {
        alert(e)
    }
}
export async function getData(key) {
    try {
        const value = await AsyncStorage.getItem('@' + key)
        if (value !== null) {
            return value;
        }
    } catch (e) {
        alert(e);
    }
}