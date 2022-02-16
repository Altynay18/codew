import React from 'react';
import './FaqUpd.css'
// import Accordion from './Accordion';
// import { accordionData } from './utils/content';
// import TranslatableText from '../context/TranslatableText';
function FaqUpd() {

  return (
     <div className='faq' id="faq">
         <h1 className='faq-title'>Frequently asked questions:</h1>
        <div className='faq-container'>
            <div className='column1'>
                <div className='faq-item'>
                    <h3 className='faq-quesion'>Who can participate ? </h3>
                    <p className='faq-answer'>Everyone of age 16 to 25 who identify themselves female is welcome to participate. You don’t need to be a Nazarbayev University student. </p>
                </div>
                <div className='faq-item'>
                    <h3 className='faq-quesion'>Can I participate if I am new to programming ?</h3>
                    <p className='faq-answer'>Yes, we encourage everyone interested in programming to join us. All you need to know is the basics of at least one Object-oriented programming language. There will be three tracks depending on your level: novice, intermediate, experienced. Your level will be determined according to the results of qualifier test on HackerRank.</p>
                </div>
                <div className='faq-item'>
                    <h3 className='faq-quesion'>Where will codeW be held ?</h3>
                    <p className='faq-answer'>This year codeW will be conducted in a partially offline format. Contestants residing in Nur-Sultan can come to AstanaHub, from where we will be streaming our event(number of seats is limited). Other participants can join us online.</p>
                </div>
                <div className='faq-item'>
                    <h3 className='faq-quesion'>Is it free ?</h3>
                    <p className='faq-answer'>Yes, it is absolutely free.</p>
                </div>
            </div>

            <div className='column2'>
                <div className='faq-item'>
                    <h3 className='faq-quesion'>Do I have to know English ?</h3>
                    <p className='faq-answer'>No, you don’t have to. codeW will be held in three different languages: English, Kazakh, and Russian. All tasks and materials from workshops will be translated into Russian and Kazakh languages.</p>
                </div>
                <div className='faq-item'>
                    <h3 className='faq-quesion'>How do I know which track is suitable for me?</h3>
                    <p className='faq-answer'>If you got selected, you will receive a link to the preliminary challenge that will identify your level and we will match you to a suitable track.</p>
                </div>
                <div className='faq-item'>
                    <h3 className='faq-quesion'>What programming languages are accepted in the contest ?</h3>
                    <p className='faq-answer'>The contest will be held using a special platform where all commonly used programming languages are supported (e.g. Java, Python, C++ but not Prolog, OCaml, etc.)</p>
                </div>
                
                <div className='faq-item'>
                    <h3 className='faq-quesion'>Can I participate if I am new to programming ?</h3>
                    <p className='faq-answer'>Yes, we encourage everyone interested in programming to join us. All you need to know is the basics of at least one Object-oriented programming language. There will be three tracks depending on your level: novice, intermediate, experienced. Your level will be determined according to the results of qualifier test on HackerRank.</p>
                </div>
            </div>
        </div>
   </div>
  );
}

export default FaqUpd;
