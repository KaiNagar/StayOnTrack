import { IngredientsList } from '../ingredients/IngredientsList'
import { MealCal } from './MealCal'
// import { MealIngredients } from './MealIngredients'

export const MealPreview = ({ meal }) => {
  console.log(meal);
  // cal service calculation
  return (
    <section className='meal-preview flex column '>
      <h1 className='meal-title'>{meal.name}</h1>
      <div className='meal-img'>
        <img src={meal.imgUrl} alt='Meal Img' />
      </div>
      <div className='meal-stats flex column space-between'>
        <IngredientsList ings={meal.ingredients} />
        {/* <div className="divider"></div> */}
        {/* <MealCal cal={meal.totalCal} /> */}
      </div>
    </section>
  )
}
