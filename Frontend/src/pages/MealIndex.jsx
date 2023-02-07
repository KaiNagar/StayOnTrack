import { useEffect } from 'react'
import { MealList } from '../cmps/meals/MealList'
import { loadIngredients } from '../store/actions/ingredientActions'
import { useSelector } from 'react-redux'
import { loadMeals, setFilter } from '../store/actions/mealActions'
import { MealFilter } from '../cmps/meals/MealFilter'
import { useState } from 'react'

export const MealIndex = () => {
  const { meals } = useSelector((state) => state.mealModule)
  const { filterBy } = useSelector((state) => state.mealModule)
  const [isFilterOpen, setIsFilterOpen] = useState(true)

  useEffect(() => {
    loadMeals()
    loadIngredients()
  }, [filterBy])

  const onSetFilterBy = (updatedFilterBy) => {
    setFilter(updatedFilterBy)
  }

  const onToggleFilter = () => {
    setIsFilterOpen((prevState) => !prevState)
  }

  if (!meals) return <div>Loading meals...</div>

  return (
    <section className='meal-index'>
      {/* <NavLink to='/meal/edit'>Add Meal</NavLink> */}
      <span onClick={onToggleFilter} className='filter-btn'>
        Filter
      </span>
      {isFilterOpen && (
        // <div className='filter-container'>
        //   <div className='filter-screen'></div>
          <MealFilter filterBy={filterBy} onSetFilterBy={onSetFilterBy} />
        // </div>
      )}
      <MealList meals={meals} />
      {!meals.length && <div>No meals to show</div>}
    </section>
  )
}
