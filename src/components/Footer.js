import React from 'react';
import {Link} from 'react-router-dom';
import './Footer.css';

function Footer() {
  return(
    <>
    <nav className='navbar'>
      <div className='navbar-container'>
        <Link to='/' className='navbar-logo'>
          <img src='../../codewlogo.png' alt='logo'></img>
        </Link>
        <ul className='nav-menu'>
          <li className='nav-item'>
            <Link to='/' className='nav-links'>
              Source code
            </Link>
          </li>
          <li className='nav-item nav-links'>
            
             <a href='https://www.instagram.com/acmsc_nu/' target="_blank"><img  className='icons' src='../../sm1.png' alt='sm'></img></a>
             <a href='https://web.telegram.org/z/#-1231208125' target="_blank"><img  className='icons' src='../../sm2.png' alt='sm'></img></a>
             <a href='mailto:acmsc@nu.edu.kz' target="_blank"><img  className='icons' src='../../sm3.png' alt='sm'></img></a>
          </li>
          
        </ul>

      </div>
    </nav>
    </>  
  )
}

export default Footer;
