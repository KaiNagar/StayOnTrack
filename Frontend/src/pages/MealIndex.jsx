import { useEffect } from 'react'
import { MealList } from '../cmps/meals/MealList'
import { loadIngredients } from '../store/actions/ingredientActions'
import { useSelector } from 'react-redux'
import { loadMeals, setFilter } from '../store/actions/mealActions'
import { MealFilter } from '../cmps/meals/MealFilter'
import { useState } from 'react'
import { FaFilter } from 'react-icons/fa'
import { FiFilter } from 'react-icons/fi'

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
      <div className='meal-subheader'>
        <span
          onClick={onToggleFilter}
          className={`filter-btn flex ${isFilterOpen ? 'filter-open' : ''} `}
          title={'Filter'}
        >
          {isFilterOpen ? <FaFilter /> : <FiFilter />}
        </span>
        {isFilterOpen && (
          <MealFilter filterBy={filterBy} onSetFilterBy={onSetFilterBy} />
        )}
      </div>
      <MealList meals={meals} />
      {!meals.length && <div>No meals to show</div>}
    </section>
  )
}
