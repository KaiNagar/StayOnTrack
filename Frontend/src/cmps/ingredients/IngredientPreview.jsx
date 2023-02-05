export const IngredientPreview = ({ ing }) => {


  const getIngName = () => {
    const ingNameSplited = ing.name.split('-')
    let ingName = ''
    ingNameSplited.map((partName, idx) => {
      if (idx > 0) ingName += ' '
      ingName += partName.charAt(0).toUpperCase() + partName.slice(1)
    })
    return ingName
  }

  
  return (
    <section className={`ingredient-preview ing ${ing.type}`}>
      {getIngName()}: {ing.amount}
    </section>
  )
}
