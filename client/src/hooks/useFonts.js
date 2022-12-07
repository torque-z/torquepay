import * as Font from 'expo-font';

export default useFonts = async () =>
  await Font.loadAsync({
    bruel_light: require('../../assets/fonts/bruel_light.otf'),
  });