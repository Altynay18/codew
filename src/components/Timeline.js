import React from 'react';
import '../App.css';
import './Timeline.css';
import TranslatableText from '../context/TranslatableText';

function Timeline() {
  return (
        <div>
            <section className="qualification section" id="timeline">
                <h2 className="section__title">
                    <TranslatableText
                        dictionary={{ english: "Timeline", russian: "Процесс регистрации", kazakh: "Тіркелу барысы" }}
                    /> 
                </h2>

                <div className="qualification__container container">
                    <div className="qualification__sections">
                        <div className="qualification__content">
                            <div className="qualification__data">
                                <div>
                                    <h3 className="qualification__title">01. </h3>
                                    <span className="qualification__subtitle">
                                    <TranslatableText
                                        dictionary={{ english: "Registration", russian: "Регистрация", kazakh: "Тіркелу" }}
                                    />
                                    </span>
                                    <span className="qualification__calendar">
                                    <TranslatableText
                                        dictionary={{ english: "Fill the application form by 11:59 PM February 27, 2022", russian: "Заполните форму для регистрации до 27 февраля 2022 года", kazakh: "Тіркелу формасын 2022 жылдың 27-ші ақпанына дейін толтырыңыз" }}
                                    />
                                    </span>
                                </div>

                                <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>
                            </div>
                                 <div className="qualification__data">
                                     <div></div>
                                     <div>
                                        <span className="qualification__rounder"></span>
                                        <span className="qualification__line"></span>
                                    </div>

                                    <div>
                                        <h3 className="qualification__title">02.</h3>
                                        <span className="qualification__subtitle">
                                        <TranslatableText
                                            dictionary={{ english: "Hackerrank contest", russian: "Тест на платформе Hackerrank", kazakh: "Hackerrank платформасындағы тест" }}
                                        />    
                                        </span>
                                        <span className="qualification__calendar">                                
                                        <TranslatableText
                                            dictionary={{ english: "On 28th of February you will receive the link to the HackerRank test, the results of which will determine you to one of the tracks: Novice/Experienced/Advanced. You will have 4 days to solve the contest. Solving it is a mandatory step to participate in codeW 2022. Applicants who will not complete it will be disqualified from participation.", 
                                            russian: "28 февраля вы получите ссылку на HackerRank тест, по результатам которого вы будете распределены на один из уровней - Новичок / Средний / Продвинутый. На решение данного теста у вас будет 4 дня. Решение данного теста является обязательным условием для участия в codeW 2022. Кандидаты, не предпринявшие попытку решить его, будут отстранены от дальнейшего участия.", 
                                            kazakh: "Ақпанның 28-сі тіркелген поштаңызға НackerRank платформасындағы тестке сілтеме аласыз. Тест нәтижесі бойынша сіздің деңгейіңіз анықталады - бастауыш, орта не ілгерінді. Тестті орындауға 1 апта уақыт беріледі. Жіберілген тестті орындау codeW 2022 марафонына қатысу үшін міндетті қадам болып табылады. Тестті орындамаған үміткер ары қарай марафонға өткізілмейді." }}
                                        /> 
                                        </span>
                                    </div>
                                </div>

                            <div className="qualification__data">
                                <div>
                                    <h3 className="qualification__title">03.</h3>
                                    <span className="qualification__subtitle">
                                        <TranslatableText
                                            dictionary={{ english: "Qualification test results", russian: "Результаты теста", kazakh: "Тест нәтижелері" }}
                                        />
                                    </span>
                                    <span className="qualification__calendar">                                       
                                        <TranslatableText
                                            dictionary={{ english: " The results of the HackerRank will be sent to your email on 4th or 5th of March.", 
                                                          russian: "Результаты теста на определение уровня будут отправлены на вашу электронную почту 4 и 5 марта.", 
                                                          kazakh: "HackerRank платформасындағы тест нәтижелері ақпанның 4-і және 5-і күні сіздің электронды поштаңызға жіберіледі." }}
                                        /> 
                                    </span>
                                </div>

                                <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>
                            </div>

                                 <div className="qualification__data">
                                     <div></div>

                                     <div>
                                        <span className="qualification__rounder"></span>
                                        <span className="qualification__line"></span>

                                    </div>

                                    <div>
                                        <h3 className="qualification__title">04.</h3>
                                        <span className="qualification__subtitle">
                                            <TranslatableText
                                              dictionary={{ english: "Contest day", russian: "День соревнования", kazakh: "Жарыс күні" }}
                                            />    
                                        </span>
                                        <span className="qualification__calendar">
                                            <TranslatableText
                                              dictionary={{ english: "CodeW 2022  will take place on 7th of March, 2022. Detailed schedule is below", 
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
  );
}

export default Timeline;
