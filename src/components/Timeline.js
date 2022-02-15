import React from 'react';
import '../App.css';
import './Timeline.css';
import TranslatableText from '../context/TranslatableText';

function Timeline() {
  return (
        <div>
            <section class="qualification section" id="timeline">
                <h2 class="section__title">
                <TranslatableText
                     dictionary={{ english: "Timeline", russian: "Процесс регистрации", kazakh: "Тіркелу барысы" }}
                 /> 
                </h2>

                <div class="qualification__container container">
                    <div class="qualification__sections">
                        <div class="qualification__content">
                            <div class="qualification__data">
                                <div>
                                    <h3 class="qualification__title">01. </h3>
                                    <span class="qualification__subtitle">
                                    <TranslatableText
                                        dictionary={{ english: "Registration", russian: "Регистрация", kazakh: "Тіркелу" }}
                                    />
                                    </span>
                                    <span class="qualification__calendar">
                                    <TranslatableText
                                        dictionary={{ english: "Fill the application form by 11:59 PM March 21, 2021", russian: "Заполните форму для регистрации до 21 марта 2022 года", kazakh: "Тіркелу формасын 2022 жылдың 21-ші наурызына дейін толтырыңыз" }}
                                    />
                                    </span>
                                </div>

                                <div>
                                    <span class="qualification__rounder"></span>
                                    <span class="qualification__line"></span>
                                </div>
                            </div>
                                 <div class="qualification__data">
                                     <div></div>
                                     <div>
                                        <span class="qualification__rounder"></span>
                                        <span class="qualification__line"></span>
                                    </div>

                                    <div>
                                        <h3 class="qualification__title">02.</h3>
                                        <span class="qualification__subtitle">
                                        <TranslatableText
                                            dictionary={{ english: "Hackerrank contest", russian: "Тест на платформе Hackerrank", kazakh: "Hackerrank платформасындағы тест" }}
                                        />    
                                        </span>
                                        <span class="qualification__calendar">                                
                                        <TranslatableText
                                            dictionary={{ english: "On 22nd of March you will receive the link to the HackerRank test, the results of which will determine you to one of the tracks: Novice/Experienced/Advanced. You will have one week to solve the contest. Solving it is a mandatory step to participate in codeW 2021. Applicants who will not complete it will be disqualified from participation.", 
                                            russian: "22 марта вы получите ссылку на HackerRank тест, по результатам которого вы будете распределены на один из уровней - Новичок / Средний / Продвинутый. На решение данного теста у вас будет одна неделя. Решение данного теста является обязательным условием для участия в codeW 2021. Кандидаты, не предпринявшие попытку решить его, будут отстранены от дальнейшего участия.", 
                                            kazakh: "Наурыздың 22-сі тіркелген поштаңызға НackerRank платформасындағы тестке сілтеме аласыз. Тест нәтижесі бойынша сіздің деңгейіңіз анықталады - бастауыш, орта не ілгерінді. Тестті орындауға 1 апта уақыт беріледі. Жіберілген тестті орындау codeW 2021 марафонына қатысу үшін міндетті қадам болып табылады. Тестті орындамаған үміткер ары қарай марафонға өткізілмейді." }}
                                        /> 
                                        </span>
                                    </div>
                                </div>

                            <div class="qualification__data">
                                <div>
                                    <h3 class="qualification__title">03.</h3>
                                    <span class="qualification__subtitle">
                                        <TranslatableText
                                            dictionary={{ english: "Qualification test results", russian: "Результаты теста", kazakh: "Тест нәтижелері" }}
                                        />
                                    </span>
                                    <span class="qualification__calendar">                                       
                                        <TranslatableText
                                            dictionary={{ english: " The results of the HackerRank will be sent to your email on 3rd of April.", 
                                                          russian: "Результаты теста на определение уровня будут отправлены на вашу электронную почту 3 апреля.", 
                                                          kazakh: "HackerRank платформасындағы тест нәтижелері сәуірдің 3-і күні сіздің электронды поштаңызға жіберіледі." }}
                                        /> 
                                    </span>
                                </div>

                                <div>
                                    <span class="qualification__rounder"></span>
                                    <span class="qualification__line"></span>
                                </div>
                            </div>

                                 <div class="qualification__data">
                                     <div></div>

                                     <div>
                                        <span class="qualification__rounder"></span>
                                        <span class="qualification__line"></span>

                                    </div>

                                    <div>
                                        <h3 class="qualification__title">04.</h3>
                                        <span class="qualification__subtitle">
                                            <TranslatableText
                                              dictionary={{ english: "Contest day", russian: "День соревнования", kazakh: "Жарыс күні" }}
                                            />    
                                        </span>
                                        <span class="qualification__calendar">
                                            <TranslatableText
                                              dictionary={{ english: "CodeW 2022  will take place on XX Month, 2022. Detailed schedule is below", 
                                                            russian: "CodeW 2022 состоится 7 марта 2022 года. Подробное расписание внизу ", 
                                                            kazakh: "CodeW марафоны 2022 жылдың 7-ші наурыз күні өткізіледі. Толық кесте төменде көрсетілген" }}
                                            />  
                                        </span>
                                    </div> 
                                </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    //   <div className='timeline-container section'>
    //       <div className='timeline-item'>
    //         <div>
    //             <div className='item-number'>
    //                 <p>01.</p>
    //             </div>
    //             <div className='item-content'>
    //                 <p className='item-title'>Registration</p>
    //                 <p className='description'>Fill the application form 
    //                     by 11:59 PM March 21, 2021</p>
    //             </div>
    //         </div>
    //             <div>
    //                 <span class="qualification__rounder"></span>
    //                 <span class="qualification__line"></span>
    //             </div>
    //       </div>
    //       <div className='timeline-item'>
    //             <div>
    //                 <span class="qualification__rounder"></span>
    //                 <span class="qualification__line"></span>
    //             </div>
    //            <div> 
    //             <div className='item-number'>
    //                 <p>02.</p>
    //             </div>
    //             <div className='item-content'>
    //                 <p className='item-title'>HackerRank contest</p>
    //                 <p className='description'>On 22nd of March you will receive the
    //                    link to the HackerRank test, the results
    //                    of which will determine you to one of the tracks:
    //                    Novice/Experienced/Advanced. 
    //                    You will have one week to solve the contest.</p>
    //             </div>
    //            </div>
    //       </div>
    //       <div className='timeline-item'>
    //           <div>
    //             <div className='item-number'>
    //                 <p>03.</p>
    //             </div>
    //             <div className='item-content'>
    //                 <p className='item-title'>Qualification test results</p>
    //                 <p className='description'>The results of the HackerRank 
    //                     will be sent to your email 
    //                     on 3rd of April.</p>
    //             </div>
    //             </div>
    //             <div>
    //                  <span class="qualification__rounder"></span>
    //                  <span class="qualification__line"></span>
    //             </div>
    //       </div>
    //       <div className='timeline-item'>
    //             <div>
    //                 <span class="qualification__rounder"></span>
    //             </div>
    //             <div>
    //             <div className='item-number'>
    //                 <p>04.</p>
    //             </div>
    //             <div className='item-content'>
    //                 <p className='item-title'>Contest day</p>
    //                 <p className='description'>CodeW  will take place
    //                     on XX Month, 2022.
    //                     Detailed schedule is below</p>
    //             </div>
    //             </div>
    //       </div>

    //   </div>
  );
}

export default Timeline;
