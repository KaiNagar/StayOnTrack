import { Component, useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { mealService } from '../services/mealService'

// export class MealEdit extends Component {
//   state = {
//     meal: null,
//   }
//   componentDidMount() {
//     this.loadMeal()
//     // const meal = id ? await mealService.getById(id) : mealService.getEmptyMeal()
//     // this.setState({meal})
//   }
//   loadMeal = () => {
//     console.log(this.props)
//   }
//   render() {
//     const { meal } = this.state
//     return <section className='meal-edit'>this is meal details</section>
//   }
// }

// export default function MealEdit(props) {
//   console.log(props)
//   return <section></section>
// }

export default function MealEdit() {
  const [meal, setMeal] = useState(null)
  const params = useParams()
  useEffect(() => {
    loadMeal()
  }, [params.id])

  const loadMeal = async () => {
    const mealId = params.id
    const meal = await mealService.getById(mealId)
    console.log(meal);
    setMeal(meal)
  }
  return <section className='meal-edit'></section>
}
