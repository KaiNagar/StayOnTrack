import { Component } from "react";
import {mealService} from '../services/mealService'
import MealList from "../cmps/MealList";
import { Link } from "react-router-dom";


export class MealPage extends Component {
    state = {}
    componentDidMount() {}
    componentWillUnmount() {}
    render() {
        const meals = mealService.getMeals()
      return (
        <section className='home-page'>
          <h1>this is meal page</h1>
          <Link to='/meal/edit'>
          Add Meal
          </Link>
          <div className="meal-list">
            
                <MealList  meals={meals}/>
           
          </div>
          
        </section>
      )
    }
}