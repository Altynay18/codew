import React from 'react';
import '../App.css';
import './Sponsors.css';
import TranslatableText from '../context/TranslatableText';

function Sponsors() {
  return(
    <div className='sponsors-container' id="sponsors">
        <div className='sponsors-title'>
        <TranslatableText
             dictionary={{ english: "Meet our sponsors ", russian: "Наши спонсоры", kazakh: "Біздің демеушілер" }}
        /> 
        </div>
        <div className='companies-logo'>
            <div className='logo'>
                <img src="../../company1.png" alt='company logo'></img>
            </div>
            <div className='logo'>
                <img src="../../company2.png" alt='company logo'></img>
            </div>
            <div className='logo'>
                <img src="../../company3.png" alt='company logo'></img>
            </div>
            <div className='logo'>
                <img src="../../company4.png" alt='company logo'></img>
            </div>
        </div>
    </div>
   
  );
}

export default Sponsors;
