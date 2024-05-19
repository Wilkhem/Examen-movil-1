import React, { useContext } from 'react';
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import RecipeContext from '../context/RecipeContext';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../App';

type RecipeListScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ListaDeRecetas'>;

type Props = {
  navigation: RecipeListScreenNavigationProp;
};

const RecipeListScreen: React.FC<Props> = ({ navigation }) => {
  const { recipes, deleteRecipe } = useContext(RecipeContext)!;

  return (
    <View style={styles.container}>
      <Button title="Agregar Receta" onPress={() => navigation.navigate('AgregarReceta')} />
      <FlatList
        data={recipes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.recipeItem}>
            <TouchableOpacity onPress={() => navigation.navigate('DetalleReceta', { id: item.id })}>
              <Text style={styles.recipeName}>{item.name}</Text>
            </TouchableOpacity>
            <Button title="Eliminar" onPress={() => deleteRecipe(item.id)} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  recipeItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  recipeName: {
    fontSize: 18,
  },
});

export default RecipeListScreen;
