import React from 'react';
import { useState, useEffect } from 'react';
// import { UilBars } from '@iconscout/react-unicons'

import './Navbar.css';

import LanguageConsumer from '../context/LanguageConsumer';
  import TranslatableText from '../context/TranslatableText';

function Navbar() {

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 768) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return(
    <>
      <div className='navbar-container'>
      <div className='menu-icon' onClick={handleClick}>
          <span><i class="uil uil-bars"></i></span>
        </div>
          <a href="#welcome" onClick={closeMobileMenu}><img src='../../wordlogo.svg' alt='logo' className='navbar-logo'></img></a>
        
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <a href="#about" className='nav-links' onClick={closeMobileMenu} >
              <TranslatableText
              dictionary={{ english: "About", russian: "Описание", kazakh: "Марафон туралы" }}
               />  
            </a>
          </li>
          
          <li className='nav-item'>
            <a href="#schedule" className='nav-links' onClick={closeMobileMenu}>
            <TranslatableText
              dictionary={{ english: "Schedule", russian: "Расписание", kazakh: "Кесте" }}
               /> 
            </a>
          </li>
          <li className='nav-item'>
            <a href="#sponsors" className='nav-links' onClick={closeMobileMenu}>
            <TranslatableText
              dictionary={{ english: "Sponsors", russian: "Спонсоры", kazakh: "Демеушілер" }}
               />
            </a>
          </li>
          <li className='nav-item'>
            <a href="#team" className='nav-links' onClick={closeMobileMenu}>
            <TranslatableText
              dictionary={{ english: "Our team", russian: "Наша команда", kazakh: "Біздің команда" }}
               />
            </a>
          </li>
          <li className='nav-item'>
            <a href="#faq" className='nav-links' onClick={closeMobileMenu}>
            <TranslatableText
              dictionary={{ english: "FAQ", russian: "Часто задаваемые вопросы", kazakh: "Сұрақ-жауап" }}
               />
            </a>
          </li>
          <li className='nav-links-mobile' onClick={closeMobileMenu} >
              More
          </li>
        </ul>

        {button && <button buttonStyle='btn--outline'>SIGN UP</button>}
        
         <LanguageConsumer>{({ updateLanguage }) => (
                                <select onChange={updateLanguage} className='languages'>
                                    <option value="english">EN</option>
                                    <option value="russian">RU</option>
                                    <option value="kazakh">KZ</option>
                                </select>
                        )}
        </LanguageConsumer>
      </div>
    </>  
  )
}

export default Navbar;
