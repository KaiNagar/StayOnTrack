import React from 'react'
import MealPreview from './MealPreview'

export default function MealList({ meals }) {
  return (
    <div className='meal-list'>
      {meals.map((m) => (
        <MealPreview key={m._id} meal={m} />
      ))}
    </div>
  )
}
