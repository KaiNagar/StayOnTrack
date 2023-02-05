import { storageService } from "./async-storage.service"
import { utilService } from "./util.service"


export const mealService = {
    query,
    saveMeal
}

const MEAL_DB = 'meal_db'

// remove totalCal

// SQL 
async function query() {
    let meals = await storageService.query(MEAL_DB)
    if (!meals || !meals.length) {
        meals = demoMeals
        utilService.saveToStorage(MEAL_DB, meals)
    }
    return meals
}


async function saveMeal(meal) {
    if (meal._id) {
        return await storageService.put(meal)
    } else {
        return await storageService.post(meal)
    }
}


// naming, createdAt, miniOwner{ ID,Name,Img?}, removeTotalCal from object - should be dynamic
const demoMeals = [
    {
        _id: 'meal1',
        isPreMade: true,
        imgUrl:'https://www.budgetbytes.com/wp-content/uploads/2023/01/Ranch-Chicken-Meal-Prep-lined-up.jpg',
        ingredients: {
            rice: 200,
            chicken: 150,
            brocoli: 200,
        },
        totalCal: {
            carbs: 56,
            protein: 45,
            fat: 14,
            kcal: 768
        }
    },
    {
        _id: 'meal2',
        isPreMade: true,
        imgUrl:'https://www.budgetbytes.com/wp-content/uploads/2023/01/Ranch-Chicken-Meal-Prep-lined-up.jpg',
        ingredients: {
            pasta: 150,
            'ground-beef': 200,
            'green-beens': 100,
        },
        totalCal: {
            carbs: 48,
            protein: 65,
            fat: 8.6,
            kcal: 859
        }
    },
    {
        _id: 'meal3',
        isPreMade: true,
        imgUrl:'https://www.budgetbytes.com/wp-content/uploads/2023/01/Ranch-Chicken-Meal-Prep-lined-up.jpg',
        ingredients: {
            rice: 200,
            chicken: 150,
            brocoli: 200,
        },
        totalCal: {
            carbs: 56,
            protein: 45,
            fat: 14,
            kcal: 768
        }
    },
    {
        _id: 'meal4',
        isPreMade: true,
        imgUrl:'https://www.budgetbytes.com/wp-content/uploads/2023/01/Ranch-Chicken-Meal-Prep-lined-up.jpg',
        ingredients: {
            pasta: 150,
            'ground-beef': 200,
            'green-beens': 100,
        },
        totalCal: {
            carbs: 48,
            protein: 65,
            fat: 8.6,
            kcal: 859
        }
    },
    {
        _id: 'meal5',
        isPreMade: true,
        imgUrl:'https://www.budgetbytes.com/wp-content/uploads/2023/01/Ranch-Chicken-Meal-Prep-lined-up.jpg',
        ingredients: {
            rice: 200,
            chicken: 150,
            brocoli: 200,
        },
        totalCal: {
            carbs: 56,
            protein: 45,
            fat: 14,
            kcal: 768
        }
    },
    {
        _id: 'meal6',
        isPreMade: true,
        imgUrl:'https://www.budgetbytes.com/wp-content/uploads/2023/01/Ranch-Chicken-Meal-Prep-lined-up.jpg',
        ingredients: {
            pasta: 150,
            'ground-beef': 200,
            'green-beens': 100,
        },
        totalCal: {
            carbs: 48,
            protein: 65,
            fat: 8.6,
            kcal: 859
        }
    },
]