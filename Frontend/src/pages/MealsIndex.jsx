import { useEffect, useState } from 'react'
import { MealsList } from '../cmps/meals/MealsList'
import { mealService } from '../services/meal.service'
import { NavLink } from 'react-router-dom'
import { loadIngredients } from '../store/actions/ingredientsActions'

export const MealsIndex = () => {
  const [meals, setMeals] = useState()

  useEffect(() => {
    loadMeals()
    loadIngredients()
  }, [])

  const loadMeals = async () => {
    const dbMeals = await mealService.query()
    setMeals(dbMeals)
  }
  if (!meals) return <div>Loading meals...</div>

  return (
    <section className='meals-index'>
      <NavLink to='/meal/edit'>Add Meal</NavLink>
      <MealsList meals={meals} />
    </section>
  )
}
