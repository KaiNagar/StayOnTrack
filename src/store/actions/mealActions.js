import { mealService } from "../../services/mealService"

export function loadMeals() {
    return async (dispatch, getState) => {
        try {
            const { filterBy } = getState().mealModule
            const meals = await mealService.query(filterBy)
            dispatch({ type: 'LOAD_MEALS', meals })
        } catch (err) {
            console.error('err', err);
        }
    }
}

export function addMeal(meal) {
    return async (dispatch) => {
        try {
            dispatch({ type: 'ADD_MEAL', meal })
            const newMeal = await mealService.save(meal)
            return newMeal
        } catch (err) {
            console.error('err', err);
        }
    }
}
export function updateMeal(meal) {
    return async (dispatch) => {
        try {
            dispatch({ type: 'UPDATE_MEAL', meal })
            const newMeal = await mealService.save(meal)
            return newMeal
        } catch (err) {
            console.error('err', err);
        }
    }
}
export function removeMeal(mealId) {
    return async (dispatch) => {
        try {
            const meals = await mealService.remove(mealId)
            dispatch({ type: 'REMOVE_MEAL', mealId })
            return meals
        } catch (err) {
            console.error('err', err);
        }
    }
}

export function setFilterBy(filterBy) {
    return (dispatch) => {
        dispatch({ type: 'SET_FILTER_BY', filterBy })
    }
}