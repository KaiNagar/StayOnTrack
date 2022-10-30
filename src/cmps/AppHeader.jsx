import React from 'react'
import { HashRouter as Router, Route, Routes, Link,NavLink } from 'react-router-dom'

export default function AppHeader() {
  return (
    <section className='app-header flex space-between container'>
        <div className="logo">
            Stay On Track
        </div>
      <div className='nav-bar'>
        <NavLink to='/'>Home</NavLink>|
        <NavLink to='/meal'>Meals</NavLink>|
        <NavLink to='/login'>Login</NavLink>
      </div>
    </section>
    
  )
}
