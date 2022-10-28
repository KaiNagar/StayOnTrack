import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom'
import { Home } from './views/Home'
import { Login } from './views/Login'
import { MealPage } from './views/MealPage'
import MealEdit from './views/MealEdit'
import './styles/style.scss'

export function App() {
  return (
    <Router>
      <div className='App'>
        <Link to='/'>Home</Link>|<Link to='/login'>Login</Link>
        <Link to='/meal'>Meals</Link>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/meal/edit/:id' element={<MealEdit />} />
          {/* <Route path="/meal/:id" element={<MealDetails />} /> */}
          <Route path='/meal' element={<MealPage />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
