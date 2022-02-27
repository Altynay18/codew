import React, { Component } from 'react'
import './Registration.css';
// import {Button} from './Button';
import TranslatableText from '../context/TranslatableText';
// import { date } from 'yup/lib/locale';

const initialState = {
  email: '',
  first_name: '',
  last_name: '',
  date_of_birth: '',
  state_id: '',
  citizenship: '',
  city_of_residence: '',
  school_name: '',
  pursuing_degree: '',
  current_year: '',
  enrollment_verification: '',
  contest_language: '',
  programming_language: '',
  cv: '',
  motivation: '',
  
  email_err: '',
  first_name_err: '',
  last_name_err: '',
  date_of_birth_err: '',
  state_id_err: '',
  citizenship_err: '',
  city_of_residence_err: '',
  school_name_err: '',
  pursuing_degree_err: '',
  current_year_err: '',
  enrollment_verification_err: '',
  
  cv_err: '',
  motivation_err: '',
}

const w3_email_regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// eslint-disable-next-line no-useless-escape
const url_regex =  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/ ;

export default class Registration extends Component {
  constructor(props) {
    super(props)
  
    this.state = initialState;
  }

  changeHandler = (e) => {
    this.setState({[e.target.name] : e.target.value})
  }

  countWords = (str) => {
    str = str.replace(/(^\s*)|(\s*$)/gi,"");
    str = str.replace(/[ ]{2,}/gi," ");
    str = str.replace(/\n /,"\n");
    return str.split(' ').length;
  }

   myFunction() {
    alert("this is the alert");
  }


  validate = () => {
    let email_err = "";
    let first_name_err = "";
    let last_name_err = "";
    let date_of_birth_err = '';
    let state_id_err = '';
    let citizenship_err = '';
    let city_of_residence_err = '';
    let school_name_err = '';
    let pursuing_degree_err = '';
    let current_year_err = '';
    let enrollment_verification_err = '';

    let cv_err = '';
    let motivation_err = '';

    if(!w3_email_regex.test(this.state.email)){
      email_err = "invalid email";
      console.log(email_err);
    }
    
    if(!this.state.first_name){
      first_name_err = "blank first name";
      console.log(first_name_err);
    }
    if(!this.state.last_name){
      last_name_err = "blank last name";
      console.log(last_name_err);
    }
    if(!this.state.date_of_birth){
      date_of_birth_err = "blank date of birth";
      console.log(date_of_birth_err);
    }
    if(!this.state.citizenship){
      citizenship_err = "blank citizenship";
      console.log(citizenship_err);
    }
    if(!this.state.city_of_residence){
      city_of_residence_err = "blank city of residence";
      console.log(city_of_residence_err);
    }
    if(!this.state.school_name){
      school_name_err = "blank uni or school";
      console.log(school_name_err);
    }
    if(!this.state.pursuing_degree){
      pursuing_degree_err = "blank degree";
      console.log(pursuing_degree_err);
    }

    if(this.countWords(this.state.motivation) > 200 ) {
      motivation_err = "limit"
      console.log("write more motivation, you silly!");
    }
    if(!this.state.motivation) {
      motivation_err = "blank"
      console.log("at least write some motivation, silly");
    }

    if( (!this.state.current_year) || (!/^\d+$/.test(this.state.current_year)) ) {
      current_year_err = "invalid format"
      console.log(current_year_err);
    }

    if( (!url_regex.test(this.state.state_id)) || !this.state.state_id){
      state_id_err = "invalid link";
      console.log(state_id_err);
    }
    if( (!url_regex.test(this.state.enrollment_verification)) || !this.state.enrollment_verification){
      enrollment_verification_err = "Invalid link";
      console.log(enrollment_verification_err);
    }
    // if( (!url_regex.test(this.state.cv)) || !this.state.cv){
    //   cv_err = "invalid link";
    //   console.log(cv_err);
    // }

    if(
        email_err || first_name_err || last_name_err || 
        date_of_birth_err || citizenship_err || city_of_residence_err ||
        school_name_err || pursuing_degree_err || motivation_err ||
        current_year_err || state_id_err || enrollment_verification_err || cv_err 
      ){
      this.setState({ 
        email_err , first_name_err , last_name_err , 
        date_of_birth_err, citizenship_err, city_of_residence_err,
        school_name_err, pursuing_degree_err, motivation_err,
        current_year_err, state_id_err, enrollment_verification_err, cv_err 
      });
      return false;
    }

    return true;
  }

  submitHandler = e => {
    e.preventDefault();
	
    let url = "https://script.google.com/macros/s/AKfycbz7s4W1sVS2DdN--_qDn5nB5_EiSlHMnMV-zi59HPtH2aYoDepXzPEAqdBWV6bUDM2RfA/exec";

    const isValid = this.validate();

    let data = {
      email: this.state.email,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      date_of_birth: this.state.date_of_birth,
      state_id: this.state.state_id,
      citizenship: this.state.citizenship,
      city_of_residence: this.state.city_of_residence,
      school_name: this.state.school_name,
      pursuing_degree: this.state.pursuing_degree,
      current_year: this.state.current_year,
      enrollment_verification: this.state.enrollment_verification,
      contest_language: this.state.contest_language,
      programming_language: this.state.programming_language,
      cv: this.state.cv,
      motivation: this.state.motivation,
    }

    if (isValid) {
      fetch(url, {
            method: 'POST',
            body: JSON.stringify(data)
          }).then((resp) => {
              return resp.json();
          }).then((body) => {
            console.log(body);
          }).catch((error) => {
        console.error(error);
        });
      console.log(data);
      
      // clear form
      this.setState(initialState);
    } else {
      const element = document.getElementById('start_of_form');
      element.scrollIntoView({behavior: 'smooth'});
    }
  }
  
  
  render() {
    const { email, first_name, 	last_name, date_of_birth, state_id, citizenship, city_of_residence, school_name, pursuing_degree, current_year,enrollment_verification, contest_language, programming_language, cv, motivation} = this.state;    
    return (
      <div  className="container" id="registration">
        <h1 id="start_of_form">
          <TranslatableText
              dictionary={{ english: "Registration form", russian: "Форма для регистрации", kazakh: "Тіркелу формасы" }}
            />
        </h1>
        {/* <div className='reg-closed'>
        <TranslatableText
              dictionary={{ english: "Registration period has closed", russian: "Период регистрации завершен", kazakh: "Тіркеу мерзімі аяқталды" }}
            />
        </div> */}
        <form className="form" onSubmit={this.submitHandler}>
        

        <label>
          <TranslatableText
              dictionary={{ english: "E-mail*", russian: "Электронная почта*", kazakh: "Электронды пошта*" }}
            /> 
        </label>
        <input name = "email" value = {email} onChange={this.changeHandler}/>
        { this.state.email_err ? <div className="errmsg">
          <TranslatableText
            dictionary={{ english: "Invalid email", russian: "Неверный адрес электронной почты", kazakh: "Қате электрондық пошта мекенжайы" }}
            />
        </div> : null}
        
        <label>
          <TranslatableText
              dictionary={{ english: "First name*", russian: "Имя*", kazakh: "Аты*" }}
            />
        </label>
        <input type="text" name = "first_name" value = {first_name} onChange={this.changeHandler}/>
        { this.state.first_name_err ? <div className="errmsg">
          <TranslatableText
            dictionary={{ english: "Enter your first name", russian: "Введите свое имя", kazakh: "Атыңызды енгізіңіз" }}
            />
        </div> : null}

        <label>
          <TranslatableText
              dictionary={{ english: "Last name*", russian: "Фамилия*", kazakh: "Тегі*" }}
            />
        </label>
        <input type="text" name = "last_name" value = {last_name} onChange={this.changeHandler}/>
        { this.state.last_name_err ? <div className="errmsg">
          <TranslatableText
            dictionary={{ english: "Enter your last name", russian: "Введите вашу фамилию", kazakh: "Атыңызды енгізіңіз" }}
            />
        </div> : null}
      
        <label>
          <TranslatableText
              dictionary={{ english: "Date of birth*", russian: "Дата рождения*", kazakh: "Туылған күні*" }}
            />
        </label>
        <input type="date" name = "date_of_birth" value = {date_of_birth} onChange={this.changeHandler}/>
        {/* <div>{this.state.date_of_birth}</div> */}
        { this.state.date_of_birth_err ? <div className="errmsg">
          <TranslatableText
            dictionary={{ english: "Enter your date of birth or use valid format", russian: "Дата рождения не введена или не соответвует формату", kazakh: "Туылған күн енгізілмеген, немесе қате форматта" }}
            />
        </div> : null}
      
      
        <label>
          <TranslatableText
              dictionary={{ english: "State ID* (link)", russian: "Удостоверение личности* (ссылка)", kazakh: "Жеке куәлігі* (сілтеме)" }}
            />
        </label>
        <input placeholder='ex: https://drive.google.com/file/d/1_ezCOeT6YJQfiVndtI3h00uUPkg/view?usp=sharing' type="text" name = "state_id" value = {state_id} onChange={this.changeHandler}/>
        { this.state.state_id_err ? <div className="errmsg">
          <TranslatableText
            dictionary={{ english: "Enter valid link", russian: "Введите правильную ссылку", kazakh: "Дұрыс сілтеме енгізіңіз" }}
            />
        </div> : null}
      
          
        <label>
          <TranslatableText
              dictionary={{ english: "Citizenship*", russian: "Гражданство*", kazakh: "Азаматтығы*" }}
            />
        </label>
        <input type="text" name = "citizenship" value = {citizenship} onChange={this.changeHandler}/>
        { this.state.citizenship_err ? <div className="errmsg">
          <TranslatableText
            dictionary={{ english: "Enter your citizenship", russian: "Введите ваше гражданство", kazakh: "Өз азаматтығыңызды енгізіңіз" }}
            />
        </div> : null}

        <label><TranslatableText
              dictionary={{ english: "City of residence*", russian: "Город проживания*", kazakh: "Қала*" }}
              /></label>
        <input type="text" name = "city_of_residence" value = {city_of_residence} onChange={this.changeHandler}/>
        { this.state.city_of_residence_err ? <div className="errmsg">
          <TranslatableText
            dictionary={{ english: "Enter your city of residence", russian: "Введите ваш город проживания", kazakh: "Тұрғылықты қалаңызды енгізіңіз" }}
            />
        </div> : null}

        <label>
          <TranslatableText
              dictionary={{ english: "University or School organization name*", russian: "Полное название университета или школы*", kazakh: "Университет немесе мектептің толық атауы*" }}
            />
        </label>
        <input type="text" name = "school_name" value = {school_name} onChange={this.changeHandler}/>
        { this.state.city_of_residence_err ? <div className="errmsg">
          <TranslatableText
            dictionary={{ english: "Please fill out the field", russian: "Пожалуйста, заполните поле", kazakh: "Ақпаратты енгізуіңізді сұраймыз" }}
            />
        </div> : null}

        <label>
          <TranslatableText 
              dictionary={{ english: "Currently pursuing degree/Latest acquired degree * ", russian: "Ваша текущая степень/Последняя полученная степень*", kazakh: "Қазіргі алып жатырған деңгей/Соңғы алған деңгейіңіз*" }} 
            />
        </label>
        {/* <input placeholder='High School, Bachelors, Masters, PhD' type="text" name = "pursuing_degree" value = {pursuing_degree} onChange={this.changeHandler}/> */}
        <select name = "pursuing_degree" value = {pursuing_degree} onChange={this.changeHandler}>
            <option value = "default">Choose one</option>
            <option value = "highschool">Highschool</option>
            <option value = "bachelors">Bachelors</option>
            <option value = "masters">Masters</option>
            <option value = "phd">PhD</option>
        </select>
        { this.state.city_of_residence_err ? <div className="errmsg">
          <TranslatableText
            dictionary={{ english: "Select one option", russian: "Пожалуйста, выберите один из вариантов", kazakh: "Берілген нұсқалардың біреуін таңдаңыз" }}
            />
        </div> : null}

        <label><TranslatableText dictionary={{ english: "Current year* ", russian: "Текущий год обучения*", kazakh: "Оқу жылы*" }} /> </label>
        <input type="number" min="0" max="10" name = "current_year" value = {current_year} onChange={this.changeHandler}/>
         { this.state.current_year_err ? <div className="errmsg">
          <TranslatableText
            dictionary={{ english: "Use only numbers from 0 to 5", russian: "Ипользуйте лишь числа от 0 до 5", kazakh: "0 мен 5-тің арасындағы сандарды ғана қолданыңыз" }}
            />
        </div> : null}

        <label><TranslatableText dictionary={{ english: "Transcript or Enrollment verification* (unofficial transcripts can also be accepted)", russian: "Транскрипт или справка о зачислении* (неофициальный транскрипт тоже принимается) ", kazakh: "Транскрипт немесе қабылдану туралы анықтама* (ресми емес транскрипт те қабылданады)" }} /> </label>
        <input placeholder='ex: https://drive.google.com/file/d/1_ezCOeT6YJQfiVndtI3h00uUPkg/view?usp=sharing' type="text" name = "enrollment_verification" value = {enrollment_verification} onChange={this.changeHandler}/>
        { this.state.enrollment_verification_err ? <div className="errmsg">
          <TranslatableText
            dictionary={{ english: "Enter valid link", russian: "Введите правильную ссылку", kazakh: "Дұрыс сілтеме енгізіңіз" }}
            />
        </div> : null}

        <label><TranslatableText dictionary={{ english: "Contest language preference", russian: "Предпочтительный язык марафона", kazakh: "Марафон тілін таңдаңыз" }} /> </label>
        <input placeholder='English, Russian, Kazakh' type="text" name = "contest_language" value = {contest_language} onChange={this.changeHandler}/>

        <label><TranslatableText dictionary={{ english: "Programming language preference (can be many)", russian: "Предпочтительный язык программирования (может быть несколько)", kazakh: "Бағдарламалау тілін таңдаңыз (бірнеше бола алады)" }} /></label>
        <input placeholder='ex: C++, Python, Java' type="text" name = "programming_language" value = {programming_language} onChange={this.changeHandler}/>

        <label><TranslatableText dictionary={{ english: "CV or Resume", russian: "CV или резюме", kazakh: "CV немесе түйіндеме" }} /></label>
        <input placeholder='ex: https://drive.google.com/file/d/1_ezCOeT6YJQfiVndtI3h00uUPkg/view?usp=sharing' type="text" name = "cv" value = {cv} onChange={this.changeHandler}/>
        {/* { this.state.cv_err ? <div className="errmsg">
          <TranslatableText
            dictionary={{ english: "Enter valid link", russian: "Введите правильную ссылку", kazakh: "Дұрыс сілтеме енгізіңіз" }}
            />
        </div> : null} */}

        <label><TranslatableText dictionary={{ english: "Motivational letter* (no more than 200 words)", russian: "Мотивационное письмо* (Не большое 200 слов)", kazakh: "Мотивациялық хат* (200 cөзден артық емес)" }} /> </label>
        <textarea  id = "mtv"name = "motivation" value = {motivation} onChange={this.changeHandler}></textarea>
        { this.state.motivation_err === "limit" ? <div className="errmsg">
          <TranslatableText
            dictionary={{ english: "Exceeded the word limit", russian: "Вы превысили лимит слов", kazakh: "200 сөз шектеуінен асып кеттіңіз" }}
            />
        </div> : null}
        { this.state.motivation_err === "blank" ? <div className="errmsg">
          <TranslatableText
            dictionary={{ english: "Please, fill in your motivational letter", russian: "Пожалуйста введите свое мотивационное письмо", kazakh: "Мотивациялық хатыңызды толтыруыңызды сұраймыз" }}
            />
        </div> : null}
            
        <button type='submit' id="submit" className='registration-btn' >Submit</button>
        <p id="demo" ></p>
        </form>
        <p className="reg_note">
        <TranslatableText
            dictionary={{ english: "In case of any problems with registration please contact us using the links below", russian: "В случае возникновения проблем с регистрацией свяжитесь с нами по ссылкам ниже", kazakh: "Тіркелуде қандай да бір мәселелер туындаса, төмендегі сілтемелер арқылы бізге хабарласыңыз" }}
            /></p>
         <p className="reg_note">
        <TranslatableText
            dictionary={{ english: "You will receive an e-mail confirmation when you successfully register", russian: "После успешной регистрации вы получите подтверждение по электронной почте.", kazakh: "Сәтті тіркелгеннен кейін электрондық поштаға растау хатын аласыз." }}
            /></p>

   
      </div>
    )
  }
}


// import React, { Component } from 'react'
// import './Registration.css';
// import TranslatableText from '../context/TranslatableText';
// export default class Registration extends Component {
//   constructor(props) {
//     super(props)
  
//     this.state = {
// 	    email: '',
//        first_name: '',
//        last_name: '',
//        date_of_birth: '',
// 	   state_id: '',
// 	   citizenship: '',
// 	   city_of_residence: '',
//        school_name: '',
//        pursuing_degree: '',
//        current_year: '',
//        enrollment_verification: '',
//        contest_language: '',
//        programming_language: '',
//        cv: '',
//        motivation: ''
//     }
//   }

//   changeHandler = (e) => {
//     this.setState({[e.target.name] : e.target.value})
//   }

//   submitHandler = e => {
//     e.preventDefault();
	
// 	let url = "https://script.google.com/macros/s/AKfycbz7s4W1sVS2DdN--_qDn5nB5_EiSlHMnMV-zi59HPtH2aYoDepXzPEAqdBWV6bUDM2RfA/exec";

// 	fetch(url, {
//         method: 'POST',
//         body: JSON.stringify(this.state)
//       }).then((resp) => {
//           return resp.json();
//       }).then((body) => {
//         console.log(body);
//       }).catch((error) => {
// 		console.error(error);
// 	  });
//     console.log(this.state);
//   }
  
  
//   render() {
//     const { email, first_name, 	last_name, date_of_birth, state_id, citizenship, city_of_residence, school_name, pursuing_degree, current_year,enrollment_verification, contest_language, programming_language, cv, motivation} = this.state;    
//     return (
//       <div  className="container" id="registration">
//         <h1><TranslatableText
//              dictionary={{ english: "Registration form", russian: "Форма для регистрации", kazakh: "Тіркелу формасы" }}
//             /></h1>
//         <form className="form" onSubmit={this.submitHandler}>
        
// 			<label>
//       <TranslatableText
//              dictionary={{ english: "E-mail", russian: "Электронная почта", kazakh: "Электронды пошта" }}
//         /> 
//       </label>
//             <input  type="email" name = "email" value = {email} onChange={this.changeHandler}/>
//             <label><TranslatableText
//                dictionary={{ english: "First name", russian: "Имя", kazakh: "Аты" }}
//             />
//         </label>
//             <input type="text" name = "first_name" value = {first_name} onChange={this.changeHandler}/>
//             <label><TranslatableText
//              dictionary={{ english: "Last name", russian: "Фамилия", kazakh: "Тегі" }}
//             />
//         </label>
//             <input type="text" name = "last_name" value = {last_name} onChange={this.changeHandler}/>
         
//             <label><TranslatableText
//              dictionary={{ english: "Date of birth", russian: "Дата рождения", kazakh: "Туылған күні" }}
//             /></label>
//             <input type="date" name = "date_of_birth" value = {date_of_birth} onChange={this.changeHandler}/>
          
//             <label><TranslatableText
//              dictionary={{ english: "State ID (link)", russian: "Удостоверение личности (ссылка)", kazakh: "Жеке куәлігі (сілтеме)" }}
//             /></label>
//             <input placeholder='ex: https://drive.google.com/file/d/1_ezCOeT6YJQfiVndtI3h00uUPkg/view?usp=sharing' type="text" name = "state_id" value = {state_id} onChange={this.changeHandler}/>
          
// 			<label><TranslatableText
//              dictionary={{ english: "Citizenship", russian: "Гражданство", kazakh: "Азаматтығы" }}
//             /></label>
//             <input type="text" name = "citizenship" value = {citizenship} onChange={this.changeHandler}/>

// 			<label><TranslatableText
//              dictionary={{ english: "City of residence", russian: "Город проживания", kazakh: "Қала" }}
//             /></label>
//             <input type="text" name = "city_of_residence" value = {city_of_residence} onChange={this.changeHandler}/>

// 			<label><TranslatableText
//              dictionary={{ english: "University or School organization name", russian: "Полное название университета или школы", kazakh: "Университет немесе мектептің толық атауы" }}
//             /></label>
//             <input type="text" name = "school_name" value = {school_name} onChange={this.changeHandler}/>

// 			<label><TranslatableText dictionary={{ english: "Currently pursuing degree ", russian: "Ваша текущая степень", kazakh: "Қазіргі алып жатырған дәреже" }} /></label>
//             {/* <input placeholder='High School, Bachelors, Masters, PhD' type="text" name = "pursuing_degree" value = {pursuing_degree} onChange={this.changeHandler}/> */}
// 			<select name = "pursuing_degree" value = {pursuing_degree} onChange={this.changeHandler}>
//                                     <option value = "highschool">Highschool</option>
//                                     <option value = "bachelors">Bachelors</option>
//                                     <option value = "masters">Masters</option>
// 									<option value = "phd">PhD</option>

//                                 </select>
// 			<label><TranslatableText dictionary={{ english: "Years completed towards degree ", russian: "Текущий год обучения", kazakh: "Оқу жылы" }} /> </label>
//             <input type="number"  name = "current_year" value = {current_year} onChange={this.changeHandler}/>

// 			<label><TranslatableText dictionary={{ english: "Official Transcript or Enrollment verification (Spravka)", russian: "Официальный транскрипт или справка о зачислении ", kazakh: "Ресми транскрипт немесе қабылдану туралы анықтама" }} /> </label>
//             <input placeholder='ex: https://drive.google.com/file/d/1_ezCOeT6YJQfiVndtI3h00uUPkg/view?usp=sharing' type="text" name = "enrollment_verification" value = {enrollment_verification} onChange={this.changeHandler}/>

// 			<label><TranslatableText dictionary={{ english: "Contest language preference", russian: "Предпочтительный язык марафона", kazakh: "Марафон тілін таңдаңыз" }} /> </label>
//             <input placeholder='English, Russian, Kazakh' type="text" name = "contest_language" value = {contest_language} onChange={this.changeHandler}/>

// 			<label><TranslatableText dictionary={{ english: "Programming language preference (can be many)", russian: "Предпочтительный язык программирования (может быть несколько)", kazakh: "Бағдарламалау тілін таңдаңыз (бірнеше бола алады)" }} /></label>
//             <input placeholder='ex: C++, Python, Java' type="text" name = "programming_language" value = {programming_language} onChange={this.changeHandler}/>


// 			<label><TranslatableText dictionary={{ english: "CV or Resume", russian: "CV или резюме", kazakh: "CV немесе түйіндеме" }} /></label>
//             <input placeholder='ex: https://drive.google.com/file/d/1_ezCOeT6YJQfiVndtI3h00uUPkg/view?usp=sharing' type="text" name = "cv" value = {cv} onChange={this.changeHandler}/>

// 			<label><TranslatableText dictionary={{ english: "Motivational letter (no more than 200 words)", russian: "Мотивационное письмо (Не большое 200 слов)", kazakh: "Мотивациялық хат (200 cөзден артық емес)" }} /> </label>
//             <input  type="textfield" id = "mtv"name = "motivation" value = {motivation} onChange={this.changeHandler}/>
            
//             <button type='submit' id="submit" className='registration-btn'>Submit</button>

//         </form>

//       </div>
//     )
//   }
// }
