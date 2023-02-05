import { IngredientPreview } from "./IngredientPreview"

export const IngredientsList = ({ ings }) => {
  return (
    <section className='ingredients-list flex'>
        {ings.map(ing=> <IngredientPreview key={ing.id} ing={ing} /> )}
    </section>
  )
}
