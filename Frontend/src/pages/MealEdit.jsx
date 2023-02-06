import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { mealService } from '../services/meal.service'

export const MealEdit = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm()
  const { ingredients } = useSelector((state) => state.ingredientsModule)
  const [mealToEdit, setMealToEdit] = useState(mealService.getEmptyMeal())
  const navigate = useNavigate()
  const { mealId } = useParams()

  useEffect(() => {
    if (mealId) {
      const currentMeal = mealService.getMealById(mealId)
      setMealToEdit({ ...currentMeal })
    }
  }, [])

  const onSubmitForm = (data) => {
    console.log(data)
    reset()
  }
  return (
    <section className='meal-edit'>
      <button onClick={() => navigate(-1)}>Back</button>
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <div className='meal-name-box'>
          <label htmlFor='name'>Meal name:</label>
          <input
            type='text'
            placeholder='Enter meal name'
            {...register('name', { required: 'Please enter meal name' })}
          />
          {errors.name && (
            <span className='form-error'>{errors.name.message}</span>
          )}
        </div>
      </form>
    </section>
  )
}
