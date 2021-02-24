const initialState = {
    items: []
}

const recipes = (state = initialState, action) => {
    //console.log(action.payload)
    switch (action.type) {
        case 'SET_RECIPES': 
        return {
            ...state,
            items: action.payload
        }
        default: return state;
    }
}

export default recipes;