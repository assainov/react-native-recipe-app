import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const MealDetailsScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

MealDetailsScreen.propTypes = {};

export default MealDetailsScreen;
