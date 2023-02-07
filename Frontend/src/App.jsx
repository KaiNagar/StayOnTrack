import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import './assets/styles/style.scss'

import { Home } from './pages/Home'
import { Login } from './pages/Login'

import { AppHeader } from './cmps/AppHeader'
import { AppFooter } from './cmps/AppFooter'
import { MealIndex } from './pages/MealIndex'
import { MealEdit } from './pages/MealEdit'
import { MealDetails } from './pages/MealDetails'

export const App = () => {
  return (
    <Router>
      <div className='App'>
        <AppHeader />
        <div className='main-container'>
          <div className='main container'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/meal' element={<MealIndex />} />
              <Route path='/meal/edit' element={<MealEdit />} />
              <Route path='/meal/edit/:mealId' element={<MealEdit />} />
              <Route path='/meal/:mealId' element={<MealDetails />} />
            </Routes>
          </div>
        </div>
        <AppFooter />
      </div>
    </Router>
  )
}
