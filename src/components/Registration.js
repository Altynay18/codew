import React, { Component } from 'react'
import './Registration.css';

export default class Registration extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
	   email: '',
       first_Name: '',
       last_name: '',
       date_of_birth: '',
	   state_id: '',
	   citizenship: '',
	   city_of_residence: '',
       school_name: '',
       pursuing_degree: '',
       current_year: 0,
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
      <div  className="container">
        <h1>Registration form</h1>
        <form className="form" onSubmit={this.submitHandler}>
			<label>e-mail</label>
            <input placeholder='Enter your email' type="email" name = "email" value = {email} onChange={this.changeHandler}/>
            <label>First name</label>
            <input placeholder='Enter your name' type="text" name = "first_name" value = {first_name} onChange={this.changeHandler}/>
            <label>Last name</label>
            <input placeholder='Enter your age' type="text" name = "last_name" value = {last_name} onChange={this.changeHandler}/>
         
            <label>Date of birth</label>
            <input placeholder='Enter your date of birth' type="date" name = "date_of_birth" value = {date_of_birth} onChange={this.changeHandler}/>
          
            <label>State ID</label>
            <input placeholder='Link to your state ID' type="text" name = "state_id" value = {state_id} onChange={this.changeHandler}/>
          
			<label>Citizenship </label>
            <input placeholder='Enter your citizenship' type="text" name = "citizenship" value = {citizenship} onChange={this.changeHandler}/>

			<label>City of residence</label>
            <input placeholder='Enter your city' type="text" name = "city_of_residence" value = {city_of_residence} onChange={this.changeHandler}/>

			<label>University or School organization name</label>
            <input placeholder='Enter your organization name' type="text" name = "school_name" value = {school_name} onChange={this.changeHandler}/>

			<label>Currently Pursuing Degree</label>
            {/* <input placeholder='High School, Bachelors, Masters, PhD' type="text" name = "pursuing_degree" value = {pursuing_degree} onChange={this.changeHandler}/> */}
			<select name = "pursuing_degree" value = {pursuing_degree} onChange={this.changeHandler}>
                                    <option value = "highschool">Highschool</option>
                                    <option value = "bachelors">Bachelors</option>
                                    <option value = "masters">Masters</option>
									<option value = "phd">PhD</option>

                                </select>
			<label>Years completed towards degree/Current year</label>
            <input placeholder='Current year' type="number" step="1" name = "current_year" value = {current_year} onChange={this.changeHandler}/>

			<label>Official Transcript or Enrollment verification (Spravka)</label>
            <input placeholder='Link to your spravka ' type="text" name = "enrollment_verification" value = {enrollment_verification} onChange={this.changeHandler}/>

			<label>Contest language preference</label>
            <input placeholder='English, Russian, Kazakh' type="text" name = "contest_language" value = {contest_language} onChange={this.changeHandler}/>

			<label>Programming language preference</label>
            <input placeholder='Can be many ' type="text" name = "programming_language" value = {programming_language} onChange={this.changeHandler}/>


			<label>CV or Resume</label>
            <input placeholder='Link to your CV or Resume ' type="text" name = "cv" value = {cv} onChange={this.changeHandler}/>

			<label>Motivation</label>
            <input placeholder='No more than 150 words' type="text" name = "motivation" value = {motivation} onChange={this.changeHandler}/>

          <button color="blue" type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}
// import { useState } from 'react';
// import './Registration.css'

// export default function Registration() {

// // States for registration
// const [name, setName] = useState('');
// const [email, setEmail] = useState('');
// const [password, setPassword] = useState('');

// // States for checking the errors
// const [submitted, setSubmitted] = useState(false);
// const [error, setError] = useState(false);

// // Handling the name change
// const handleName = (e) => {
// 	setName(e.target.value);
// 	setSubmitted(false);
// };

// // Handling the email change
// const handleEmail = (e) => {
// 	setEmail(e.target.value);
// 	setSubmitted(false);
// };

// // Handling the password change
// const handlePassword = (e) => {
// 	setPassword(e.target.value);
// 	setSubmitted(false);
// };

// // Handling the form submission
// const handleSubmit = (e) => {
// 	e.preventDefault();
// 	if (name === '' || email === '' || password === '') {
// 	setError(true);
// 	} else {
// 	setSubmitted(true);
// 	setError(false);
// 	}
// };

// // Showing success message
// const successMessage = () => {
// 	return (
// 	<div
// 		className="success"
// 		style={{
// 		display: submitted ? '' : 'none',
// 		}}>
// 		<h1>User {name} successfully registered!!</h1>
// 	</div>
// 	);
// };

// // Showing error message if error is true
// const errorMessage = () => {
// 	return (
// 	<div
// 		className="error"
// 		style={{
// 		display: error ? '' : 'none',
// 		}}>
// 		<h1>Please enter all the fields</h1>
// 	</div>
// 	);
// };

// return (
// 	<div className="registration-section">
// 	<div className='title'>
// 		Register here
// 	</div>
//     <div className='form'>
// 	{/* Calling to the methods */}
// 	<div className="messages">
// 		{errorMessage()}
// 		{successMessage()}
// 	</div>

// 	<form className='form-container'>
// 		{/* Labels and inputs for form data */}
//         <label className="label">Email:</label>
// 		<input onChange={handleEmail} className="input"
// 		value={email} type="email" />

// 		<label className="label">Name:</label>
// 		<input onChange={handleName} className="input"
// 		value={name} type="text" />

//         <label className="label">Surname:</label>
// 		<input onChange={handleName} className="input"
// 		value={name} type="text" />

// 		<label className="label">Date of birth:</label>
// 		<input onChange={handlePassword} className="input"
// 		value={password} type="date" />

//         <label className="label">Copy of State ID:</label>
// 		<input onChange={handleName} className="input"
// 		value={name} type="file" alt='state id' />

//         <label className="label">Citizenship:</label>
// 		<input onChange={handleName} className="input"
// 		value={name} type="text" />

//         <label className="label">City of residence:</label>
// 		<input onChange={handleName} className="input"
// 		value={name} type="text"/>

//         <label className="label">University of School Organization name:</label>
// 		<input onChange={handleName} className="input"
// 		value={name} type="text"/>

//         <label className="label">Currently Pursuing Degree:</label>
// 		<input onChange={handleName} className="input"
// 		value={name} type="text"/>

//         <label className="label">Current year:</label>
// 		<input onChange={handleName} className="input"
// 		value={name} type="text"/>

//         <label className="label">Official Transcript or Enrollment verification:</label>
// 		<input onChange={handleName} className="input"
// 		value={name} type="text"/>

//         <label className="label">Contest language preference:</label>
// 		<input onChange={handleName} className="input"
// 		value={name} type="text"/>

//         <label className="label">Programming language preference</label>
// 		<input onChange={handleName} className="input"
// 		value={name} type="text"/>

//         <label className="label">CV or Resume:</label>
// 		<input onChange={handleName} className="input"
// 		value={name} type="file"/>

//         <label className="label">Motivation:</label>
// 		<input onChange={handleName} className="input"
// 		value={name} type="text"/>
// 		<button onClick={handleSubmit} className="btn-registration" type="submit">
// 		Submit
// 		</button>
// 	</form>
//     </div>
// 	</div>
// );

// }

