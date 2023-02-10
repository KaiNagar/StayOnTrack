export const MealTableNutrition = ({ meal }) => {
  const getIngName = (name) => {
    const ingNameSplited = name.split('-')
    let ingName = ''
    ingNameSplited.map((partName, idx) => {
      if (idx > 0) ingName += ' '
      ingName += partName.charAt(0).toUpperCase() + partName.slice(1)
    })
    return ingName
  }
  return (
    <section className='meal-table-nutrition'>
      <div className='ingredient th row1'>Ingredient</div>
      <div className='type th row1'>Type</div>
      <div className='amount th row1'>Amount</div>
      <div className='carbs th row1'>Carbs</div>
      <div className='protein th row1'>Protein</div>
      <div className='fat th row1'>Fat</div>
      <div className='calories th row1'>Calories</div>
      {meal.ingredients.map((ing, idx) => {
        const { carbs, protein, fat, kcal } = ing.calPer100
        const currentIngNut = Math.ceil(ing.amount / 100)
        return (
          <>
            <div className={`th row${idx + 2}`}>{getIngName(ing.name)}</div>
            <div className={`${ing.type} td row${idx + 2}`}>
              {getIngName(ing.type)}
            </div>
            <div className={`${ing.type} td row${idx + 2}`}>{ing.amount}</div>
            <div className={`${ing.type} td row${idx + 2}`}>
              {carbs * currentIngNut}
            </div>
            <div className={`${ing.type} td row${idx + 2}`}>
              {protein * currentIngNut}
            </div>
            <div className={`${ing.type} td row${idx + 2}`}>
              {fat * currentIngNut}
            </div>
            <div className={`${ing.type} td row${idx + 2}`}>
              {kcal * currentIngNut}
            </div>
          </>
        )
      })}
      <div className='total th row5'>Total</div>
      {}
    </section>
  )
}
