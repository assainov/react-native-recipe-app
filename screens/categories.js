import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const CategoriesScreen = props => {
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

CategoriesScreen.propTypes = {};

export default CategoriesScreen;
