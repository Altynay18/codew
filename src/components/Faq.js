import React from 'react';
import './Faq.css'
import Accordion from './Accordion';
import { accordionData } from './utils/content';
import TranslatableText from '../context/TranslatableText';
function Faq() {
     
      //  const { title, content } = accordionData;

  return (
     <div className='faq' id="faq">
     <h1>
     <TranslatableText
          dictionary={{ english: "Frequently Asked Questions ", russian: "Часто задаваемые вопросы", kazakh: "Жиі қойылатын сұрақтар" }}
      /> 
     </h1>
     <div className="accordion">
       {accordionData.map(({ title, content }) => (
         <Accordion title={title} content={content} />
       ))}
     </div>
   </div>
  );
}

export default Faq;
