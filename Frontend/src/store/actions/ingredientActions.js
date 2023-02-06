import { store } from "../index.js";
import { ingredientsService } from "../../services/ingredients.service";
import { LOAD_INGREDIENTS } from "../reducers/ingredientReducer";

export async function loadIngredients() {
        try {
            // const {filterBy} = getState().ingredientsModule
            const ingredients = await ingredientsService.query()
            store.dispatch({ type: LOAD_INGREDIENTS, ingredients })
            return ingredients
        } catch (err) {
            console.log(err);
        }
    };
