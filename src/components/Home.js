import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ recipes, sendHandler }) => {
    console.log(recipes)
    return (
        <div >
            <h1>Our recipes</h1>
            <Link to={{
                pathname: '/add-recipe',
                sendHandler: sendHandler
            }} >
                <button>+Add new recipe</button>
            </Link>
            
            { recipes.map((recipe, key) => (
                <div key={recipe.name+key}>
                <h3>{recipe.name}</h3>
                <p>Ingredients:</p>
                <ul>
                    { recipe.ingredients.map((ingr, key) => (
                    <li key={key}>{ingr.name}, amount: {ingr.amount}</li>
                    ))}
                </ul>
                <p>Cooking steps</p>
                <ul>
                    { recipe.steps.map((step, key) => (
                    <li key={key}>{step}</li>
                    ))}
                </ul>
                </div>
            ))}
    </div>
    );
};

export default Home;