import { useState } from 'react';
import './Registration.css'

export default function Registration() {

// States for registration
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

// States for checking the errors
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);

// Handling the name change
const handleName = (e) => {
	setName(e.target.value);
	setSubmitted(false);
};

// Handling the email change
const handleEmail = (e) => {
	setEmail(e.target.value);
	setSubmitted(false);
};

// Handling the password change
const handlePassword = (e) => {
	setPassword(e.target.value);
	setSubmitted(false);
};

// Handling the form submission
const handleSubmit = (e) => {
	e.preventDefault();
	if (name === '' || email === '' || password === '') {
	setError(true);
	} else {
	setSubmitted(true);
	setError(false);
	}
};

// Showing success message
const successMessage = () => {
	return (
	<div
		className="success"
		style={{
		display: submitted ? '' : 'none',
		}}>
		<h1>User {name} successfully registered!!</h1>
	</div>
	);
};

// Showing error message if error is true
const errorMessage = () => {
	return (
	<div
		className="error"
		style={{
		display: error ? '' : 'none',
		}}>
		<h1>Please enter all the fields</h1>
	</div>
	);
};

return (
	<div className="registration-section">
	<div className='title'>
		Register here
	</div>
    <div className='form'>
	{/* Calling to the methods */}
	<div className="messages">
		{errorMessage()}
		{successMessage()}
	</div>

	<form className='form-container'>
		{/* Labels and inputs for form data */}
        <label className="label">Email:</label>
		<input onChange={handleEmail} className="input"
		value={email} type="email" />

		<label className="label">Name:</label>
		<input onChange={handleName} className="input"
		value={name} type="text" />

        <label className="label">Surname:</label>
		<input onChange={handleName} className="input"
		value={name} type="text" />

		<label className="label">Date of birth:</label>
		<input onChange={handlePassword} className="input"
		value={password} type="date" />

        <label className="label">Copy of State ID:</label>
		<input onChange={handleName} className="input"
		value={name} type="file" alt='state id' />

        <label className="label">Citizenship:</label>
		<input onChange={handleName} className="input"
		value={name} type="text" />

        <label className="label">City of residence:</label>
		<input onChange={handleName} className="input"
		value={name} type="text"/>

        <label className="label">University of School Organization name:</label>
		<input onChange={handleName} className="input"
		value={name} type="text"/>

        <label className="label">Currently Pursuing Degree:</label>
		<input onChange={handleName} className="input"
		value={name} type="text"/>

        <label className="label">Current year:</label>
		<input onChange={handleName} className="input"
		value={name} type="text"/>

        <label className="label">Official Transcript or Enrollment verification:</label>
		<input onChange={handleName} className="input"
		value={name} type="text"/>

        <label className="label">Contest language preference:</label>
		<input onChange={handleName} className="input"
		value={name} type="text"/>

        <label className="label">Programming language preference</label>
		<input onChange={handleName} className="input"
		value={name} type="text"/>

        <label className="label">CV or Resume:</label>
		<input onChange={handleName} className="input"
		value={name} type="file"/>

        <label className="label">Motivation:</label>
		<input onChange={handleName} className="input"
		value={name} type="text"/>
		<button onClick={handleSubmit} className="btn-registration" type="submit">
		Submit
		</button>
	</form>
    </div>
	</div>
);
}
