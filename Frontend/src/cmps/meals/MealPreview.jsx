import { MealIngredients } from "./MealIngredients"

export const MealPreview = ({ meal }) => {
  return (
    <section className='meal-preview'>
      <div className='meal-img'>
        <img src={meal.imgUrl} alt='' />
      </div>
      <MealIngredients ing={meal.ingredients} />
    </section>
  )
}
