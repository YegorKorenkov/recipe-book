import axios from 'axios';

export const fetchRecipes = () => dispatch => {
    axios.get('../../../db.json').then(({data}) => {
        dispatch(setRecipes(...Object.values(data)))
    })
}

export const sendRecipes = newRecipe => {
    
    // axios.post('http://localhost:3001/recipes', JSON.stringify(newRecipe), {
    //     headers:{"Content-Type": "application/json"}
    // })
    // .then((response)=>{
    //     if (response.data.status === 'success') {
    //       console.log("Message Sent."); 
          
    //     } else if(response.data.status === 'fail') {
    //       console.log("Message failed to send.")
    //     }
    // })
    
}

export const setRecipes = items => ({
    type: 'SET_RECIPES',
    payload: items
})