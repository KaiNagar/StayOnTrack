export const MealIngredients = ({ ing }) => {
  return (
    <section className='meal-ingredients flex space-between align-center'>
      {/* carbs */}
      {ing.rice && <span className='ing rice carb'>Rice: {ing.rice}</span>}
      {ing.pasta && <span className='ing pasta carb'>Pasta: {ing.pasta}</span>}
      {ing.potetoes && (
        <span className='ing potetoes carb'>Potetoes: {ing.potetoes}</span>
      )}
      {/* proteins */}
      {ing.chicken && <span className='ing chicken protein'>Chicken: {ing.chicken}</span>}
      {ing['ground-beef'] && (
        <span className='ing ground-beef protein'>Ground beef: {ing['ground-beef']}</span>
      )}
      {ing.tofu && <span className='ing tofu protein'>Tofu: {ing.tofu}</span>}
      {/* vegis */}
      {ing.brocoli && <span className='ing brocoli vegi'>Brocoli: {ing.brocoli}</span>}
      {ing['green-beens'] && (
        <span className='ing green-beens vegi'>Green beens: {ing['green-beens']}</span>
      )}
    </section>
  )
}
