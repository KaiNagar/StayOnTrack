import { useEffect } from 'react'
import { MealsList } from '../cmps/meals/MealsList'
import { NavLink } from 'react-router-dom'
import { loadIngredients } from '../store/actions/ingredientActions'
import { useSelector } from 'react-redux'
import { loadMeals } from '../store/actions/mealActions'

export const MealsIndex = () => {
  const {meals} = useSelector(state=>state.mealModule)
  console.log(meals);

  useEffect(() => {
    loadMeals()
    loadIngredients()
  }, [])


 
  if (!meals) return <div>Loading meals...</div>

  return (
    <section className='meals-index'>
      <NavLink to='/meal/edit'>Add Meal</NavLink>
      <MealsList  meals={meals} />
    </section>
  )
}
