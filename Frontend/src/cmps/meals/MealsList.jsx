import { MealPreview } from './MealPreview'

export const MealsList = ({ meals }) => {
  return (
    <section className='meals-list'>
      {meals.map((meal) => (
        <MealPreview key={meal._id} meal={meal} />
      ))}
    </section>
  )
}
