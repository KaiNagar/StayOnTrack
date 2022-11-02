import { Link } from 'react-router-dom'

export default function MealPreview({ meal, idx, onRemoveMeal }) {
  return (
    <Link to={`/meal/${meal._id}`} className='meal-preview'>
      <h1>{idx + 1}.</h1>
      <h1>{meal.name}</h1>
      <h1>120p 70c 6f</h1>
      <div className='actions flex align-center space-between'>
        <Link to={`/meal/edit/${meal._id}`}>Edit</Link>
        <button onClick={(ev) => onRemoveMeal(ev, meal._id)}>X</button>
      </div>
    </Link>
  )
}
