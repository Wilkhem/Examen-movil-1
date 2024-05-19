import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import RecipeContext from '../context/RecipeContext';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../App';

type AddRecipeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'AgregarReceta'>;

type Props = {
    navigation: AddRecipeScreenNavigationProp;
};

const AddRecipeScreen: React.FC<Props> = ({ navigation }) => {
    const { addRecipe } = useContext(RecipeContext)!;
    const [name, setName] = useState('');
    const [ingredients, setIngredients] = useState('');

    const handleAddRecipe = () => {
        addRecipe(name, ingredients.split(','));
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Nombre de la Receta:</Text>
            <TextInput style={styles.input} value={name} onChangeText={setName} />
            <Text style={styles.label}>Ingredientes (separados por comas):</Text>
            <TextInput style={styles.input} value={ingredients} onChangeText={setIngredients} />
            <Button title="Agregar Receta" onPress={handleAddRecipe} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    label: {
        fontSize: 18,
        marginVertical: 8,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 8,
        marginBottom: 16,
    },
});

export default AddRecipeScreen;
