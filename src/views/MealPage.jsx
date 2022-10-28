import { Component } from "react";
import {mealService} from '../services/mealService'
import MealList from "../cmps/MealList";


export class MealPage extends Component {
    state = {}
    componentDidMount() {}
    componentWillUnmount() {}
    render() {
        const meals = mealService.getMeals()
      return (
        <section className='home-page'>
          <h1>this is meal page</h1>
          <div className="meal-list">
            
                <MealList  meals={meals}/>
           
          </div>
          
        </section>
      )
    }
}