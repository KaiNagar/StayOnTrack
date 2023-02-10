import { storageService } from "./async-storage.service"
import { ingredientsService } from "./ingredients.service"
import { utilService } from "./util.service"


export const mealService = {
    query,
    saveMeal,
    getEmptyMeal,
    getMealById,
    removeMeal,
    getEmptyFilterBy
}

const MEAL_DB = 'meal_db'

// remove totalCal

// SQL 
async function query(filterBy) {
    let meals = await storageService.query(MEAL_DB)
    if (!meals || !meals.length) {
        meals = demoMeals
        utilService.saveToStorage(MEAL_DB, meals)
    }
    meals = await Promise.all(meals.map(m => _calcTotalCal(m)))
    if (filterBy) meals = _filterMeals(meals, filterBy)
    return meals
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
    const meal = await storageService.get(MEAL_DB, mealId)
    return _calcTotalCal(meal)
}

function _filterMeals(meals, filterBy) {
    let filteredMeals = meals
    if (filterBy.isPreMade) {
        filteredMeals = filteredMeals.filter(m => m.isPreMade)
    }
    if (filterBy.text) {
        const regex = new RegExp(filterBy.text, 'i')
        filteredMeals = filteredMeals.filter(m => regex.test(m.name))
    }
    if (filterBy.minCarb) {
        filteredMeals = filteredMeals.filter(m => m.totalCals.carbs > filterBy.minCarb)
    }
    if (filterBy.maxCarb) {
        filteredMeals = filteredMeals.filter(m => m.totalCals.carbs < filterBy.maxCarb)
    }
    if (filterBy.minProtein) {
        filteredMeals = filteredMeals.filter(m => m.totalCals.protein > filterBy.minProtein)
    }
    if (filterBy.maxProtein) {
        filteredMeals = filteredMeals.filter(m => m.totalCals.protein < filterBy.maxProtein)
    }
    if (filterBy.minFat) {
        filteredMeals = filteredMeals.filter(m => m.totalCals.fat > filterBy.minFat)
    }
    if (filterBy.maxFat) {
        filteredMeals = filteredMeals.filter(m => m.totalCals.fat < filterBy.maxFat)
    }

    return filteredMeals
}


async function _calcTotalCal(meal) {
    const ingredients = await ingredientsService.query()
    const fullMeal = structuredClone(meal)
    fullMeal.totalCals = meal.ingredients.reduce((acc, ing, idx) => {
        const currentIngredient = ingredients.find(i => i._id === ing._id)
        fullMeal.ingredients[idx] = { ...fullMeal.ingredients[idx], ...currentIngredient }
        for (let type in currentIngredient.calPer100) {
            if (!acc[type]) acc[type] = 0
            acc[type] += Math.round(currentIngredient.calPer100[type] * (ing.amount / 100))

        }
        return acc
    }, {})
    console.log(fullMeal);
    return fullMeal
}

function getEmptyFilterBy() {
    return {
        isPreMade: true,
        text: '',
        minCarb: '',
        maxCarb: '',
        minProtein: '',
        maxProtein: '',
        minFat: '',
        maxFat: '',
    }
}

function getEmptyMeal() {
    return {
        isPreMade: false,
        name: '',
        imgUrl: 'https://www.budgetbytes.com/wp-content/uploads/2023/01/Ranch-Chicken-Meal-Prep-lined-up.jpg',
        ingredients: [
            {
                id: utilService.makeId(),
                name: '',
                type: 'carb',
                amount: 0
            },
            {
                id: utilService.makeId(),
                name: '',
                type: 'protein',
                amount: 0
            },
            {
                id: utilService.makeId(),
                name: '',
                type: 'vegi',
                amount: 0
            },
        ],
    }
}


// naming--, createdAt, miniOwner{ ID,Name,Img?}, removeTotalCal from object - should be dynamic---
const demoMeals = [
    {
        _id: 'meal1',
        name: 'The HardCore',
        isPreMade: true,
        imgUrl: 'https://www.budgetbytes.com/wp-content/uploads/2023/01/Ranch-Chicken-Meal-Prep-lined-up.jpg',
        ingredients: [
            {
                _id: 'ing1',
                amount: 200
            },
            {
                _id: 'ing5',
                amount: 150
            },
            {
                _id: 'ing9',
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
                _id: 'ing2',
                amount: 150
            },
            {
                _id: 'ing6',
                amount: 200
            },
            {
                _id: 'ing10',
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
                _id: 'ing1',
                amount: 200
            },
            {
                _id: 'ing5',
                amount: 150
            },
            {
                _id: 'ing9',
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
                _id: 'ing2',
                amount: 150
            },
            {
                _id: 'ing6',
                amount: 200
            },
            {
                _id: 'ing10',
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
                _id: 'ing1',
                amount: 200
            },
            {
                _id: 'ing5',
                amount: 150
            },
            {
                _id: 'ing9',
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
                _id: 'ing2',
                amount: 150
            },
            {
                _id: 'ing6',
                amount: 200
            },
            {
                _id: 'ing10',
                amount: 100
            },
        ],
    },
]

