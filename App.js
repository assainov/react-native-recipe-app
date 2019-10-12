import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import MealsNavigator from './navigation/meals-navigator';

const fetchFonts = () =>
  Font.loadAsync({
    primary: require('./assets/fonts/OpenSans-Regular.ttf'), // eslint-disable-line
    'primary-bold': require('./assets/fonts/OpenSans-Bold.ttf'), // eslint-disable-line
  });

export default function App() {
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
}
