import { useForm } from '../../customHooks/useForm'


export const MealFilter = ({ filterBy, onSetFilterBy }) => {
  const [filterByToEdit, setFilterByToEdit, handleChange] = useForm(
    filterBy,
    onSetFilterBy
  )

  return (
    <section className='meal-filter flex column'>
      <label htmlFor='text'>Filter by text</label>
      <input
        className={`text-filter ${filterByToEdit.text && 'full'}`}
        type='text'
        placeholder='Search your perfect meal'
        name='text'
        id='text'
        onChange={handleChange}
        value={filterByToEdit.text}
      />
      <label htmlFor='minCarb'>Filter by carbs</label>
      <div className='filter-carbs'>
        <input
          type='text'
          placeholder='Min amount'
          className={`min-carb-filter ${filterByToEdit.minCarb && 'full'}`}
          id='minCarb'
          name='minCarb'
          onChange={handleChange}
          value={filterByToEdit.minCarb}
        />
        -
        <input
          type='text'
          placeholder='Max amount'
          className={`max-carb-filter ${filterByToEdit.maxCarb && 'full'}`}
          id='maxCarb'
          name='maxCarb'
          onChange={handleChange}
          value={filterByToEdit.maxCarb}
        />
      </div>
      <label htmlFor='minProtein'>Filter by protein</label>
      <div className='filter-protein'>
        <input
          type='text'
          placeholder='Min amount'
          className={`min-protein-filter ${filterByToEdit.minProtein && 'full'}`}
          id='minProtein'
          name='minProtein'
          onChange={handleChange}
          value={filterByToEdit.minProtein}
        />
        -
        <input
          type='text'
          placeholder='Max amount'
          className={`max-protein-filter ${filterByToEdit.maxProtein && 'full'}`}
          id='maxProtein'
          name='maxProtein'
          onChange={handleChange}
          value={filterByToEdit.maxProtein}
        />
      </div>
      <label htmlFor='minFat'>Filter by fat</label>
      <div className='filter-fat'>
        <input
          type='text'
          placeholder='Min amount'
          className={`min-fat-filter ${filterByToEdit.minFat && 'full'}`}
          id='minFat'
          name='minFat'
          onChange={handleChange}
          value={filterByToEdit.minFat}
        />
        -
        <input
          type='text'
          placeholder='Max amount'
          className={`max-protein-filter ${filterByToEdit.maxFat && 'full'}`}
          id='maxFat'
          name='maxFat'
          onChange={handleChange}
          value={filterByToEdit.maxFat}
        />
      </div>
    </section>
  )
}
