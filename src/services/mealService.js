import { storageService } from "./async-storage.service"
import { utilService } from "./utilService"

export const mealService = {
    query,
    getById,
    remove,
    save,
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
    let meals = storageService.query(DB_KEY)
    if (!meals || !meals.length) {
        meals = _createMeals()
        storageService.postMany(DB_KEY, (_createMeals()))
    }
    if (filterBy) meals = filterMeals(filterBy, meals)
    return meals
}

function getById(mealId) {
    return storageService.get(DB_KEY, mealId)
}

function remove(mealId) {
    return storageService.remove(DB_KEY, mealId)
}

function save(meal) {
    if (meal._id) return _update(meal)
    else return _add(meal)
}

function _add(meal) {
    // meal.owener = userService.getLoggedInUser()
    return storageService.post(DB_KEY, meal)
}

function _update(meal) {
    return storageService.put(DB_KEY, meal)
}

function getEmptyMeal() {
    return {
        _id: _makeId(),
        name: '',
        ingredients: []
    }
}

function filterMeals({filterBy}, meals) {
    let filteredMeals = [...meals]
    if (filterBy.text) {
        filteredMeals = meals.filter(m => m.name.toLowerCase().includes(filterBy.text.toLowerCase()))
    }
    return filteredMeals
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