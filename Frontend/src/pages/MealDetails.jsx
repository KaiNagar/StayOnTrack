import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { MealTableNutrition } from '../cmps/meals/MealTableNutrition'
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

  const onAddToCart = ()=>{
    console.log('i am going to be rich!!!');
  }

  if (!meal) return <div>Loading meal</div>

  return (
    <section className='meal-details flex column space-between'>
      <div className='meal-details-actions flex space-between align-center'>
        <button className='back-btn' onClick={() => navigate(-1)}>
          Back
        </button>
        <button className='add-to-cart-btn' onClick={onAddToCart}>Add To Cart</button>
      </div>
      <div className='meal-content flex space-between'>
        <div className='meal-img'>
          <img src={meal.imgUrl} alt='Meal img' />
        </div>
        <div className='meal-info flex column'>
          <div className='meal-name'>
            <h1>{meal.name}</h1>
          </div>
          <MealTableNutrition meal={meal} />
          {/* later on will be saved on every meal owner */}
          <span className='meal-created-by'>Created by: Manoka</span>
          {/* later on will be saved on every meal created at */}
          <span className='meal-created-at'>Created at: Todayyyy</span>
        </div>
      </div>
      <div className='order-meal'>
        <h1>Order meeeeee</h1>
      </div>
    </section>
  )
}
