import React from 'react';
import '../App.css';
import './About.css';

// import LanguageConsumer from '../context/LanguageConsumer';
import TranslatableText from '../context/TranslatableText';

function About() {
  return (
      <div className='about-container' id="about">
          <div className='about-text'>
             <h3>
             <TranslatableText
                    dictionary={{ english: "About ", russian: "Описание", kazakh: "Марафон туралы" }}
               />  
               </h3> 
             <p>
              <TranslatableText
                    dictionary={{ english: "The first and the only 3 hour coding contest for females in Kazakhstan, which is held in English, Russian and Kazakh! ", 
                                  russian: "Первый и единственный трехчасовой марафон по программированию для девушек в Казахстане, который проводится на английском, русском и казахском языках!", 
                                  kazakh: "Қазақстанда ағылшын, орыс және қазақ тілінде өткізілетін қыздарға арналған бірінші 3 сағаттық бағдарламалау жарысы!" }}
               /> 
               </p> 
                
            <div className='about-eligibility'>
                <p>
                <TranslatableText
                    dictionary={{ english: "codeW 2022 is open to women who: ", russian: " Марафон codeW 2022 приглашает: ", kazakh: "codeW 2022 марафоны:" }}
               />
                </p>
                <ul>
                    <li className='e-item'>
                    <TranslatableText
                    dictionary={{ english: "- are in the age between 16 to 25 ", russian: "- в возрасте от 16 до 25 лет", kazakh: "- жасы 16-25 аралығындағы" }}
               />
               </li>
                    <li className='e-item'>
                    <TranslatableText
                    dictionary={{ english: "- are citizens of Kazakhstan", russian: "- являются гражданками Республики Казахстан", kazakh: "- Қазақстан азаматтығына ие" }}
               /></li>
                    <li className='e-item'>
                        <TranslatableText
                    dictionary={{ english: "- are highly motivated to meet a community of wonderful and talented women! ", 
                                  russian: "- мотивированы развиваться и готовы встретиться с сообществом талантливых девушек!", 
                                  kazakh: "- дарынды қыздар қауымымен танысуға дайын қыздарды қатысуға шақырады." }}
               />
               </li>
                </ul>
                
                
            </div>
             
          </div>

          <div className='about-gallery'>
               <img src='../../about.png' alt='coding'></img>
              {/* <div className='gallery-container'>
                <div className='gallery-item'>
                     <img src='../../about1.png' alt='gallery item'></img>
                </div>
                <div className='gallery-item'>
                     <img src='../../about2.png' alt='gallery item'></img>
                </div>
                <div className='gallery-item'>
                     <img src='../../about3.png' alt='gallery item'></img>
                </div>
                <div className='gallery-item'>
                     <img src='../../about4.png' alt='gallery item'></img>
                </div>
                <div className='gallery-item'>
                     <img src='../../about5.png' alt='gallery item'></img>
                </div>
                <div className='gallery-item'>
                     <img src='../../about6.png' alt='gallery item'></img>
                </div>
                
              </div> */}
               


          </div>
      </div>
  );
}

export default About;
