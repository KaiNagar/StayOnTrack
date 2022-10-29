import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom'
import { Home } from './views/Home'
import { Login } from './views/Login'
import { MealPage } from './views/MealPage'
import  AppHeader  from './cmps/AppHeader'
import { MealEdit } from './views/MealEdit'
import './styles/style.scss'

export function App() {
  return (
    <Router>
      <div className='App'>
        <header className='app-header-container'>
          <AppHeader />
        </header>

        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/meal/edit/:id' element={<MealEdit />} />
          <Route path='/meal/edit' element={<MealEdit />} />
          {/* <Route path="/meal/:id" element={<MealDetails />} /> */}
          <Route path='/meal' element={<MealPage />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
