import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { sendRecipes } from '../redux/actions/recipes';

const Form = (props) => {
    const [name, setName] = React.useState('');
    const [ingredients, setIngredients] = React.useState([{name: '', amount: ''}]);
    const [steps, setSteps] = React.useState([]);

    const onSetNumOfIngredient = React.useCallback(() => {
        setIngredients(prev => [...prev, {name: '', amount: ''}])
    })

    const onSetIngredientName = (name, key) => {
        const newIngredientName = [...ingredients];
        newIngredientName[key].name = name;
        setIngredients(newIngredientName)
    }

    const onSetIngredientAmount = (amount, key) => {
        const newIngredientAmount = [...ingredients];
        newIngredientAmount[key].amount = amount;
        setIngredients(newIngredientAmount);
    }

    const deleteIngredient = key => {
        const ingredientsAfterRemove = [...ingredients];
        ingredientsAfterRemove.splice(key, 1);
        
        setIngredients(ingredientsAfterRemove); 
    }

    const onSetNumOfSteps = () => {
        setSteps(prev => [...prev, ''])
    }

    const onSetStep = (name, key) => {
        const newStep = [...steps];
        newStep[key] = name;
        setSteps(newStep);
    }

    const deleteStep = key => {
        const stepsAfterRemove = [...steps];
        stepsAfterRemove.splice(key, 1);
        setSteps(stepsAfterRemove);
    }
    const submitHandler = (e) => {
        e.preventDefault();
        const sendRecipeObj = {
            id: props.location.lastRecipeId + 1,
            name,
            ingredients,
            steps,
        }
        props.location.sendHandler(sendRecipeObj)
    }

    if (!props.location.sendHandler) return <Redirect to="/" />

    return (
        <div>
            <Link to='/'> Back to the main paige</Link>
            <form >
                <input 
                    type="text" 
                    name="name"
                    value={name}
                    placeholder="Name of recipe"
                    onChange={e => setName(e.target.value)}
                />
                <p>Write ingredients of recipe</p>
                <button type="button" onClick={onSetNumOfIngredient}>Plus ingredient</button>
                { ingredients.map((item, key) => (
                    <div key={key}>
                        <p>Ingredient:</p>
                        <input
                            type="text" 
                            key={'name'+key} 
                            value={item ? item.name : ''}
                            onChange={(e) => onSetIngredientName(e.target.value, key)}
                        />
                        <p>Amount:</p>
                        <input 
                            type="text" 
                            key={'amount'+key} 
                            value={item ? item.amount : ''}
                            onChange={(e) => onSetIngredientAmount(e.target.value, key)}
                        />
                        <button type="button" onClick={() => deleteIngredient(key)}>Delete</button>
                    </div>
                ))}

                <p>Write cooking steps</p>
                <button type="button" onClick={onSetNumOfSteps}>Plus step</button>
                { steps.map((item, key) => (
                    <div key={key}>
                        <input 
                            type="text" 
                            key={'name'+key} 
                            value={item ? item : ''}
                            onChange={(e) => onSetStep(e.target.value, key)}
                        />
                        <button type="button" onClick={() => deleteStep(key)}>Delete</button>
                    </div>
                ))}

                <button type="button" onClick={submitHandler}>Add recipe</button>
            </form>
        </div>
    );

};



export default Form;