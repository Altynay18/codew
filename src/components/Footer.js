import React from 'react';
import './Footer.css';

function Footer() {
  return(
    <>
    <nav className='footer'>
      <div className='footer-container'>
          <img src='../../wordlogo.svg' alt='logo' className='footer-logo'></img>
        <ul className='footer-menu'>
          <li className='footer-item'>
              <a href='https://github.com/Altynay18/codew' className='footer-links'>Source code and credits</a>
          </li>
          <li className='footer-item footer-links'>
             <a href='https://www.instagram.com/acmsc_nu/' ><img  className='icons' src='../../sm1.png' alt='sm'></img></a>
             <a href='https://t.me/nu_acm_w'><img  className='icons' src='../../sm2.png' alt='sm'></img></a>
             <a href='mailto:acmsc@nu.edu.kz'><img  className='icons' src='../../sm3.png' alt='sm'></img></a>
          </li>
        </ul>
      </div>
    </nav>
    </>  
  )
}

export default Footer;
