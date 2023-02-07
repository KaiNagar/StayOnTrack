import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { IngredientList } from '../cmps/ingredients/IngredientList'
import { MealCal } from '../cmps/meals/MealCal'
import { mealService } from '../services/meal.service'

export const MealDetails = () => {
  const [meal, setMeal] = useState(null)
  const { mealId } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    loadMeal()
  }, [])

  const loadMeal = async () => {
    const meal = await mealService.getMealById(mealId)
    setMeal(meal)
  }

  if (!meal) return <div>Loading meal</div>
  console.log(meal)

  return (
    <section className='meal-details flex column space-between'>
      <button className='back-btn' onClick={() => navigate(-1)}>Back</button>
      <div className='meal-content flex space-between'>
        <div className='meal-img'>
          <img src={meal.imgUrl} alt='Meal img' />
        </div>
        <div className='meal-info flex column'>
            <div className="meal-name"><h1>{meal.name}</h1></div>
          <div className='meal-ingredients'>
            <h1 className='ing-title'>Meal Ingredients</h1>
            <IngredientList
              ings={meal.ingredients}
              dynamicClass={'ings-in-details'}
            />
          </div>
          <div className='meal-calories'>
            <h1 className='cals-title'>Meal Calories</h1>
            <MealCal cal={meal.totalCals} dynamicClass={'cals-in-details'} />
          </div>
          {/* later on will be saved on every meal owner */}
          <span className='meal-created-by'>Created by: Manoka</span>
          {/* later on will be saved on every meal created at */}
          <span className='meal-created-at'>Created at: Todayyyy</span>
        </div>
      </div>
      <div className="order-meal">
        <h1>Order meeeeee</h1>
      </div>
    </section>
  )
}
