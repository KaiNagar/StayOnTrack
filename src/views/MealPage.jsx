import { Component } from 'react'
import { mealService } from '../services/mealService'
import MealList from '../cmps/MealList'
import { Link } from 'react-router-dom'
import { MealFilter } from '../cmps/MealFilter'

export class MealPage extends Component {
  state = {
    meals: [],
  }
  async componentDidMount() {
    const meals = await mealService.query()
    this.setState({ meals })
  }
  componentWillUnmount() {}

  onChangeFilter = (filterBy) => {
    // console.log(filterBy)
    // const meals = await mealService.query(filterBy)
    // console.log(meals);
    // this.setState({meals})
    // this.props.setFilterBy(filterBy)
    // this.props.loadContacts()
  }

  render() {
    const { meals } = this.state
    return (
      <section className='meal-page container'>
        <h1>this is meal page</h1>
        <Link to='/meal/edit'>Add Meal</Link>

        <MealFilter onChangeFilter={this.onChangeFilter} />

        <MealList meals={meals} />
      </section>
    )
  }
}
