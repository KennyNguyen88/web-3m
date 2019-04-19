import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = (props) => {
  return (
    <nav className="sidebar-container">
      <ul className="sidebar-list">
          <li className='sidebar-item'>
              <Link to='/'>Dashboard</Link>
          </li>
          <li className='sidebar-item'>
              <Link to='/books'>Books</Link>
          </li>
          <li className='sidebar-item'>
              <Link to='/tshirts'>Tshirt</Link>
          </li>
      </ul>
    </nav>
  )
}

export default Sidebar;
