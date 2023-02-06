import { NavLink } from 'react-router-dom'
import { IngredientsList } from '../ingredients/IngredientsList'
import { MealCal } from './MealCal'

export const MealPreview = ({ meal }) => {

  return (
    <NavLink to={`/meal/edit/${meal._id}`} className='meal-preview flex column'>
      <h1 className='meal-title'>{meal.name}</h1>
      <div className='meal-img'>
        <img src={meal.imgUrl} alt='Meal Img' />
      </div>
      <div className='meal-stats flex column space-between'>
        <IngredientsList ings={meal.ingredients} />
        <MealCal cal={meal.totalCals} />
      </div>
    </NavLink>
  )
}
