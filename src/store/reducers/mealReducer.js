const INITIAL_STATE = {
    meals: null,
    filterBy: null
}


export function mealReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "LOAD_MEALS":
            return {
                ...state,
                meals: action.meals
            }
        case "ADD_MEAL":
            return {
                ...state,
                meals: [action.meal, ...state.meals]
            }
        case "UPDATE_MEAL":
            return {
                ...state,
                meals: state.contacts.map(m => m._id === action.meal._id ? action.meal : m)
            }
        case "REMOVE_MEAL":
            return {
                ...state,
                meals: state.meals.filter(m => m._id !== action.mealId)
            }
        case "SET_FILTER_BY":
            return {
                ...state,
                filterBy: { ...action.filterBy }
            }

        default:
            return state
    }
}