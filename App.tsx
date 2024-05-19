import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RecipeProvider } from './context/RecipeContext';
import RecipeListScreen from './screens/RecipeListScreen';
import AddRecipeScreen from './screens/AddRecipeScreen';
import RecipeDetailScreen from './screens/RecipeDetailScreen';

export type RootStackParamList = {
  ListaDeRecetas: undefined;
  AgregarReceta: undefined;
  DetalleReceta: { id: number };
};

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <RecipeProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="ListaDeRecetas">
          <Stack.Screen name="ListaDeRecetas" component={RecipeListScreen} />
          <Stack.Screen name="AgregarReceta" component={AddRecipeScreen} />
          <Stack.Screen name="DetalleReceta" component={RecipeDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </RecipeProvider>
  );
};

export default App;
