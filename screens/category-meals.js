import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import PropTypes from 'prop-types';

const CategoryMealsScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>Screen</Text>
      <Button
        title="Meal details"
        onPress={() => props.navigation.navigate({ routeName: 'MealDetails' })}
      />
      <Button title="Go back" onPress={() => props.navigation.pop()} />
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

CategoryMealsScreen.propTypes = {
  navigation: PropTypes.object,
};

export default CategoryMealsScreen;
