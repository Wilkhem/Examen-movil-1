import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RecipeContext from '../context/RecipeContext';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../App';

type RecipeDetailScreenRouteProp = RouteProp<RootStackParamList, 'DetalleReceta'>;

type Props = {
  route: RecipeDetailScreenRouteProp;
};

const RecipeDetailScreen: React.FC<Props> = ({ route }) => {
  const { id } = route.params;
  const { recipes } = useContext(RecipeContext)!;
  const recipe = recipes.find((r) => r.id === id);

  if (!recipe) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Receta no encontrada</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{recipe.name}</Text>
      <Text style={styles.subtitle}>Ingredientes:</Text>
      {recipe.ingredients.map((ingredient, index) => (
        <Text key={index} style={styles.ingredient}>
          {ingredient}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  ingredient: {
    fontSize: 16,
    marginBottom: 4,
  },
  errorText: {
    fontSize: 18,
    color: 'red',
  },
});

export default RecipeDetailScreen;
