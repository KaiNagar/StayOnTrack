import { NavLink } from 'react-router-dom'
import { IngredientList } from '../ingredients/IngredientList'
import { MealCal } from './MealCal'

export const MealPreview = ({ meal, onAddToCart }) => {
  return (
    <NavLink to={`/meal/${meal._id}`} className='meal-preview flex column'>
      <h1 className='meal-title'>{meal.name}</h1>
      <div className='meal-img'>
        <img src={meal.imgUrl} alt='Meal Img' />
      </div>
      <div className='meal-stats flex column space-between'>
        <h3>Meal ingredients</h3>
        <IngredientList ings={meal.ingredients} />
        <h3>Meal calories</h3>
        <MealCal cal={meal.totalCals} />
      </div>
      <button className='add-btn' onClick={(ev) => onAddToCart(ev, meal._id)}>
        Add
      </button>
    </NavLink>
  )
}
