import React from 'react';
import './FaqUpd.css'
import TranslatableText from '../context/TranslatableText';
function FaqUpd() {

  return (
    <div className='faq' id="faq">
        <h1 className='faq-title'>
            <TranslatableText
                dictionary={{ english: "Frequently asked questions:", russian: "Часто задаваемые вопросы", kazakh: "Жиі қойылатын сұрақтар" }}
            />
        </h1>
        <div className='faq-container'>
            <div className='column1'>
                <div className='faq-item'>
                    <h3 className='faq-quesion'> 
                        <TranslatableText
                            dictionary={{ english: "Who can participate ?", russian: "Кто может участвовать в соревновании?", kazakh: "Кім қатыса алады?" }}
                        />
                    </h3>
                    <p className='faq-answer'>
                        <TranslatableText
                            dictionary={{ english: "Everyone of age 16 to 25 who identify themselves female is welcome to participate. You don’t need to be a Nazarbayev University student.", 
                            russian: "Девушки в возрасте от 16 до 25 приветствуются для участия в соревновании. Вам не обязательно быть студентом Назарбаев Университета.", 
                            kazakh: "Жарысқа 16 мен 25 жас аралығындағы өздерін әйел ретінде анықтайтын кез келген адам қатыса алады. Назарбаев Университетінің студенті болуыңыз міндетті емес." }}
                        /> 
                    </p>
                </div>
                <div className='faq-item'>
                    <h3 className='faq-quesion'>
                        <TranslatableText
                            dictionary={{ english: "Can I participate if I am new to programming ?", 
                            russian: "Можно ли участвовать, если я новичок в программировании?", 
                            kazakh: "Мен бағдарламалауға жаңа болсам, маған қатысуға бола ма?" }}
                        />
                    </h3>
                    <p className='faq-answer'>
                        <TranslatableText
                            dictionary={{ english: "Yes, we encourage everyone interested in programming to join us.  All you need to know is the basics of at least one Object-oriented programming language. There will be three tracks depending on your level: novice, intermediate, experienced (see details above). Your level will be determined according to the results of qualifier test on HackerRank.", 
                            russian: "Да, мы приглашаем всех, кто интересуется программированием, присоединиться к нам. Все, что вам нужно знать, - это основы, как минимум, одного языка программирования.В соревновании будет три уровня: начинающий, средний и продвинутый. Ваш уровень будет определен посредством теста, который мы вышлем участницам после регистрации.", 
                            kazakh: "Иә, біз бағдарламалауға қызығушылығы бар әр адамды бізге қосылуға шақырамыз. Сізге ең болмағанда бір объектіге-бағытталған бағдарламалау тілі негіздерін білу қажет.Жарыста қатысушылардың бағдарламалау деңгейлеріне байланысты 3 бағыт болады: бастауыш, орта және ілгерінді (толық ақпарат жоғарыда).Сіздің деңгейіңіз HackerRank платформасындағы деңгейді анықтайтын тест нәтижесінен кейін белгілі болады." }}
                        />
                    </p>
                </div>
                <div className='faq-item'>
                    <h3 className='faq-quesion'>
                        <TranslatableText
                            dictionary={{ english: "Where will codeW be held?", 
                            russian: "Где будет проходить соревнование codeW?", 
                            kazakh: "codeW қай жерде өтеді?" }}
                        />
                    </h3>
                    <p className='faq-answer'>
                        <TranslatableText
                            dictionary={{ english: "This year codeW will be conducted in a partially offline format. Contestants residing in Nur-Sultan can come to AstanaHub, from where we will be streaming our event(number of seats is limited). Other participants can join us online.", 
                            russian: "В этом году codeW будет прововидиться в гибридном режиме. Проживающие в Нур-Султане участники могут прийти в AstanaHub, откуда будет стрим нашего мероприятия(количество участников ограничено).", 
                            kazakh: "Осы жылы codeW гибридті режимде өткізілетін болады. Нұр-Сұлтан қаласында тұратын қатысушылар AstanaHub ғимаратына келе алады. Біз сол жерден онлайн стрим жүргізетін боламыз" }}
                        />
                    </p>
                </div>
                
            </div>

            <div className='column2'>
                <div className='faq-item'>
                    <h3 className='faq-quesion'>
                        <TranslatableText
                            dictionary={{ english: "Do I have to know English ?", 
                            russian: "Мне обязательно знать английский для участия?", 
                            kazakh: "Маған ағылшын тілін білу міндетті ме?" }}
                        />
                    </h3>
                    <p className='faq-answer'>
                        <TranslatableText
                            dictionary={{ english: "No, you don’t have to. codeW will be held in three different languages: English, Kazakh, and Russian. All tasks and materials from workshops will be translated into Russian and Kazakh languages.", 
                            russian: "В этом нет необходимости. codeW пройдет на трех языках: английском, казахском и русском. Все задания и материалы будут также переведены на русский и казахский языки.", 
                            kazakh: "Жоқ, міндетті емес. codeW 3 тілде өткізіледі: қазақ, орыс және ағылшын. Барлық тапсырмалар және мастер-класс материалдары қазақ және орыс тілдеріне аударылатын болады." }}
                        />
                    </p>
                </div>
                <div className='faq-item'>
                    <h3 className='faq-quesion'>
                        <TranslatableText
                            dictionary={{ english: "How do I know which track is suitable for me?", 
                            russian: "Как узнать, какой уровень мне подходит?", 
                            kazakh: "Менің деңгейім қандай бағытқа сәйкес келетінін қалай білемін?" }}
                        />
                    </h3>
                    <p className='faq-answer'>
                        <TranslatableText
                            dictionary={{ english: "If you got selected, you will receive a link to the preliminary challenge that will identify your level and we will match you to a suitable track.", 
                            russian: "Если вы будете отобраны для участия в соревновании, вы получите ссылку на предварительный тест, который определит ваш уровень.", 
                            kazakh: "Тіркелуден кейін поштаңызға деңгейді анықтайтын тапсырмаларға сілтеме аласыз. Тест нәтижесіне сәйкес сізге сай бағыт таңдалады." }}
                        />
                    </p>
                </div>
                <div className='faq-item'>
                    <h3 className='faq-quesion'>
                        <TranslatableText
                            dictionary={{ english: "What programming languages are accepted in the contest ?", 
                            russian: "Какие языки программирования могут быть использованы/принимаются на соревновании?", 
                            kazakh: "Жарысты қандай бағдарламалау тілдерінде жазуға болады?" }}
                        />
                    </h3>
                    <p className='faq-answer'>
                        <TranslatableText
                            dictionary={{ english: "The contest will be held using a special platform where all commonly used programming languages are supported (e.g. Java, Python, C++ but not Prolog, OCaml, etc.)", 
                            russian: "Конкурс будет проводиться с использованием специальной платформы, на которой поддерживаются все распространенные языки программирования.", 
                            kazakh: "Марафон жиі пайдаланылатын бағдарламалау тілдерін қолдайтын арнайы платформада өткізіледі (мысалы, Java, Python, C++, бірақ Prolog, OCaml сияқты тілдер емес)." }}
                        />
                    </p>
                </div>
                <div className='faq-item'>
                    <h3 className='faq-quesion'>
                        <TranslatableText
                            dictionary={{ english: "Is it free ?", 
                            russian: "Участие в соревновании бесплатное?", 
                            kazakh: "Қатысу тегін бе?" }}
                        />
                    </h3>
                    <p className='faq-answer'>
                        <TranslatableText
                            dictionary={{ english: "Yes, it is absolutely free.", 
                            russian: "Да, все абсолютно бесплатно.", 
                            kazakh: "Иә, жарысқа қатысу толықтай тегін." }}
                        />
                    </p>
                </div>
            </div>
        </div>
   </div>
  );
}

export default FaqUpd;
