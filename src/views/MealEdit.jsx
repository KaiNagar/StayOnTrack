import { Component } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { mealService } from '../services/mealService'

//  saveMeal = () =>{
//     console.log('bla');
// }

export class MealEdit extends Component {
  state = {
    meal: {},
  }
  async componentDidMount() {
    const { id } = this.props.match.params
    console.log(id);
    // const meal = id ? await mealService.getById(id) : mealService.getEmptyMeal()
    // this.setState({meal})
  }
  render() {
    const {meal} = this.state
    return <section className='meal-edit'>{JSON.stringify(meal)}</section>
  }
}
