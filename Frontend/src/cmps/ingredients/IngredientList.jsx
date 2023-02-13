import { IngredientPreview } from "./IngredientPreview"

export const IngredientList = ({ ings,dynamicClass }) => {
  return (
    <section className={`ingredients-list flex ${dynamicClass} align-center justify-center`}>
        {ings.map(ing=> <IngredientPreview key={ing._id} ing={ing} /> )}
    </section>
  )
}
