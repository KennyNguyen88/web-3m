import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = (props) => {
  return (
    <nav className="sidebar-container">
      <ul>
          <li>
              <Link to='/' className=''>Test 01</Link>
          </li>
          <li>
              <Link to='/' className=''>Test 02</Link>
          </li>
      </ul>
    </nav>
  )
}

export default Sidebar;

// const mapStateToProps = (state) => {
//   // console.log(state);
//   return{
//     auth: state.firebase.auth,
//     profile: state.firebase.profile
//   }
// }
//
// export default connect(mapStateToProps)(Navbar)
