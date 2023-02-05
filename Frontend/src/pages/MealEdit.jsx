import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { mealService } from '../services/meal.service'

export const MealEdit = () => {
  const [mealToEdit, setMealToEdit] = useState(mealService.getEmptyMeal())
  const { ingredients } = useSelector((state) => state.ingredientsModule)
  console.log(ingredients)

  const navigate = useNavigate()
  const { mealId } = useParams()

  useEffect(() => {
    if (mealId) {
      const currentMeal = mealService.getMealById(mealId)
      setMealToEdit({ ...currentMeal })
    }
  }, [])
  return (
    <section className='meal-edit'>
      <button onClick={() => navigate(-1)}>Back</button>
      <form>
        <label htmlFor='meal-name'>Meal name:</label>
        <input type='text' id='meal-name' placeholder='Enter meal name' />
      </form>
    </section>
  )
}
