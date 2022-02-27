import React from 'react';
 import './Team.css';
import TranslatableText from '../context/TranslatableText';

function Team() {
  return (
    <div className='team-container' id="team">
        <div className='team-title'>
        <TranslatableText
             dictionary={{ english: "Who did it all?", russian: "Наша команда", kazakh: "Біздің команда" }}
        /> 
        </div>

        <div className='team-info'>
            <div className='team-description'>
                <TranslatableText
                     dictionary={{ english: "NU ACM-W SC is the first Kazakhstani branch of the largest international organization which aims to provide social and professional support for women in computer technology, computer science, and engineering, as well as to facilitate their technical growth by organizing different activities.", 
                     russian: "NU ACM-W SC - это первая Казахстанская ветвь самой большой интернациональной организации, которая нацелена на оказание социальной и профессиональной поддержки женщинам в области компьютерных технологий, информатики и инженерии, а также содействие их техническому росту путем организации различных видов деятельности.", 
                     kazakh: "NU ACM-W SC компьютерлік технологиялар, информатика және инженерия саласында әйелдерге әлеуметтік және кәсіби қолдау көрсетуге, сондай-ақ, әртүрлі қызмет түрлерін ұйымдастыру жолымен олардың техникалық дамуына жәрдемдесуге бағытталған ұйым." }}
                /> 

                <div className='team-social'>
                     <TranslatableText
                        dictionary={{ english: "Follow us: ", russian: "Следите за новостями:", kazakh: "Бізге тіркеліңіз:" }}
                    /> 
                </div>
                <div>
                    <a href='https://www.instagram.com/acmsc_nu/'><img  className='icons' src='../../sm1.png' alt='sm'></img></a>
                    <a href='https://t.me/nu_acm_w' ><img  className='icons' src='../../sm2.png' alt='sm'></img></a>
                    <a href='mailto:acmsc@nu.edu.kz'><img  className='icons' src='../../sm3.png' alt='sm'></img></a>
                </div>
            </div>
            

            <div className='team-photo'>
                <img src='../../team.jpg' alt='team'></img>
            </div>
        </div>
    </div>
  );
}

export default Team;
