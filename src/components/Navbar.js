import React from 'react';
import './Navbar.css';

import LanguageConsumer from '../context/LanguageConsumer';
  import TranslatableText from '../context/TranslatableText';

function Navbar() {
  return(
    <>
      <div className='navbar-container'>
          <img src='../../wordlogo.svg' alt='logo' className='navbar-logo'></img>
        <ul className='nav-menu'>
          <li className='nav-item'>
            <a href="#about" className='nav-links' >
              <TranslatableText
              dictionary={{ english: "About", russian: "Описание", kazakh: "Марафон туралы" }}
               />  
            </a>
          </li>
          
          <li className='nav-item'>
            <a href="#schedule" className='nav-links'>
            <TranslatableText
              dictionary={{ english: "Schedule", russian: "Расписание", kazakh: "Кесте" }}
               /> 
            </a>
          </li>
          <li className='nav-item'>
            <a href="#sponsors" className='nav-links'>
            <TranslatableText
              dictionary={{ english: "Sponsors", russian: "Спонсоры", kazakh: "Демеушілер" }}
               />
            </a>
          </li>
          <li className='nav-item'>
            <a href="#team" className='nav-links'>
            <TranslatableText
              dictionary={{ english: "Our team", russian: "Наша команда", kazakh: "Біздің команда" }}
               />
            </a>
          </li>
          <li className='nav-item'>
            <a href="#faq" className='nav-links'>
            <TranslatableText
              dictionary={{ english: "FAQ", russian: "Часто задаваемые вопросы", kazakh: "Сұрақ-жауап" }}
               />
            </a>
          </li>
        </ul>

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
