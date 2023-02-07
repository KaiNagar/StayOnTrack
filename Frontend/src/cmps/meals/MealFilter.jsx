import { useState } from 'react'

export const MealFilter = ({ filterBy, onSetFilterBy }) => {
  const [filterByToEdit, setFilterByToEdit] = useState(filterBy)

  const handleChange = ({ target }) => {
    const { name, value } = target
    setFilterByToEdit((prevFilter) => {
      const newFilter = { ...prevFilter, [name]: value }
      onSetFilterBy(newFilter)
      return newFilter
    })
  }

  //   const onSubmitForm = (ev) => {
  //     ev.preventDefault()
  //   }

  return (
    <section className='meal-filter'>
      {/* <form onSubmit={(ev) => onSubmitForm(ev)}> */}
      <input
        type='text'
        placeholder='Search your perfect meal'
        name='text'
        id='text'
        onChange={handleChange}
        value={filterByToEdit.text}
      />
      {/* </form> */}
    </section>
  )
}
