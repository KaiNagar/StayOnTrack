export const mealService = {
    getMeals,
}

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

const meals = [
    {
        _id: _makeId(),
        name: 'Rice and Chicken',
        ingredients: [
            { id: 'rice101', amount: 200, scale: 'gram' }, { id: 'chicken101', amount: 200, scale: 'gram' }
        ]
    }, {
        _id: _makeId(),
        name: 'Rice and Chicken',
        ingredients: [
            { id: 'rice101', amount: 200, scale: 'gram' }, { id: 'chicken101', amount: 200, scale: 'gram' }
        ]
    }, {
        _id: _makeId(),
        name: 'Rice and Chicken',
        ingredients: [
            { id: 'rice101', amount: 200, scale: 'gram' }, { id: 'chicken101', amount: 200, scale: 'gram' }
        ]
    }, {
        _id: _makeId(),
        name: 'Rice and Chicken',
        ingredients: [
            { id: 'rice101', amount: 200, scale: 'gram' }, { id: 'chicken101', amount: 200, scale: 'gram' }
        ]
    }, {
        _id: _makeId(),
        name: 'Rice and Chicken',
        ingredients: [
            { id: 'rice101', amount: 200, scale: 'gram' }, { id: 'chicken101', amount: 200, scale: 'gram' }
        ]
    },

]

function getMeals() {
    return meals
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