import { storageService } from "./async-storage.service"
import { utilService } from "./utilService"

export const mealService = {
    query,
    getById,
    remove,
    add,
    update,
    getEmptyMeal
}

const DB_KEY = 'mealDB'

const ingredients = [
    {
        _id: 'rice101',
        name: 'Rice',
    },
    {
        _id: 'chicken101',
        name: 'Chicken'
    }
]


function query(filterBy = null) {
    let meals = _loadFromStorage()
    if (!meals) {
        meals = _createMeals()
        _saveToStorage(meals)
    }
    // if (filterBy && filterBy.text) {
    //     meals = meals.filter(m => m.name.toLowerCase().includes(filterBy.text))
    //     console.log(meals);
    // }

    return Promise.resolve(meals)

}

function getById(mealId) {
    if (!mealId) return Promise.resolve(null)
    const meals = _loadFromStorage()
    const meal = meals.find(m => m._id === mealId)
    return Promise.resolve(meal)
}

function remove(mealId) {
    let meals = _loadFromStorage()
    meals = meals.filter(m => m._id !== mealId)
    _saveToStorage(meals)
    return Promise.resolve()
}

function add(meal) {
    let meals = _loadFromStorage()
    meal._id = _makeId()
    meals = [meal, ...meals]
    _saveToStorage(meals)
    return Promise.resolve(meal)
}

function update(mealId, meal) {
    let meals = _loadFromStorage()
    const mealIdx = meals.findIndex(m => m._id === mealId)
    meals[mealIdx] = meal
    _saveToStorage(meals)
    return Promise.resolve(meal)
}

function getEmptyMeal() {
    return {
        _id: _makeId(),
        name: '',
        ingredients: []
    }
}

function _loadFromStorage() {
    return utilService.loadFromStorage(DB_KEY)
}
function _saveToStorage(meals) {
    return utilService.saveToStorage(DB_KEY, meals)
}

function _createMeals() {
    return [
        {
            _id: _makeId(),
            name: 'Rice and Chicken',
            ingredients: [
                { id: 'rice101', amount: 200, scale: 'gram' }, { id: 'chicken101', amount: 200, scale: 'gram' }
            ]
        }, {
            _id: _makeId(),
            name: 'Chicken',
            ingredients: [
                { id: 'rice101', amount: 200, scale: 'gram' }, { id: 'chicken101', amount: 200, scale: 'gram' }
            ]
        }, {
            _id: _makeId(),
            name: 'Rice',
            ingredients: [
                { id: 'rice101', amount: 200, scale: 'gram' }, { id: 'chicken101', amount: 200, scale: 'gram' }
            ]
        }, {
            _id: _makeId(),
            name: 'and',
            ingredients: [
                { id: 'rice101', amount: 200, scale: 'gram' }, { id: 'chicken101', amount: 200, scale: 'gram' }
            ]
        }, {
            _id: _makeId(),
            name: 'blaaaaa bla',
            ingredients: [
                { id: 'rice101', amount: 200, scale: 'gram' }, { id: 'chicken101', amount: 200, scale: 'gram' }
            ]
        },

    ]
}

function _makeId(length = 10) {
    var txt = ""
    var possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return txt
}