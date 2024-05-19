import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import RecipeList from '../screens/RecipeListScreen';
import RecipeDetails from '../screens/RecipeDetailScreen';
import AddRecipe from '../screens/AddRecipe';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function RecipeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="RecipeList" component={RecipeList} />
      <Stack.Screen name="RecipeDetails" component={RecipeDetails} />
    </Stack.Navigator>
  );
}

export default function RecipeNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Recipes" component={RecipeStack} />
        <Tab.Screen name="Add Recipe" component={AddRecipe} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
