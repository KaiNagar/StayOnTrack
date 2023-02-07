import { IngredientPreview } from "./IngredientPreview"

export const IngredientList = ({ ings,dynamicClass }) => {
  return (
    <section className={`ingredients-list flex ${dynamicClass}`}>
        {ings.map(ing=> <IngredientPreview key={ing.id} ing={ing} /> )}
    </section>
  )
}
