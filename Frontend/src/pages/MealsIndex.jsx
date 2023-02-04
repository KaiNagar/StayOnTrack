import { useEffect, useState } from 'react'
import { MealsList } from '../cmps/meals/MealsList'
import { mealService } from '../services/meal.service'

export const MealsIndex = () => {
  const [meals, setMeals] = useState()

  useEffect(() => {
    loadMeals()
  }, [])

  const loadMeals = async () => {
    const dbMeals = await mealService.query()
    setMeals(dbMeals)
  }
  if (!meals) return <div>Loading meals...</div>

  return <section className='meals-index'>

        <MealsList meals={meals} />

  </section>
}
