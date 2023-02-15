import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export const AppHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const onToggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState)
    console.log(isMenuOpen)
  }

  return (
    <section className='app-header-constainer '>
      <div className='app-header container flex align-center space-between'>
        <div
          className={`tablet-meanu-screen ${isMenuOpen ? 'open' : ''}`}
          onClick={onToggleMenu}
        ></div>

        <div className='logo flex align-center'>
          <span className='title'>StayOnTrack</span>
          <img
            src='https://res.cloudinary.com/db9bey3ot/image/upload/v1675615137/StayOnTrackFavicon_s04l0g.png'
            alt=''
          />
        </div>
        <div className='meanu-btn' onClick={onToggleMenu}>
          +
        </div>
        <div className={`header-nav flex align-center ${isMenuOpen ? 'open' : ''}`}>
          <NavLink className='header-link' to='/'>
            Home
          </NavLink>
          <NavLink className='header-link' to='/login'>
            Login
          </NavLink>
          <NavLink className='header-link' to='/meal'>
            Meals
          </NavLink>
          shop
        </div>
      </div>
    </section>
  )
}
