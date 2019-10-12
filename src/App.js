import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading, registerRootComponent } from 'expo';
import { useScreens } from 'react-native-screens';

import MealsNavigator from './navigation/meals-navigator';

useScreens();

const fetchFonts = () =>
  Font.loadAsync({
    primary: require('./assets/fonts/OpenSans-Regular.ttf'), // eslint-disable-line
    'primary-bold': require('./assets/fonts/OpenSans-Bold.ttf'), // eslint-disable-line
  });

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={error => console.log(error)} // eslint-disable-line
      />
    );
  }

  return <MealsNavigator />;
};

export default registerRootComponent(App);
