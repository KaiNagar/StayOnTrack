export const MealCal = ({ cal }) => {
  return <section className='meal-cal flex align-center'>
    <span className="cal carb">Carbs: {cal.carbs}</span>
    <span className="cal protein">Proteins: {cal.protein}</span>
    <span className="cal fat">Fat: {cal.fat}</span>
  </section>
}
