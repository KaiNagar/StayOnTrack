import { Component } from 'react'
import { mealService } from '../services/mealService'
import MealList from '../cmps/MealList'
import { Link } from 'react-router-dom'
import { MealFilter } from '../cmps/MealFilter'
// import { connect } from 'react-redux'
// import { updateMeal } from '../store/actions/mealActions'




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
    // console.log(this.props);
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


// const mapStateToProps = (storeState) => {
//   return {
//     meals: storeState.mealModule.meals,
//   }
// }

// const mapDispatchToProps = {
//   updateMeal,
// }

// export const MealPage = connect(mapStateToProps, mapDispatchToProps)(_MealPage)

