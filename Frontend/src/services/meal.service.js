import { storageService } from "./async-storage.service"
import { ingredientsService } from "./ingredients.service"
import { utilService } from "./util.service"


export const mealService = {
    query,
    saveMeal,
    getEmptyMeal,
    getMealById,
    removeMeal
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
    return Promise.all(meals.map(m => _calcTotalCal(m)))
}


async function saveMeal(meal) {
    if (meal._id) {
        await storageService.put(MEAL_DB, meal)
    } else {
        await storageService.post(MEAL_DB, meal)
    }
    return _calcTotalCal(meal)
}

async function removeMeal(mealId) {
    await storageService.remove(MEAL_DB, mealId)
}

async function getMealById(mealId) {
    return await storageService.get(MEAL_DB, mealId)
}


async function _calcTotalCal(meal) {
    const ingredients = await ingredientsService.query()
    const mealCals = meal.ingredients.reduce((acc, ing) => {
        const { calPer100 } = ingredients.find(i => i._id === ing.id)
        for (let type in calPer100) {
            if (!acc[type]) acc[type] = 0
            acc[type] += Math.round(calPer100[type] * (ing.amount / 100))

        }
        return acc
    }, {})
    return {
        ...meal,
        totalCals: mealCals
    }
}

function getEmptyMeal() {
    return {
        isPreMade: false,
        name: '',
        imgUrl: 'https://www.budgetbytes.com/wp-content/uploads/2023/01/Ranch-Chicken-Meal-Prep-lined-up.jpg',
        ingredients: [
            {
                id: 'ing1',
                name: 'rice',
                type: 'carb',
                amount: 200
            },
            {
                id: 'ing5',
                name: 'chicken',
                type: 'protein',
                amount: 150
            },
            {
                id: 'ing9',
                name: 'brocoli',
                type: 'vegi',
                amount: 200
            },
        ],
    }
}


// naming--, createdAt, miniOwner{ ID,Name,Img?}, removeTotalCal from object - should be dynamic
const demoMeals = [
    {
        _id: 'meal1',
        name: 'The HardCore',
        isPreMade: true,
        imgUrl: 'https://www.budgetbytes.com/wp-content/uploads/2023/01/Ranch-Chicken-Meal-Prep-lined-up.jpg',
        ingredients: [
            {
                id: 'ing1',
                name: 'rice',
                type: 'carb',
                amount: 200
            },
            {
                id: 'ing5',
                name: 'chicken',
                type: 'protein',
                amount: 150
            },
            {
                id: 'ing9',
                name: 'brocoli',
                type: 'vegi',
                amount: 200
            },
        ],
    },
    {
        _id: 'meal2',
        isPreMade: true,
        name: 'The Picky',
        imgUrl: 'https://www.budgetbytes.com/wp-content/uploads/2023/01/Ranch-Chicken-Meal-Prep-lined-up.jpg',
        ingredients: [
            {
                id: 'ing2',
                name: 'pasta',
                type: 'carb',
                amount: 150
            },
            {
                id: 'ing6',
                name: 'ground-beef',
                type: 'protein',
                amount: 200
            },
            {
                id: 'ing10',
                name: 'green-beens',
                type: 'vegi',
                amount: 100
            },
        ],
    },
    {
        _id: 'meal3',
        isPreMade: true,
        name: 'The HardCore2',
        imgUrl: 'https://www.budgetbytes.com/wp-content/uploads/2023/01/Ranch-Chicken-Meal-Prep-lined-up.jpg',
        ingredients: [
            {
                id: 'ing1',
                name: 'rice',
                type: 'carb',
                amount: 200
            },
            {
                id: 'ing5',
                name: 'chicken',
                type: 'protein',
                amount: 150
            },
            {
                id: 'ing9',
                name: 'brocoli',
                type: 'vegi',
                amount: 200
            },
        ],
    },
    {
        _id: 'meal4',
        isPreMade: true,
        name: 'The Picky2',
        imgUrl: 'https://www.budgetbytes.com/wp-content/uploads/2023/01/Ranch-Chicken-Meal-Prep-lined-up.jpg',
        ingredients: [
            {
                id: 'ing2',
                name: 'pasta',
                type: 'carb',
                amount: 150
            },
            {
                id: 'ing6',
                name: 'ground-beef',
                type: 'protein',
                amount: 200
            },
            {
                id: 'ing10',
                name: 'green-beens',
                type: 'vegi',
                amount: 100
            },
        ],
    },
    {
        _id: 'meal5',
        isPreMade: true,
        name: 'The HardCore3',
        imgUrl: 'https://www.budgetbytes.com/wp-content/uploads/2023/01/Ranch-Chicken-Meal-Prep-lined-up.jpg',
        ingredients: [
            {
                id: 'ing1',
                name: 'rice',
                type: 'carb',
                amount: 200
            },
            {
                id: 'ing5',
                name: 'chicken',
                type: 'protein',
                amount: 150
            },
            {
                id: 'ing9',
                name: 'brocoli',
                type: 'vegi',
                amount: 200
            },
        ],
    },
    {
        _id: 'meal6',
        isPreMade: true,
        name: 'The Picky3',
        imgUrl: 'https://www.budgetbytes.com/wp-content/uploads/2023/01/Ranch-Chicken-Meal-Prep-lined-up.jpg',
        ingredients: [
            {
                id: 'ing2',
                name: 'pasta',
                type: 'carb',
                amount: 150
            },
            {
                id: 'ing6',
                name: 'ground-beef',
                type: 'protein',
                amount: 200
            },
            {
                id: 'ing10',
                name: 'green-beens',
                type: 'vegi',
                amount: 100
            },
        ],
    },
]

