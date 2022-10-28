import { useParams } from 'react-router-dom'

export default function MealEdit() {
    const params = useParams()
    console.log(params)
  return <section className='meal-edit'></section>
}
