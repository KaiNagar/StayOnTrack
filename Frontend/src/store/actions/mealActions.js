import { mealService } from "../../services/meal.service.js";
import { store } from "../index.js";
import { ADD_MEAL, LOAD_MEALS, REMOVE_MEAL, SET_FILTER, UNDO_REMOVE_MEAL, UPDATE_MEAL } from "../reducers/mealReducer";

export async function loadMeals() {
    try {
        const {filterBy} = store.getState().mealModule
        const meals = await mealService.query(filterBy)
        store.dispatch({ type: LOAD_MEALS, meals })
        return meals
    } catch (err) {
        throw err
    }
};

export async function saveMeal(meal) {
    const type = (meal._id) ? UPDATE_MEAL : ADD_MEAL
    try {
        const newMeal = await mealService.saveMeal(meal)
        store.dispatch({ type, meal: newMeal })
    } catch (err) {
        throw err

    }
}

export async function removeMeal(mealId) {
    try {
        store.dispatch({ type: REMOVE_MEAL, mealId })
        await mealService.removeMeal()
    } catch (err) {
        store.dispatch({ type: UNDO_REMOVE_MEAL })
        throw err
    }
}

export function setFilter(filterBy) {
    store.dispatch({ type: SET_FILTER, filterBy })
}
