import React from 'react';
import '../App.css'
import './Schedule.css'
import TranslatableText from '../context/TranslatableText';

function Schedule() {
  return(
      <>      
        <div className='schedule-section' id="schedule"> 
        <div className='title'>
        <TranslatableText
             dictionary={{ english: "Schedule", russian: "Расписание марафона", kazakh: "Марафон кестесі" }}
        /> 
        </div> 
        <div className='subtitle'> 
            <TranslatableText
             dictionary={{ english: "Contest date: 7th of April", russian: "Дата соревнования: 7 марта", kazakh: "Жарыс күні: Наурыз 7-сі" }}
            /> 

        </div>          
        <div className='schedule-container'>
            <div className='schedule'>
                <div className='schedule-item'>
                     <div className='time'>
                        1 1:00 - 12:00
                     </div>
                     <div className='activity'>
                        <TranslatableText
                        dictionary={{ english: "Opening Ceremony", russian: "Церемония открытия", kazakh: "Ашылу салтанаты" }}
                        /> 
                     </div>
                </div>
                <div className='schedule-item'>
                    <div className='time'>
                         13:00 - 16:00
                     </div>
                    <div className='activity'>
                        <TranslatableText
                        dictionary={{ english: "Main contest", russian: "Основной контест", kazakh: "Негізгі контест" }}
                        />
                    </div>
                </div>
                <div className='schedule-item'>
                    <div className='time'>
                        17:00 - 18:30
                    </div>
                    <div className='activity'>
                        <TranslatableText
                          dictionary={{ english: "Networking", russian: "Нетворкинг", kazakh: "Нетворкинг" }}
                        />
                    </div>
                </div>
                <div className='schedule-item'>
                    <div className='time'>
                        19:00 -20:00
                    </div>
                    <div className='activity'>
                        <TranslatableText
                          dictionary={{ english: "Closing ceremony and announcement of the results", 
                                        russian: "Церемония закрытия и оглашение результатов", 
                                        kazakh: "Жабылу салтанаты және нәтижелерді жариялау" }}
                        />
                    </div>
                </div>
            </div>
        </div>
        </div>
      </>

  );
}

export default Schedule;
