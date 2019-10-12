import React from 'react';
import { Text, FlatList, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import PropTypes from 'prop-types';

import { CATEGORIES } from '../data/dummy-data';
import COLORS from '../constants/colors';

const CategoriesScreen = props => {
  const renderGridItem = itemData => (
    <TouchableOpacity
      style={styles.gridItem}
      onPress={() => props.navigation.navigate({ routeName: 'CategoryMeals' })}
    >
      <Text>{itemData.item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      keyExtractor={item => item.id}
      data={CATEGORIES}
      numColumns={2}
      renderItem={renderGridItem}
    />
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: 'Meal Categories',
  headerStyle: {
    backgroundColor: COLORS.primary,
  },
  headerTintColor: 'white',
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
});

CategoriesScreen.propTypes = {
  navigation: PropTypes.object,
};

export default CategoriesScreen;
