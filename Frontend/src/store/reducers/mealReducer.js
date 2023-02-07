import { mealService } from "../../services/meal.service"

const INITIAL_STATE = {
    meals: [],
    filterBy: mealService.getEmptyFilterBy()
    // isCartShown:false
    // shoppingCart:[]
}

export const LOAD_MEALS = 'LOAD_MEALS'
export const ADD_MEAL = 'ADD_MEAL'
export const UPDATE_MEAL = 'UPDATE_MEAL'
export const REMOVE_MEAL = 'REMOVE_MEAL'
export const UNDO_REMOVE_MEAL = 'UNDO_REMOVE_MEAL'
export const SET_FILTER = 'SET_FILTER'

export function mealReducer(state = INITIAL_STATE, action) {
    let meals
    let lastRemovedMeal
    switch (action.type) {
        case LOAD_MEALS:
            return { ...state, meals: action.meals, }
        case ADD_MEAL:
            meals = [...state.meals, action.meal]
            return { ...state, meals }
        case UPDATE_MEAL:
            meals = state.meals.filter(m => m._id === action.meal._id ? action.meal : m)
            return { ...state, meals }
        case REMOVE_MEAL:
            lastRemovedMeal = state.meals.find(m => m._id === action.mealId)
            meals = state.meals.filter(m => m._id !== action.mealId)
            return { ...state, meals, lastRemovedMeal }
        case UNDO_REMOVE_MEAL:
            ({ lastRemovedMeal } = state)
            meals = { lastRemovedMeal, ...state.meals }
            return { ...state, meals, lastRemovedMeal: null }
        case SET_FILTER:
            return { ...state, filterBy: action.filterBy }
        default:
            return state;
    }
}