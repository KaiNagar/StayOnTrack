import { Link } from "react-router-dom";


export default function MealPreview({meal}){
    return (
        <Link to={`/meal/edit/${meal._id}`} className="meal-preview">
            <h1>1</h1>
            <h1>{meal.name}</h1>
            <h1>120p 70c 6f</h1>   
            <h1>X</h1>   
        </Link>
    )
}