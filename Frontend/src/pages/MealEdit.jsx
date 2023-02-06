import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { mealService } from '../services/meal.service'
import { saveMeal } from '../store/actions/mealActions'

export const MealEdit = () => {
  const { ingredients } = useSelector((state) => state.ingredientModule)

  const navigate = useNavigate()
  const { mealId } = useParams()

  const [mealToEdit, setMealToEdit] = useState(mealService.getEmptyMeal())
  const [carbSource, setCarbSource] = useState('')

  useEffect(() => {
    if (mealId) loadMeal()
  }, [])

  const loadMeal = async () => {
    const currentMeal = await mealService.getMealById(mealId)
    setMealToEdit({ ...currentMeal })
  }

  const getIngName = (name) => {
    const ingNameSplited = name.split('-')
    let ingName = ''
    ingNameSplited.map((partName, idx) => {
      if (idx > 0) ingName += ' '
      ingName += partName.charAt(0).toUpperCase() + partName.slice(1)
    })
    return ingName
  }

  const handleChange = ({ target }) => {
    console.log(target.value)
  }
  const onPickCarbSource = ({ target }) => {
    const { name, value } = target
    setCarbSource(value)
  }

  const onSubmitForm = (values) => {
    saveMeal(values)
    navigate(-1)
  }

  const editSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(20, 'Too Long!')
      .required('Required'),
    // carb: Yup.string().required('Must pick a carb source'),
  })

  return (
    <section className='meal-edit'>
      <button onClick={() => navigate(-1)}>Back</button>
      <Formik
        initialValues={{ ...mealToEdit }}
        enableReinitialize
        validationSchema={editSchema}
        onSubmit={onSubmitForm}
      >
        {({ errors, touched }) => (
          <Form className='formik flex column justify-center align-center'>
            <label htmlFor='name'>
              Meal name:
              <Field
                name='name'
                id='name'
                value={mealToEdit.name}
                placeholder="Meal's name"
              />
            </label>
            {errors.name && touched.name ? <span>{errors.name}</span> : null}

            <button className='btn' type='submit'>
              Save
            </button>
          </Form>
        )}
      </Formik>
    </section>
  )
}
