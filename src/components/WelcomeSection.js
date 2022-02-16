import React from 'react';
import '../App.css';
// import {Button} from './Button';
import './WelcomeSection.css';

import TranslatableText from '../context/TranslatableText';
function WelcomeSection(){
    return(
        <div className='welcome-container' id="welcome">   
            <div className='welcome-description'>
                <div className='welcome-title'>
                    {/* <img src="../../decor.png" alt="decor"></img> */}
                    <h3>
                    <TranslatableText
                            dictionary={{english: "Annual Coding Marathon for Females",
                                         russian: "Ежегодное cоревнование по программированию среди девушек",
                                         kazakh: "Жыл сайын өтетін қыздарға арналған бағдарламалау марафоны" }}
                        /> 
                    </h3>
                    <p>
                    <TranslatableText
                            dictionary={{english: "March 7, 2022",
                                         russian: "7 марта, 2022",
                                         kazakh: "7 наурыз, 2022" }}
                    />
                    </p>
                </div>
                <div className='welcome-btns'>
                    <a href="#registration">
                    <button 
                    className='btn'
                    // buttonStyle='btn--primary'
                    >
                        <TranslatableText
                    dictionary={{ english: "Register ", russian: "Регистрация", kazakh: "Тіркелу" }}
                        /> 
                    </button></a>
                    <a href="#about"><button 
                    className='btn'
                    // buttonStyle='btn--outline'
                    >
                       <TranslatableText
                    dictionary={{ english: "More ", russian: "Узнать еще", kazakh: "Толық ақпарат" }}
                        /> 
                    </button>
                    </a>
                </div>
            </div>
            <div className='welcome-illustration'>
            <img src="../../vovan.svg" alt="illustration"></img>
            </div>
        </div>
    );
}

export default WelcomeSection;

