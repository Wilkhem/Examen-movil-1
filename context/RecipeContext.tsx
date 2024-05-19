import React, { createContext, useState, ReactNode } from 'react';

type Recipe = {
  id: number;
  name: string;
  ingredients: string[];
};

type RecipeContextType = {
  recipes: Recipe[];
  addRecipe: (name: string, ingredients: string[]) => void;
  deleteRecipe: (id: number) => void;
};

const RecipeContext = createContext<RecipeContextType | undefined>(undefined);

export const RecipeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  const addRecipe = (name: string, ingredients: string[]) => {
    setRecipes([...recipes, { id: recipes.length + 1, name, ingredients }]);
  };

  const deleteRecipe = (id: number) => {
    setRecipes(recipes.filter(recipe => recipe.id !== id));
  };

  return (
    <RecipeContext.Provider value={{ recipes, addRecipe, deleteRecipe }}>
      {children}
    </RecipeContext.Provider>
  );
};

export default RecipeContext;
