import { MealPreview } from './MealPreview'

export const MealList = ({ meals,onAddToCart }) => {
  
  return (
    <section className='meals-list'>
      {meals.map((meal) => (
        <MealPreview  key={meal._id} meal={meal} onAddToCart={onAddToCart} />
      ))}
    </section>
  )
}
