import { MealCal } from './MealCal'
import { MealIngredients } from './MealIngredients'

export const MealPreview = ({ meal }) => {
  // cal service calculation
  return (
    <section className='meal-preview flex column '>
      <div className='meal-img'>
        <img src={meal.imgUrl} alt='' />
      </div>
      <div className='meal-stats flex column space-between'>
        <MealIngredients ing={meal.ingredients} />
        {/* <div className="divider"></div> */}
        <MealCal cal={meal.totalCal} />
      </div>
    </section>
  )
}
