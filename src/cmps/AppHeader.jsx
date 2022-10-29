import React from 'react'
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom'

export default function AppHeader() {
  return (
    <section className='app-header flex space-between container'>
        <div className="logo">
            Stay On Track
        </div>
      <div className='nav-bar'>
        <Link to='/'>Home</Link>|
        <Link to='/meal'>Meals</Link>|
        <Link to='/login'>Login</Link>
      </div>
    </section>
    
  )
}
