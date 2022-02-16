import React, { Component } from 'react'
import './Registration.css';
// import {Button} from './Button';
import TranslatableText from '../context/TranslatableText';
export default class Registration extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
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
       motivation: ''
    }
  }

  changeHandler = (e) => {
    this.setState({[e.target.name] : e.target.value})
  }

  submitHandler = e => {
    e.preventDefault();
	
	let url = "https://script.google.com/macros/s/AKfycbz7s4W1sVS2DdN--_qDn5nB5_EiSlHMnMV-zi59HPtH2aYoDepXzPEAqdBWV6bUDM2RfA/exec";

	fetch(url, {
        method: 'POST',
        body: JSON.stringify(this.state)
      }).then((resp) => {
          return resp.json();
      }).then((body) => {
        console.log(body);
      }).catch((error) => {
		console.error(error);
	  });
    console.log(this.state);
  }
  
  
  render() {
    const { email, first_name, 	last_name, date_of_birth, state_id, citizenship, city_of_residence, school_name, pursuing_degree, current_year,enrollment_verification, contest_language, programming_language, cv, motivation} = this.state;    
    return (
      <div  className="container" id="registration">
        <h1><TranslatableText
             dictionary={{ english: "Registration form", russian: "Форма для регистрации", kazakh: "Тіркелу формасы" }}
            /></h1>
        <form className="form" onSubmit={this.submitHandler}>
        
			<label>
      <TranslatableText
             dictionary={{ english: "E-mail", russian: "Электронная почта", kazakh: "Электронды пошта" }}
        /> 
      </label>
            <input  type="email" name = "email" value = {email} onChange={this.changeHandler}/>
            <label><TranslatableText
               dictionary={{ english: "First name", russian: "Имя", kazakh: "Аты" }}
            />
        </label>
            <input type="text" name = "first_name" value = {first_name} onChange={this.changeHandler}/>
            <label><TranslatableText
             dictionary={{ english: "Last name", russian: "Фамилия", kazakh: "Тегі" }}
            />
        </label>
            <input type="text" name = "last_name" value = {last_name} onChange={this.changeHandler}/>
         
            <label><TranslatableText
             dictionary={{ english: "Date of birth", russian: "Дата рождения", kazakh: "Туылған күні" }}
            /></label>
            <input type="date" name = "date_of_birth" value = {date_of_birth} onChange={this.changeHandler}/>
          
            <label><TranslatableText
             dictionary={{ english: "State ID (link)", russian: "Удостовение личности (ссылка)", kazakh: "Жеке куәлігі (сілтеме)" }}
            /></label>
            <input placeholder='ex: https://drive.google.com/file/d/1_ezCOeT6YJQfiVndtI3h00uUPkg/view?usp=sharing' type="text" name = "state_id" value = {state_id} onChange={this.changeHandler}/>
          
			<label><TranslatableText
             dictionary={{ english: "Citizenship", russian: "Гражданство", kazakh: "Азаматтығы" }}
            /></label>
            <input type="text" name = "citizenship" value = {citizenship} onChange={this.changeHandler}/>

			<label><TranslatableText
             dictionary={{ english: "City of residence", russian: "Город проживания", kazakh: "Қала" }}
            /></label>
            <input type="text" name = "city_of_residence" value = {city_of_residence} onChange={this.changeHandler}/>

			<label><TranslatableText
             dictionary={{ english: "University or School organization name", russian: "Полное название университета или школы", kazakh: "Университет немесе мектептің толық атауы" }}
            /></label>
            <input type="text" name = "school_name" value = {school_name} onChange={this.changeHandler}/>

			<label><TranslatableText dictionary={{ english: "Currently pursuing degree ", russian: "Ваша текущая степень", kazakh: "Қазіргі алып жатырған дәреже" }} /></label>
            {/* <input placeholder='High School, Bachelors, Masters, PhD' type="text" name = "pursuing_degree" value = {pursuing_degree} onChange={this.changeHandler}/> */}
			<select name = "pursuing_degree" value = {pursuing_degree} onChange={this.changeHandler}>
                                    <option value = "highschool">Highschool</option>
                                    <option value = "bachelors">Bachelors</option>
                                    <option value = "masters">Masters</option>
									<option value = "phd">PhD</option>

                                </select>
			<label><TranslatableText dictionary={{ english: "Years completed towards degree ", russian: "Текущий год обучения", kazakh: "Оқу жылы" }} /> </label>
            <input type="number"  name = "current_year" value = {current_year} onChange={this.changeHandler}/>

			<label><TranslatableText dictionary={{ english: "Official Transcript or Enrollment verification (Spravka)", russian: "Официальный транскрипт или справка о зачислении ", kazakh: "Ресми транскрипт немесе қабылдану туралы анықтама" }} /> </label>
            <input placeholder='ex: https://drive.google.com/file/d/1_ezCOeT6YJQfiVndtI3h00uUPkg/view?usp=sharing' type="text" name = "enrollment_verification" value = {enrollment_verification} onChange={this.changeHandler}/>

			<label><TranslatableText dictionary={{ english: "Contest language preference", russian: "Предпочтительный язык марафона", kazakh: "Марафон тілін таңдаңыз" }} /> </label>
            <input placeholder='English, Russian, Kazakh' type="text" name = "contest_language" value = {contest_language} onChange={this.changeHandler}/>

			<label><TranslatableText dictionary={{ english: "Programming language preference", russian: "Предпочтительный язык программирования", kazakh: "Бағдарламалау тілін таңдаңыз" }} /></label>
            <input placeholder='ex: C++, Python, Java' type="text" name = "programming_language" value = {programming_language} onChange={this.changeHandler}/>


			<label><TranslatableText dictionary={{ english: "CV or Resume", russian: "CV или резюме", kazakh: "CV немесе түйіндеме" }} /></label>
            <input placeholder='ex: https://drive.google.com/file/d/1_ezCOeT6YJQfiVndtI3h00uUPkg/view?usp=sharing' type="text" name = "cv" value = {cv} onChange={this.changeHandler}/>

			<label><TranslatableText dictionary={{ english: "Motivational letter", russian: "Мотивационное письмо", kazakh: "Мотивациялық хат" }} /> </label>
            <input  type="text" name = "motivation" value = {motivation} onChange={this.changeHandler}/>
            
            <button type='submit' id="submit" className='registration-btn'>Submit</button>

        </form>

      </div>
    )
  }
}
