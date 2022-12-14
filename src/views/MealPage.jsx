import { Component } from 'react'
import { mealService } from '../services/mealService'
import MealList from '../cmps/MealList'
import { Link } from 'react-router-dom'
import { MealFilter } from '../cmps/MealFilter'
import { connect } from 'react-redux'
import { loadMeals,removeMeal,setFilterBy } from '../store/actions/mealActions'

export class _MealPage extends Component {
  componentDidMount() {
    this.props.loadMeals()
  }
  componentWillUnmount() {}

  onChangeFilter = (filterBy) => {
    this.props.setFilterBy(filterBy)
    this.props.loadMeals()
  }

  onRemoveMeal = (ev,mealId)=>{
    ev.preventDefault()
    this.props.removeMeal(mealId)
  }

  render() {
    const { meals } = this.props
    const {onChangeFilter,onRemoveMeal} = this
    if (!meals) return <div>Loading...</div>
    return (
      <section className='meal-page container'>
        <h1>this is meal page</h1>
        <Link to='/meal/edit'>Add Meal</Link>

        <MealFilter onChangeFilter={onChangeFilter} />

        <MealList meals={meals} onRemoveMeal={onRemoveMeal} />
      </section>
    )
  }
}

const mapStateToProps = (storeState) => {
  return {
    meals: storeState.mealModule.meals,
  }
}

const mapDispatchToProps = {
  loadMeals,
  removeMeal,
  setFilterBy
}

export const MealPage = connect(mapStateToProps, mapDispatchToProps)(_MealPage)
