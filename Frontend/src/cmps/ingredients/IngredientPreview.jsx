export const IngredientPreview = ({ ing }) => {


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
    <section className={`ingredient-preview ing ${ing.type}`}>
      {getIngName(ing.name)}: {ing.amount}
    </section>
  )
}
