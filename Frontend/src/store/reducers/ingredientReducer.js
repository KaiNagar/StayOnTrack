const INITIAL_STATE = {
    ingredients:[],
}

export const LOAD_INGREDIENTS = 'LOAD_INGREDIENTS'

export function ingredientReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'LOAD_INGREDIENTS':
            return {
                ...state,
                ingredients: action.ingredients,
            }
        default:
            return state;
    }
}