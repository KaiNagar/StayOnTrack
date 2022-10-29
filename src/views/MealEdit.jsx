import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { mealService } from '../services/mealService'

//  saveMeal = () =>{
//     console.log('bla');
// }

const onSaveMeal = async (ev) => {
    ev.preventDefault()
    const newMeal = await mealService.saveMeal()
    // this.props.history.push(`/contact/${newContact._id}`)
  }
  const handleChange = ({ target }) => {
    const field = target.name
    const value = target.type === "number" ? +target.value || "" : target.value
    this.setState((prevState) => ({
      contact: { ...prevState.contact, [field]: value },
    }))
  }

export default function MealEdit() {
  const { id } = useParams()
  const meal = id ? mealService.getById(id) : mealService.getEmptyMeal()
  return <section className='meal-edit'>
  
  </section>
}
