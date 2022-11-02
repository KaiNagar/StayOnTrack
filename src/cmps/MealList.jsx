import React from 'react'
import MealPreview from './MealPreview'

export default function MealList({ meals,onRemoveMeal }) {
  return (
    <div className='meal-list'>
      {meals.map((m,idx) => (
        <MealPreview key={m._id} meal={m} idx={idx} onRemoveMeal={onRemoveMeal} />
      ))}
    </div>
  )
}
