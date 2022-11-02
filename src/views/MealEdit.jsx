import { Component, useState } from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { mealService } from '../services/mealService'
import { updateMeal } from '../store/actions/mealActions'

// export class _MealEdit extends Component {
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

function _MealEdit(props) {
  const [meal, setMeal] = useState(null)
  const params = useParams()
  useEffect(() => {
    loadMeal()
  }, [params.id])

  const loadMeal = async () => {
    const mealId = params.id
    const meal = await mealService.getById(mealId)
    console.log(meal)
    setMeal(meal)
}
// console.log(props);
  return <section className='meal-edit'>
 
  </section>
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
