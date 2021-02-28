import React from 'react';
import Home from './components/Home';
import { fetchRecipes, sendRecipes, deleteRecipe } from './redux/actions/recipes'
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const recipes = useSelector(({recipes}) => recipes.items);
  React.useEffect(() => {
    dispatch(fetchRecipes())
  }, [])

  const sendHandler = data => {
    sendRecipes(data);
  }

  const deleteHandler = id => {
    console.log(id);
    deleteRecipe(id);
  }

  let lastRecipeId;

  if (recipes[recipes.length - 1]) {
    lastRecipeId = recipes[recipes.length - 1].id;
  }

  return (
    <Home 
      recipes={recipes} 
      sendHandler={sendHandler} 
      lastRecipeId 
      deleteHandler={deleteHandler}
    />
  );
}

export default App;
