import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import CategoriesScreen from '../screens/categories';
import CategoryMealsScreen from '../screens/category-meals';
import MealDetailsScreen from '../screens/meal-details';

const MealsNavigator = createStackNavigator({
  Categories: CategoriesScreen,
  CategoryMeals: CategoryMealsScreen,
  MealDetails: {
    screen: MealDetailsScreen,
  },
});

export default createAppContainer(MealsNavigator);
