import React from 'react';
import Home from './components/Home';
import { fetchRecipes, sendRecipes } from './redux/actions/recipes'
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
  
  return (
    <Home recipes={recipes} sendHandler={sendHandler} />
  );
}

export default App;
