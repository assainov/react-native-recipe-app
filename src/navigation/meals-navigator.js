import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import CategoriesScreen from '../screens/categories';
import CategoryMealsScreen from '../screens/category-meals';
import MealDetailsScreen from '../screens/meal-details';
import COLORS from '../constants/colors';

const MealsNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoryMeals: CategoryMealsScreen,
    MealDetails: {
      screen: MealDetailsScreen,
    },
  },
  {
    initialRouteName: 'Categories',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: COLORS.primary,
      },
      headerTintColor: 'white',
      title: 'Recipe App',
    },
  },
);

export default createAppContainer(MealsNavigator);
