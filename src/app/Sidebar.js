import React from 'react';
import {Link} from 'react-router-dom';
import logoWhite from "../assets/images/logo-white.svg";
import { faBook, faClipboardList, faTshirt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Sidebar = (props) => {
    return (
        <nav className="sidebar-container">
            <div className="logo-container">
                <img src={logoWhite} alt="logo" className="img-fluid"/>
            </div>
            <ul className="sidebar-list">
                <li className='sidebar-item'>
                    <Link to='/' >Dashboard <FontAwesomeIcon icon={faClipboardList}/></Link>
                </li>
                <li className='sidebar-item'>
                    <Link to='/books'>Books <FontAwesomeIcon icon={faBook}/> </Link>
                </li>
                <li className='sidebar-item'>
                    <Link to='/tshirts'>Tshirt <FontAwesomeIcon icon={faTshirt}/></Link>
                </li>
            </ul>
        </nav>
    )
}

export default Sidebar;
