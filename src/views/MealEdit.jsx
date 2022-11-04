import { Component, useState } from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { mealService } from '../services/mealService'
import { updateMeal } from '../store/actions/mealActions'

function _MealEdit(props) {
  const [meal, setMeal] = useState({})
  const [title, setTitle] = useState('')
  const params = useParams()
  useEffect(() => {
    loadTitle()
    loadMeal()
  }, [params.id])
  const loadTitle = () => {
    const mealId = params.id
    const currTitle = mealId ? 'Edit Meal' : 'Add Meal'
    setTitle(currTitle)
  }
  const loadMeal = async () => {
    const mealId = params.id
    const currMeal = mealId
      ? await mealService.getById(mealId)
      : mealService.getEmptyMeal()
    setMeal(currMeal)
  }
  if (!meal) return <div>Loading...</div>
  return (
    <section className='meal-edit'>
      <h1>{title}</h1>
      <h1>{meal.name}</h1>
    </section>
  )
}

const mapStateToProps = (storeState) => {
  return {
    meals: storeState.mealModule.meals,
  }
}

const mapDispatchToProps = {
  updateMeal,
}

export const MealEdit = connect(mapStateToProps, mapDispatchToProps)(_MealEdit)
