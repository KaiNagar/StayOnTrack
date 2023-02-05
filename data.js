// meals
// pre made meals for the user to add to cart, user can make his own meals with ingrediants provided for him
const meals = [
    {
        _id: 'meal1',
        // map array
        ingredients: {
            rice: 200,
            chicken: 150,
            brocoli: 200,
        },
        // no data base
        totalCal: {
            carbs: 56,
            protein: 45,
            fat: 14,
            kcal: 768
        }
    },
    {
        _id: 'meal2',
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
        _id: 'meal1',
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
        _id: 'meal1',
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


// ingredients - this array is hard coded for all users, and only admins can change stats for this array,
// user cant add new ingredients directly they need to send msg for approvale from admins and they will add it manually
const ingredients = [
    {
        _id: 'ing1',
        name: 'rice',
        type: 'carb',
        calPer100: {
            carbs: 28,
            protein: 2.7,
            fat: 0.3,
            kcal: 130
        }
    },
    {
        _id: 'ing2',
        name: 'pasta',
        type: 'carb',
        calPer100: {
            carbs: 25,
            protein: 5,
            fat: 1.1,
            kcal: 131
        }
    },
    {
        _id: 'ing3',
        name: 'potatoes',
        type: 'carb',
        calPer100: {
            carbs: 17,
            protein: 2,
            fat: 0.1,
            kcal: 76
        }
    },
    {
        _id: 'ing4',
        name: 'sweet-potatoes',
        type: 'carb',
        calPer100: {
            carbs: 20,
            protein: 1.6,
            fat: 0.1,
            kcal: 85
        }
    },
    {
        _id: 'ing5',
        name: 'chicken',
        type: 'protein',
        calPer100: {
            carbs: 0,
            protein: 31,
            fat: 3.6,
            kcal: 164
        }
    },
    {
        _id: 'ing6',
        name: 'ground-beef',
        type: 'protein',
        calPer100: {
            carbs: 8,
            protein: 18,
            fat: 4.3,
            kcal: 140
        }
    },
    {
        _id: 'ing7',
        name: 'salmon',
        type: 'protein',
        calPer100: {
            carbs: 0,
            protein: 20,
            fat: 13,
            kcal: 208
        }
    },
    {
        _id: 'ing8',
        name: 'tofu',
        type: 'protein',
        calPer100: {
            carbs: 1.9,
            protein: 8,
            fat: 4.8,
            kcal: 76
        }
    },
    {
        _id: 'ing9',
        name: 'brocoli',
        type: 'vegis',
        calPer100: {
            carbs: 7,
            protein: 2.8,
            fat: 0.4,
            kcal: 33
        }
    },
    {
        _id: 'ing10',
        name: 'green-beens',
        type: 'vegis',
        calPer100: {
            carbs: 7,
            protein: 1.8,
            fat: 0.1,
            kcal: 30
        }
    },
]