import { useEffect } from 'react'
import { MealList } from '../cmps/meals/MealList'
import { NavLink } from 'react-router-dom'
import { loadIngredients } from '../store/actions/ingredientActions'
import { useSelector } from 'react-redux'
import { loadMeals, setFilter } from '../store/actions/mealActions'
import { MealFilter } from '../cmps/meals/MealFilter'
import { useState } from 'react'
import { mealService } from '../services/meal.service'

export const MealsIndex = () => {
  const { meals } = useSelector((state) => state.mealModule)
  const { filterBy } = useSelector((state) => state.mealModule)

  useEffect(() => {
    loadMeals()
    loadIngredients()
  }, [filterBy])

  const onSetFilterBy = (updatedFilterBy) => {
    setFilter(updatedFilterBy)
  }

  if (!meals) return <div>Loading meals...</div>

  return (
    <section className='meals-index'>
      {/* <NavLink to='/meal/edit'>Add Meal</NavLink> */}
      <MealFilter filterBy={filterBy} onSetFilterBy={onSetFilterBy} />
      <MealList meals={meals} />
      {!meals.length && <div>No meals to show</div>}
    </section>
  )
}
